import { NextResponse } from "next/server";

import { issueOtp, normalizeIndianMobile } from "@/lib/otp";

/** Minimum gap between OTPs to the same number (best-effort, per instance). */
const RESEND_COOLDOWN_MS = 30 * 1000;
const lastSent = new Map<string, number>();

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, errors: { form: "Could not read that request." } },
      { status: 400 },
    );
  }

  const raw = (body ?? {}) as Record<string, unknown>;
  const phone = normalizeIndianMobile(typeof raw.phone === "string" ? raw.phone : "");
  if (!phone) {
    return NextResponse.json(
      { ok: false, errors: { phone: "Enter a valid 10-digit Indian mobile number." } },
      { status: 422 },
    );
  }

  const now = Date.now();
  const previous = lastSent.get(phone) ?? 0;
  if (now - previous < RESEND_COOLDOWN_MS) {
    const wait = Math.ceil((RESEND_COOLDOWN_MS - (now - previous)) / 1000);
    return NextResponse.json(
      { ok: false, errors: { form: `Please wait ${wait} seconds before requesting another code.` } },
      { status: 429 },
    );
  }
  lastSent.set(phone, now);

  const { code, token } = issueOtp(phone);

  // INTEGRATION POINT: send `code` to `+91${phone}` through the SMS provider
  // (MSG91, Twilio, etc.) using a DLT-approved template. Until that is wired up
  // no SMS leaves the server, so the code is only surfaced outside production.
  const isDev = process.env.NODE_ENV !== "production";
  if (isDev) {
    console.info("[delete-account] OTP for", phone, "is", code);
  }

  return NextResponse.json({
    ok: true,
    token,
    ...(isDev ? { devCode: code } : {}),
  });
}
