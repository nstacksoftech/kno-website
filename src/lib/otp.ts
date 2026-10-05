import { createHmac, randomBytes, randomInt, timingSafeEqual } from "node:crypto";

/**
 * Stateless OTP: the code itself is never stored. The client holds a token that
 * carries the phone number, an expiry and an HMAC over phone + code + expiry,
 * so only someone who received the SMS can produce a matching code, and the
 * phone number cannot be swapped after the fact.
 */

const OTP_TTL_MS = 10 * 60 * 1000;
const MAX_ATTEMPTS = 5;

/** Per-process fallback so local dev works without configuration. */
const DEV_SECRET = randomBytes(32).toString("hex");

function secret(): string {
  const value = process.env.OTP_SECRET;
  if (value) return value;
  if (process.env.NODE_ENV === "production") {
    throw new Error("OTP_SECRET must be set in production.");
  }
  return DEV_SECRET;
}

function sign(phone: string, code: string, expires: number): string {
  return createHmac("sha256", secret())
    .update(`${phone}:${code}:${expires}`)
    .digest("base64url");
}

interface TokenPayload {
  phone: string;
  expires: number;
  mac: string;
}

export function issueOtp(phone: string): { code: string; token: string } {
  const code = randomInt(0, 1_000_000).toString().padStart(6, "0");
  const expires = Date.now() + OTP_TTL_MS;
  const payload: TokenPayload = { phone, expires, mac: sign(phone, code, expires) };
  const token = Buffer.from(JSON.stringify(payload)).toString("base64url");
  return { code, token };
}

/**
 * Best-effort attempt counter. Survives only as long as the server instance,
 * which is enough to stop casual guessing; a shared store (e.g. Redis) should
 * replace it if the site runs on many instances.
 */
const attempts = new Map<string, number>();
const consumed = new Set<string>();

export type OtpCheck =
  | { ok: true; phone: string }
  | { ok: false; reason: "invalid" | "expired" | "used" | "locked" | "mismatch" };

export function verifyOtp(token: string, phone: string, code: string): OtpCheck {
  let payload: TokenPayload;
  try {
    payload = JSON.parse(Buffer.from(token, "base64url").toString("utf8"));
  } catch {
    return { ok: false, reason: "invalid" };
  }
  if (
    typeof payload?.phone !== "string" ||
    typeof payload?.expires !== "number" ||
    typeof payload?.mac !== "string" ||
    payload.phone !== phone
  ) {
    return { ok: false, reason: "invalid" };
  }
  if (Date.now() > payload.expires) {
    attempts.delete(payload.mac);
    consumed.delete(payload.mac);
    return { ok: false, reason: "expired" };
  }

  if (consumed.has(payload.mac)) return { ok: false, reason: "used" };

  const used = attempts.get(payload.mac) ?? 0;
  if (used >= MAX_ATTEMPTS) return { ok: false, reason: "locked" };

  const expected = Buffer.from(sign(phone, code, payload.expires));
  const given = Buffer.from(payload.mac);
  if (expected.length !== given.length || !timingSafeEqual(expected, given)) {
    attempts.set(payload.mac, used + 1);
    return { ok: false, reason: "mismatch" };
  }

  // One-time: a verified token cannot be replayed on this instance.
  attempts.delete(payload.mac);
  consumed.add(payload.mac);
  return { ok: true, phone };
}

/** Accepts 10-digit Indian mobiles, with or without +91 / 0 prefix. */
export function normalizeIndianMobile(raw: string): string | null {
  const digits = raw.replace(/\D/g, "").replace(/^(91|0)(?=\d{10}$)/, "");
  return /^[6-9]\d{9}$/.test(digits) ? digits : null;
}
