import type { Metadata } from "next";
import Link from "next/link";
import { CircleCheck, Clock, Mail, ShieldAlert, Trash2 } from "lucide-react";

import { DeleteAccountForm } from "@/components/sections/delete-account-form";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import {
  DELETE_ACCOUNT_DELETED,
  DELETE_ACCOUNT_HELP,
  DELETE_ACCOUNT_HERO,
  DELETE_ACCOUNT_RETAINED,
  DELETE_ACCOUNT_TIMELINE,
} from "@/lib/data/delete-account";

export const metadata: Metadata = {
  title: "Delete Your Account - KNO",
  description:
    "Request deletion of your KNO account and associated personal data. Verify your registered mobile number with a one-time password to submit the request.",
};

export default function DeleteAccountPage() {
  return (
    <main className="flex-1">
      <PageHeader
        eyebrow={DELETE_ACCOUNT_HERO.eyebrow}
        title={DELETE_ACCOUNT_HERO.title}
        intro={DELETE_ACCOUNT_HERO.intro}
        meta={DELETE_ACCOUNT_HERO.meta}
      />

      <section aria-label="Account deletion request" className="bg-kno-canvas py-10 lg:py-[56px]">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-[48px]">
            <div>
              <DeleteAccountForm />
            </div>

            <aside className="flex flex-col gap-6">
              {/* How it works */}
              <div className="rounded-panel bg-kno-cream p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <Clock className="size-6 text-kno-primary" aria-hidden />
                  <h2 className="text-lead font-bold text-kno-ink">What happens next</h2>
                </div>
                <ol className="mt-6 flex flex-col">
                  {DELETE_ACCOUNT_TIMELINE.map((item, index) => (
                    <li key={item.title} className="relative flex gap-4 pb-6 last:pb-0">
                      {index < DELETE_ACCOUNT_TIMELINE.length - 1 ? (
                        <span
                          aria-hidden
                          className="absolute left-[13px] top-8 bottom-1 w-px bg-kno-line"
                        />
                      ) : null}
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-kno-primary text-xs font-semibold text-kno-on-primary">
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="text-base font-semibold text-kno-ink">{item.title}</h3>
                        <p className="mt-1 text-sm leading-[20px] text-kno-muted">{item.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* What is deleted */}
              <div className="rounded-panel border border-kno-line p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <Trash2 className="size-6 text-kno-alert" aria-hidden />
                  <h2 className="text-lead font-bold text-kno-ink">
                    {DELETE_ACCOUNT_DELETED.title}
                  </h2>
                </div>
                <ul className="mt-5 flex flex-col gap-3">
                  {DELETE_ACCOUNT_DELETED.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-[20px] text-kno-body">
                      <CircleCheck className="mt-px size-[18px] shrink-0 text-kno-primary" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* What is retained */}
              <div className="rounded-panel border border-kno-line p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <ShieldAlert className="size-6 text-kno-accent" aria-hidden />
                  <h2 className="text-lead font-bold text-kno-ink">
                    {DELETE_ACCOUNT_RETAINED.title}
                  </h2>
                </div>
                <p className="mt-3 text-sm leading-[20px] text-kno-muted">
                  {DELETE_ACCOUNT_RETAINED.body}
                </p>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {DELETE_ACCOUNT_RETAINED.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-[20px] text-kno-body">
                      <span aria-hidden className="mt-[7px] size-1.5 shrink-0 rounded-full bg-kno-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/privacy#retention"
                  className="mt-4 inline-block rounded-sm text-sm font-semibold text-kno-primary outline-none hover:text-kno-primary/80 focus-visible:ring-2 focus-visible:ring-kno-primary"
                >
                  Read our Privacy Policy
                </Link>
              </div>

              {/* Help */}
              <div className="flex items-start gap-4 rounded-panel bg-kno-primary p-6 sm:p-8">
                <Mail className="mt-0.5 size-6 shrink-0 text-kno-accent" aria-hidden />
                <div>
                  <h2 className="text-lead font-bold text-kno-on-primary">
                    {DELETE_ACCOUNT_HELP.title}
                  </h2>
                  <p className="mt-2 text-sm leading-[20px] text-kno-on-primary-muted">
                    {DELETE_ACCOUNT_HELP.body}
                  </p>
                  <a
                    href={`mailto:${DELETE_ACCOUNT_HELP.email}`}
                    className="mt-4 inline-block rounded-sm text-base font-semibold text-kno-on-primary underline-offset-4 outline-none hover:underline focus-visible:ring-2 focus-visible:ring-kno-accent"
                  >
                    {DELETE_ACCOUNT_HELP.email}
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </main>
  );
}
