"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

import { PillButton } from "@/components/ui/pill-button";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import { CONTACT_SUBJECTS } from "@/lib/data/contact";

type Errors = Partial<
  Record<"name" | "email" | "subject" | "message" | "form", string>
>;
type Status = "idle" | "submitting" | "sent";

const FIELD_BASE =
  "w-full border border-kno-line bg-kno-surface px-5 text-base text-kno-primary outline-none transition-colors placeholder:text-kno-subtle focus-visible:border-kno-primary focus-visible:ring-2 focus-visible:ring-kno-primary/30";
const INPUT = cn(FIELD_BASE, "h-[52px] rounded-[26px]");

function Label({ htmlFor, children }: { htmlFor: string; children: string }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-semibold text-kno-ink"
    >
      {children}
      <span className="text-kno-accent"> *</span>
    </label>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 text-sm text-kno-primary">
      {message}
    </p>
  );
}

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
      const result = (await response.json()) as { ok: boolean; errors?: Errors };

      if (!response.ok || !result.ok) {
        setErrors(
          result.errors ?? { form: "Something went wrong. Please try again." },
        );
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
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      {errors.form ? (
        <p role="alert" className="text-sm font-medium text-kno-primary">
          {errors.form}
        </p>
      ) : null}

      <div className="grid gap-x-6 gap-y-6 sm:grid-cols-2">
        {/* Left column: name + message */}
        <div>
          <Label htmlFor={`${id}-name`}>Your name</Label>
          <input
            id={`${id}-name`}
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Enter your name"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? `${id}-name-error` : undefined}
            className={cn(INPUT, "mt-2", errors.name && "border-kno-accent")}
          />
          <FieldError id={`${id}-name-error`} message={errors.name} />
        </div>

        {/* Right column: subject */}
        <div>
          <Label htmlFor={`${id}-subject`}>What is this about?</Label>
          <div className="relative mt-2">
            <select
              id={`${id}-subject`}
              name="subject"
              required
              defaultValue=""
              aria-invalid={errors.subject ? true : undefined}
              aria-describedby={
                errors.subject ? `${id}-subject-error` : undefined
              }
              className={cn(
                INPUT,
                "appearance-none pr-12",
                errors.subject && "border-kno-accent",
              )}
            >
              <option value="" disabled>
                Select Topic
              </option>
              {CONTACT_SUBJECTS.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-5 top-1/2 size-5 -translate-y-1/2 text-kno-primary"
              aria-hidden
            />
          </div>
          <FieldError id={`${id}-subject-error`} message={errors.subject} />
        </div>

        {/* Left column: message */}
        <div>
          <Label htmlFor={`${id}-message`}>Your message</Label>
          <textarea
            id={`${id}-message`}
            name="message"
            rows={6}
            required
            placeholder="Enter your message"
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? `${id}-message-error` : undefined}
            className={cn(
              FIELD_BASE,
              "mt-2 resize-y rounded-tile py-3",
              errors.message && "border-kno-accent",
            )}
          />
          <FieldError id={`${id}-message-error`} message={errors.message} />
          <p className="mt-2 text-sm text-kno-subtle">
            Please do not include your pet&apos;s full medical history here — a
            consultation with a vet is the right place for that.
          </p>
        </div>

        {/* Right column: email */}
        <div>
          <Label htmlFor={`${id}-email`}>Email address</Label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="Enter your email address"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? `${id}-email-error` : undefined}
            className={cn(INPUT, "mt-2", errors.email && "border-kno-accent")}
          />
          <FieldError id={`${id}-email-error`} message={errors.email} />
        </div>
      </div>

      {/* Honeypot: hidden from people, tempting to bots. */}
      <div aria-hidden className="hidden">
        <label htmlFor={`${id}-company`}>Company</label>
        <input
          id={`${id}-company`}
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <PillButton
        type="submit"
        disabled={status === "submitting"}
        className="gap-[10px] self-start px-[30px]"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
        <Icon
          src="/icons/chevron-right-light.svg"
          alt=""
          width={9.18}
          height={16}
          className="-scale-x-100"
        />
      </PillButton>
    </form>
  );
}
