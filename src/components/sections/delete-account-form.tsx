"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Check, ChevronDown, MessageSquareText, PencilLine } from "lucide-react";

import { Icon } from "@/components/ui/icon";
import { PillButton } from "@/components/ui/pill-button";
import { cn } from "@/lib/utils";
import {
  DELETE_ACCOUNT_REASONS,
  DELETE_ACCOUNT_STEPS,
  type DeleteAccountStep,
} from "@/lib/data/delete-account";
import type { DeleteAccountStepView } from "@/lib/types";

type Errors = Partial<Record<"phone" | "email" | "code" | "confirm" | "form", string>>;

const RESEND_SECONDS = 30;

const FIELD_BASE =
  "w-full border border-kno-line bg-kno-surface px-5 text-base text-kno-primary outline-none transition-colors placeholder:text-kno-subtle focus-visible:border-kno-primary focus-visible:ring-2 focus-visible:ring-kno-primary/30";
const INPUT = cn(FIELD_BASE, "h-[52px] rounded-[26px]");

function Label({
  htmlFor,
  children,
  optional,
}: {
  htmlFor: string;
  children: string;
  optional?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-semibold text-kno-ink">
      {children}
      {optional ? (
        <span className="font-normal text-kno-subtle"> (optional)</span>
      ) : (
        <span className="text-kno-accent"> *</span>
      )}
    </label>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 text-sm text-kno-alert">
      {message}
    </p>
  );
}

function Stepper({
  current,
  steps,
}: {
  current: DeleteAccountStep;
  steps: readonly DeleteAccountStepView[];
}) {
  const currentIndex = steps.findIndex((s) => s.id === current);
  return (
    <ol className="flex items-center gap-2 sm:gap-3" aria-label="Progress">
      {steps.map((step, index) => {
        const done = index < currentIndex || current === "done";
        const active = index === currentIndex && current !== "done";
        return (
          <li
            key={step.id}
            className="flex flex-1 items-center gap-2 sm:gap-3"
            aria-current={active ? "step" : undefined}
          >
            <span
              className={cn(
                "flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold transition-colors",
                done && "bg-kno-primary text-kno-on-primary",
                active && "bg-kno-accent text-kno-surface",
                !done && !active && "bg-kno-surface-alt text-kno-muted",
              )}
            >
              {done ? <Check className="size-4" aria-hidden /> : index + 1}
            </span>
            <span
              className={cn(
                "hidden text-sm sm:block",
                active || done ? "font-semibold text-kno-ink" : "text-kno-muted",
              )}
            >
              {step.label}
            </span>
            {index < DELETE_ACCOUNT_STEPS.length - 1 ? (
              <span
                aria-hidden
                className={cn(
                  "h-px flex-1",
                  index < currentIndex ? "bg-kno-primary" : "bg-kno-line",
                )}
              />
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}

function maskPhone(phone: string): string {
  const digits = phone.replace(/\D/g, "").slice(-10);
  return `+91 ${digits.slice(0, 2)}••• ••${digits.slice(-3)}`;
}

export function DeleteAccountForm({
  steps = DELETE_ACCOUNT_STEPS,
  heading = "Enter your details",
  description = "Use the mobile number you signed in to KNO with. We'll send a one-time password to confirm it's you.",
  reasonPlaceholder = "Select a reason",
  reasons = DELETE_ACCOUNT_REASONS,
  confirmationText = "I understand that deleting my account is permanent. My pet profiles, health history and any active membership will be removed and cannot be restored.",
}: {
  steps?: readonly DeleteAccountStepView[];
  heading?: string;
  description?: string;
  reasonPlaceholder?: string;
  reasons?: readonly string[];
  confirmationText?: string;
}) {
  const id = useId();
  const [step, setStep] = useState<DeleteAccountStep>("details");
  const [busy, setBusy] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [code, setCode] = useState("");
  const [token, setToken] = useState("");
  const [devCode, setDevCode] = useState<string | null>(null);
  const [resendIn, setResendIn] = useState(0);
  const [requestId, setRequestId] = useState("");
  const cardRef = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);

  // Each step replaces the card's contents, so bring its top back into view.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const card = cardRef.current;
    if (card && card.getBoundingClientRect().top < 110) {
      card.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [step]);

  useEffect(() => {
    if (resendIn <= 0) return;
    const timer = setTimeout(() => setResendIn((s) => s - 1), 1000);
    return () => clearTimeout(timer);
  }, [resendIn]);

  async function post<T>(url: string, payload: unknown) {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const result = (await response.json()) as T & { ok: boolean; errors?: Errors };
    return { response, result };
  }

  async function sendOtp(): Promise<boolean> {
    setBusy(true);
    setErrors({});
    try {
      const { response, result } = await post<{ token?: string; devCode?: string }>(
        "/api/delete-account/otp",
        { phone },
      );
      if (!response.ok || !result.ok || !result.token) {
        setErrors(result.errors ?? { form: "Something went wrong. Please try again." });
        return false;
      }
      setToken(result.token);
      setDevCode(result.devCode ?? null);
      setCode("");
      setResendIn(RESEND_SECONDS);
      return true;
    } catch {
      setErrors({ form: "We could not reach the server. Please try again." });
      return false;
    } finally {
      setBusy(false);
    }
  }

  async function handleDetails(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next: Errors = {};
    const digits = phone.replace(/\D/g, "").replace(/^(91|0)(?=\d{10}$)/, "");
    if (!/^[6-9]\d{9}$/.test(digits))
      next.phone = "Enter a valid 10-digit Indian mobile number.";
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
      next.email = "That does not look like a valid email address.";
    if (!confirmed) next.confirm = "Please confirm you understand deletion is permanent.";
    if (Object.keys(next).length > 0) {
      setErrors(next);
      return;
    }
    if (await sendOtp()) setStep("verify");
  }

  async function handleVerify(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!/^\d{6}$/.test(code)) {
      setErrors({ code: "Enter the 6-digit code we sent you." });
      return;
    }
    setBusy(true);
    setErrors({});
    try {
      const { response, result } = await post<{ requestId?: string }>(
        "/api/delete-account",
        { phone, email, reason, code, token },
      );
      if (!response.ok || !result.ok || !result.requestId) {
        setErrors(result.errors ?? { form: "Something went wrong. Please try again." });
        return;
      }
      setRequestId(result.requestId);
      setStep("done");
    } catch {
      setErrors({ form: "We could not reach the server. Please try again." });
    } finally {
      setBusy(false);
    }
  }

  return (
    <div
      ref={cardRef}
      className="scroll-mt-[110px] rounded-panel border border-kno-line bg-kno-canvas p-6 sm:p-8 lg:p-10"
    >
      <Stepper current={step} steps={steps} />
      <div className="mt-8 border-t border-kno-line pt-8">
        {errors.form ? (
          <p
            role="alert"
            className="mb-6 rounded-tile bg-kno-alert/10 px-5 py-3 text-sm font-medium text-kno-alert"
          >
            {errors.form}
          </p>
        ) : null}

        {step === "details" ? (
          <form onSubmit={handleDetails} noValidate className="flex flex-col gap-6">
            <div>
              <h2 className="text-h3 font-bold text-kno-ink">{heading}</h2>
              <p className="mt-2 text-base leading-[24px] text-kno-muted">
                {description}
              </p>
            </div>

            <div>
              <Label htmlFor={`${id}-phone`}>Registered mobile number</Label>
              <div
                className={cn(
                  "mt-2 flex h-[52px] items-center overflow-hidden rounded-[26px] border border-kno-line bg-kno-surface transition-colors focus-within:border-kno-primary focus-within:ring-2 focus-within:ring-kno-primary/30",
                  errors.phone && "border-kno-alert",
                )}
              >
                <span className="flex h-full items-center border-r border-kno-line px-5 text-base font-semibold text-kno-ink">
                  +91
                </span>
                <input
                  id={`${id}-phone`}
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel-national"
                  maxLength={14}
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/[^\d\s+-]/g, ""))}
                  placeholder="98765 43210"
                  aria-invalid={errors.phone ? true : undefined}
                  aria-describedby={errors.phone ? `${id}-phone-error` : undefined}
                  className="h-full w-full min-w-0 bg-transparent px-4 text-base text-kno-primary outline-none placeholder:text-kno-subtle"
                />
              </div>
              <FieldError id={`${id}-phone-error`} message={errors.phone} />
            </div>

            <div>
              <Label htmlFor={`${id}-email`} optional>
                Email address
              </Label>
              <input
                id={`${id}-email`}
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Where we can send confirmation"
                aria-invalid={errors.email ? true : undefined}
                aria-describedby={errors.email ? `${id}-email-error` : `${id}-email-hint`}
                className={cn(INPUT, "mt-2", errors.email && "border-kno-alert")}
              />
              {errors.email ? (
                <FieldError id={`${id}-email-error`} message={errors.email} />
              ) : (
                <p id={`${id}-email-hint`} className="mt-1.5 text-sm text-kno-subtle">
                  We&apos;ll email you a confirmation once your account is deleted.
                </p>
              )}
            </div>

            <div>
              <Label htmlFor={`${id}-reason`} optional>
                Why are you leaving?
              </Label>
              <div className="relative mt-2">
                <select
                  id={`${id}-reason`}
                  name="reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className={cn(INPUT, "appearance-none pr-12")}
                >
                  <option value="">{reasonPlaceholder}</option>
                  {reasons.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-5 top-1/2 size-5 -translate-y-1/2 text-kno-primary"
                  aria-hidden
                />
              </div>
            </div>

            <div>
              <label
                htmlFor={`${id}-confirm`}
                className={cn(
                  "flex items-start gap-3 rounded-tile border bg-kno-cream p-4 text-sm leading-[20px] text-kno-body",
                  errors.confirm ? "border-kno-alert" : "border-transparent",
                )}
              >
                <input
                  id={`${id}-confirm`}
                  type="checkbox"
                  checked={confirmed}
                  onChange={(e) => setConfirmed(e.target.checked)}
                  aria-describedby={errors.confirm ? `${id}-confirm-error` : undefined}
                  className="mt-0.5 size-4 shrink-0 accent-kno-primary"
                />
                <span>{confirmationText}</span>
              </label>
              <FieldError id={`${id}-confirm-error`} message={errors.confirm} />
            </div>

            <PillButton
              type="submit"
              disabled={busy}
              className="gap-[10px] self-start px-[30px]"
            >
              {busy ? "Sending code…" : "Send OTP"}
              <Icon
                src="/icons/chevron-right-light.svg"
                alt=""
                width={9.18}
                height={16}
                className="-scale-x-100"
              />
            </PillButton>
          </form>
        ) : null}

        {step === "verify" ? (
          <form onSubmit={handleVerify} noValidate className="flex flex-col gap-6">
            <div>
              <span className="flex size-12 items-center justify-center rounded-icon bg-kno-primary-soft text-kno-primary">
                <MessageSquareText className="size-6" aria-hidden />
              </span>
              <h2 className="mt-5 text-h3 font-bold text-kno-ink">Verify your number</h2>
              <p className="mt-2 text-base leading-[24px] text-kno-muted">
                Enter the 6-digit code sent to{" "}
                <span className="font-semibold text-kno-ink">{maskPhone(phone)}</span>.
                The code is valid for 10 minutes.
              </p>
              <button
                type="button"
                onClick={() => {
                  setStep("details");
                  setErrors({});
                }}
                className="mt-2 inline-flex items-center gap-1.5 rounded-sm text-sm font-semibold text-kno-primary outline-none hover:text-kno-primary/80 focus-visible:ring-2 focus-visible:ring-kno-primary"
              >
                <PencilLine className="size-4" aria-hidden />
                Change number
              </button>
            </div>

            {devCode ? (
              <p className="rounded-tile border border-dashed border-kno-accent bg-kno-accent/10 px-4 py-3 text-sm text-kno-ink">
                <strong>Dev only:</strong> no SMS provider is connected. Your code is{" "}
                <code className="font-mono font-bold tracking-widest">{devCode}</code>
              </p>
            ) : null}

            <div>
              <Label htmlFor={`${id}-code`}>One-time password</Label>
              <input
                id={`${id}-code`}
                name="code"
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                pattern="\d{6}"
                maxLength={6}
                autoFocus
                value={code}
                onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                placeholder="••••••"
                aria-invalid={errors.code ? true : undefined}
                aria-describedby={errors.code ? `${id}-code-error` : undefined}
                className={cn(
                  INPUT,
                  "mt-2 max-w-[280px] text-center font-mono text-xl tracking-[0.6em] placeholder:tracking-[0.6em]",
                  errors.code && "border-kno-alert",
                )}
              />
              <FieldError id={`${id}-code-error`} message={errors.code} />
              <p className="mt-3 text-sm text-kno-muted">
                Didn&apos;t get it?{" "}
                {resendIn > 0 ? (
                  <span className="text-kno-subtle">Resend in {resendIn}s</span>
                ) : (
                  <button
                    type="button"
                    onClick={sendOtp}
                    disabled={busy}
                    className="rounded-sm font-semibold text-kno-primary outline-none hover:text-kno-primary/80 focus-visible:ring-2 focus-visible:ring-kno-primary disabled:opacity-50"
                  >
                    Resend code
                  </button>
                )}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <PillButton
                type="submit"
                disabled={busy || code.length !== 6}
                className="gap-[10px] px-[30px]"
              >
                {busy ? "Verifying…" : "Verify & request deletion"}
              </PillButton>
            </div>
          </form>
        ) : null}

        {step === "done" ? (
          <div role="status" className="flex flex-col items-center py-4 text-center">
            <span className="flex size-16 items-center justify-center rounded-full bg-kno-primary text-kno-on-primary">
              <Check className="size-8" aria-hidden />
            </span>
            <h2 className="mt-6 text-h3 font-bold text-kno-ink">Deletion request received</h2>
            <p className="mx-auto mt-3 max-w-[440px] text-base leading-[24px] text-kno-muted">
              Your number is verified and your request is with our privacy team.
              We&apos;ll acknowledge it within 72 hours and complete deletion within
              30 days{email ? ", confirming by email" : ""}.
            </p>
            <dl className="mt-8 grid w-full max-w-[440px] gap-px overflow-hidden rounded-tile border border-kno-line bg-kno-line text-left text-sm">
              {[
                ["Request ID", requestId],
                ["Mobile number", maskPhone(phone)],
                ...(email ? [["Email", email]] : []),
              ].map(([term, value]) => (
                <div key={term} className="flex justify-between gap-4 bg-kno-cream px-5 py-3">
                  <dt className="text-kno-muted">{term}</dt>
                  <dd className="truncate font-semibold text-kno-ink">{value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-sm text-kno-subtle">
              Keep your request ID handy if you need to contact us about it.
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
