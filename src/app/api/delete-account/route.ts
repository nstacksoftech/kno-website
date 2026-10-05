import { randomBytes } from "node:crypto";
import { NextResponse } from "next/server";

import { DELETE_ACCOUNT_REASONS } from "@/lib/data/delete-account";
import { normalizeIndianMobile, verifyOtp } from "@/lib/otp";

const OTP_ERRORS = {
  invalid: "That code is no longer valid. Request a new one.",
  expired: "That code has expired. Request a new one.",
  used: "That code has already been used. Request a new one.",
  locked: "Too many incorrect attempts. Request a new code.",
  mismatch: "That code is incorrect. Check the SMS and try again.",
} as const;

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

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
  const str = (key: string) => (typeof raw[key] === "string" ? (raw[key] as string).trim() : "");

  const phone = normalizeIndianMobile(str("phone"));
  const email = str("email");
  const reason = str("reason");
  const code = str("code");
  const token = str("token");

  const errors: Record<string, string> = {};
  if (!phone) errors.phone = "Enter a valid 10-digit Indian mobile number.";
  if (email && (!isEmail(email) || email.length > 254))
    errors.email = "That does not look like a valid email address.";
  if (reason && !DELETE_ACCOUNT_REASONS.includes(reason as (typeof DELETE_ACCOUNT_REASONS)[number]))
    errors.form = "Choose a reason from the list, or leave it blank.";
  if (!/^\d{6}$/.test(code)) errors.code = "Enter the 6-digit code we sent you.";
  if (!token) errors.form = "Request a verification code first.";

  if (Object.keys(errors).length > 0 || !phone) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const check = verifyOtp(token, phone, code);
  if (!check.ok) {
    return NextResponse.json(
      { ok: false, errors: { code: OTP_ERRORS[check.reason] } },
      { status: 401 },
    );
  }

  const requestId = `DEL-${randomBytes(4).toString("hex").toUpperCase()}`;
  const submission = {
    requestId,
    phone: `+91${phone}`,
    email: email || null,
    reason: reason || null,
    verifiedAt: new Date().toISOString(),
  };

  // INTEGRATION POINT: notify the admin team. If a webhook (Slack, Zapier,
  // the admin panel) is configured the request is posted there; otherwise it
  // is only logged, so nothing reaches a person until one is set.
  const webhook = process.env.DELETE_ACCOUNT_WEBHOOK_URL;
  if (webhook) {
    try {
      const response = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submission),
      });
      if (!response.ok) throw new Error(`Webhook responded ${response.status}`);
    } catch (error) {
      console.error("[delete-account] admin notification failed", error);
      return NextResponse.json(
        {
          ok: false,
          errors: {
            form: "We could not submit your request right now. Please try again, or email privacy@kno.vet.",
          },
        },
        { status: 502 },
      );
    }
  }
  console.info("[delete-account] request received", submission);

  return NextResponse.json({ ok: true, requestId });
}
