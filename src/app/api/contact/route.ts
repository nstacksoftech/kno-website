import { NextResponse } from "next/server";

import { CONTACT_SUBJECTS } from "@/lib/data/contact";

const MAX = { name: 120, email: 254, message: 4000 } as const;

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
  /** Honeypot - real people leave this empty. */
  company?: string;
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

function validate(body: unknown): {
  data?: ContactPayload;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};
  const raw = (body ?? {}) as Record<string, unknown>;

  const name = typeof raw.name === "string" ? raw.name.trim() : "";
  const email = typeof raw.email === "string" ? raw.email.trim() : "";
  const subject = typeof raw.subject === "string" ? raw.subject.trim() : "";
  const message = typeof raw.message === "string" ? raw.message.trim() : "";
  const company = typeof raw.company === "string" ? raw.company.trim() : "";

  if (!name) errors.name = "Tell us your name.";
  else if (name.length > MAX.name) errors.name = "That name is too long.";

  if (!email) errors.email = "We need an email address to reply to.";
  else if (!isEmail(email) || email.length > MAX.email)
    errors.email = "That does not look like a valid email address.";

  if (!CONTACT_SUBJECTS.includes(subject as (typeof CONTACT_SUBJECTS)[number]))
    errors.subject = "Choose what your message is about.";

  if (message.length < 20)
    errors.message = "Add a little more detail - at least 20 characters.";
  else if (message.length > MAX.message)
    errors.message = "That message is too long. Please keep it under 4000 characters.";

  if (Object.keys(errors).length > 0) return { errors };
  return { data: { name, email, subject, message, company }, errors: {} };
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

  const { data, errors } = validate(body);
  if (!data) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  // Silently accept honeypot submissions so bots do not learn they were caught.
  if (data.company) {
    return NextResponse.json({ ok: true });
  }

  // INTEGRATION POINT: forward `data` to the mailbox or CRM that owns replies.
  // Nothing is persisted here, so no message is delivered until this is wired up.
  console.info("[contact] submission received", {
    subject: data.subject,
    email: data.email,
  });

  return NextResponse.json({ ok: true });
}
