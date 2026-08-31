"use client";

import { useId, useState } from "react";

import { PillButton } from "@/components/ui/pill-button";
import { cn } from "@/lib/utils";
import { CONTACT_SUBJECTS } from "@/lib/data/contact";

type Errors = Partial<Record<"name" | "email" | "subject" | "message" | "form", string>>;
type Status = "idle" | "submitting" | "sent";

const FIELD_BASE =
  "w-full rounded-tile border border-kno-line bg-kno-surface px-4 py-3 text-base text-kno-primary outline-none transition-colors placeholder:text-kno-subtle focus-visible:border-kno-primary focus-visible:ring-2 focus-visible:ring-kno-primary/30";

export function ContactForm() {
  const id = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    setStatus("submitting");
    setErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as {
        ok: boolean;
        errors?: Errors;
      };

      if (!response.ok || !result.ok) {
        setErrors(result.errors ?? { form: "Something went wrong. Please try again." });
        setStatus("idle");
        return;
      }

      form.reset();
      setStatus("sent");
    } catch {
      setErrors({
        form: "We could not reach the server. Please email us directly instead.",
      });
      setStatus("idle");
    }
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        className="rounded-panel border border-kno-line bg-kno-cream px-6 py-10 text-center"
      >
        <p className="text-h3 font-bold text-kno-primary">Message received</p>
        <p className="mx-auto mt-3 max-w-[420px] text-base leading-[24px] text-kno-muted">
          Thank you. Our Mumbai team reads every message and will reply to the
          address you gave us, usually within one working day.
        </p>
        <PillButton
          variant="outline"
          className="mt-8"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </PillButton>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {errors.form ? (
        <p role="alert" className="text-sm font-medium text-kno-primary">
          {errors.form}
        </p>
      ) : null}

      <div>
        <label
          htmlFor={`${id}-name`}
          className="block text-sm font-semibold text-kno-primary"
        >
          Your name
        </label>
        <input
          id={`${id}-name`}
          name="name"
          type="text"
          autoComplete="name"
          required
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? `${id}-name-error` : undefined}
          className={cn(FIELD_BASE, "mt-2", errors.name && "border-kno-accent")}
        />
        {errors.name ? (
          <p id={`${id}-name-error`} className="mt-2 text-sm text-kno-primary">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor={`${id}-email`}
          className="block text-sm font-semibold text-kno-primary"
        >
          Email address
        </label>
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? `${id}-email-error` : undefined}
          className={cn(FIELD_BASE, "mt-2", errors.email && "border-kno-accent")}
        />
        {errors.email ? (
          <p id={`${id}-email-error`} className="mt-2 text-sm text-kno-primary">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor={`${id}-subject`}
          className="block text-sm font-semibold text-kno-primary"
        >
          What is this about?
        </label>
        <select
          id={`${id}-subject`}
          name="subject"
          required
          defaultValue={CONTACT_SUBJECTS[0]}
          aria-invalid={errors.subject ? true : undefined}
          aria-describedby={errors.subject ? `${id}-subject-error` : undefined}
          className={cn(FIELD_BASE, "mt-2", errors.subject && "border-kno-accent")}
        >
          {CONTACT_SUBJECTS.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
        {errors.subject ? (
          <p id={`${id}-subject-error`} className="mt-2 text-sm text-kno-primary">
            {errors.subject}
          </p>
        ) : null}
      </div>

      <div>
        <label
          htmlFor={`${id}-message`}
          className="block text-sm font-semibold text-kno-primary"
        >
          Your message
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          rows={6}
          required
          placeholder="Please do not include your pet's full medical history here - a consultation is the right place for that."
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? `${id}-message-error` : undefined}
          className={cn(
            FIELD_BASE,
            "mt-2 resize-y",
            errors.message && "border-kno-accent",
          )}
        />
        {errors.message ? (
          <p id={`${id}-message-error`} className="mt-2 text-sm text-kno-primary">
            {errors.message}
          </p>
        ) : null}
      </div>

      {/* Honeypot: hidden from people, tempting to bots. */}
      <div aria-hidden className="hidden">
        <label htmlFor={`${id}-company`}>Company</label>
        <input id={`${id}-company`} name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <PillButton type="submit" disabled={status === "submitting"} className="self-start">
        {status === "submitting" ? "Sending…" : "Send message"}
      </PillButton>
    </form>
  );
}
