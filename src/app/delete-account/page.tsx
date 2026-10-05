import type { Metadata } from "next";
import Link from "next/link";
import { CircleCheck, Clock, Mail, ShieldAlert, Trash2 } from "lucide-react";

import { JsonLd } from "@/components/seo/json-ld";
import { DeleteAccountForm } from "@/components/sections/delete-account-form";
import { TrustBadges } from "@/components/sections/trust-badges";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { fetchDeleteAccountPageData } from "@/lib/api";
import { mapDeleteAccountPage } from "@/lib/map-delete-account";
import { metadataFromSeo } from "@/lib/map-seo";

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchDeleteAccountPageData();
  const page = mapDeleteAccountPage(data);
  return metadataFromSeo(data?.deleteAccount?.meta, {
    title: page.hero.heading
      ? `${page.hero.heading} - KNO`
      : "Delete Your Account - KNO",
    description:
      page.hero.description ||
      "Request deletion of your KNO account and associated personal data. Verify your registered mobile number with a one-time password to submit the request.",
  });
}

export default async function DeleteAccountPage() {
  const data = await fetchDeleteAccountPageData();
  const page = mapDeleteAccountPage(data);

  return (
    <main className="flex-1">
      <JsonLd data={data?.deleteAccount?.meta?.schema} />
      <PageHeader
        eyebrow={page.hero.eyebrow}
        title={page.hero.heading}
        intro={page.hero.description}
        meta={page.hero.note || undefined}
      />

      <section aria-label="Account deletion request" className="bg-kno-canvas py-10 lg:py-[56px]">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-[48px]">
            <div>
              <DeleteAccountForm
                steps={page.hero.steps}
                heading={page.form.heading}
                description={page.form.description}
                reasonPlaceholder={page.form.reasonPlaceholder}
                reasons={page.form.reasons}
                confirmationText={page.form.confirmationText}
              />
            </div>

            <aside className="flex flex-col gap-6">
              <div className="rounded-panel bg-kno-cream p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <Clock className="size-6 text-kno-primary" aria-hidden />
                  <h2 className="text-lead font-bold text-kno-ink">
                    {page.process.heading}
                  </h2>
                </div>
                <ol className="mt-6 flex flex-col">
                  {page.process.items.map((item, index) => (
                    <li key={item.id} className="relative flex gap-4 pb-6 last:pb-0">
                      {index < page.process.items.length - 1 ? (
                        <span
                          aria-hidden
                          className="absolute bottom-1 left-[13px] top-8 w-px bg-kno-line"
                        />
                      ) : null}
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-kno-primary text-xs font-semibold text-kno-on-primary">
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="text-base font-semibold text-kno-ink">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm leading-[20px] text-kno-muted">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-panel border border-kno-line p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <Trash2 className="size-6 text-kno-alert" aria-hidden />
                  <h2 className="text-lead font-bold text-kno-ink">
                    {page.deleted.heading}
                  </h2>
                </div>
                <ul className="mt-5 flex flex-col gap-3">
                  {page.deleted.items.map((item) => (
                    <li
                      key={item.id}
                      className="flex gap-3 text-sm leading-[20px] text-kno-body"
                    >
                      <CircleCheck
                        className="mt-px size-[18px] shrink-0 text-kno-primary"
                        aria-hidden
                      />
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-panel border border-kno-line p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <ShieldAlert className="size-6 text-kno-accent" aria-hidden />
                  <h2 className="text-lead font-bold text-kno-ink">
                    {page.retained.heading}
                  </h2>
                </div>
                <p className="mt-3 text-sm leading-[20px] text-kno-muted">
                  {page.retained.description}
                </p>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {page.retained.items.map((item) => (
                    <li
                      key={item.id}
                      className="flex gap-3 text-sm leading-[20px] text-kno-body"
                    >
                      <span
                        aria-hidden
                        className="mt-[7px] size-1.5 shrink-0 rounded-full bg-kno-accent"
                      />
                      {item.text}
                    </li>
                  ))}
                </ul>
                {page.retained.button.label && page.retained.button.href ? (
                  <Link
                    href={page.retained.button.href}
                    className="mt-4 inline-block rounded-sm text-sm font-semibold text-kno-primary outline-none hover:text-kno-primary/80 focus-visible:ring-2 focus-visible:ring-kno-primary"
                  >
                    {page.retained.button.label}
                  </Link>
                ) : null}
              </div>

              <div className="flex items-start gap-4 rounded-panel bg-kno-primary p-6 sm:p-8">
                <Mail className="mt-0.5 size-6 shrink-0 text-kno-accent" aria-hidden />
                <div>
                  <h2 className="text-lead font-bold text-kno-on-primary">
                    {page.help.heading}
                  </h2>
                  <p className="mt-2 text-sm leading-[20px] text-kno-on-primary-muted">
                    {page.help.description}
                  </p>
                  {page.help.email ? (
                    <a
                      href={`mailto:${page.help.email}`}
                      className="mt-4 inline-block rounded-sm text-base font-semibold text-kno-on-primary underline-offset-4 outline-none hover:underline focus-visible:ring-2 focus-visible:ring-kno-accent"
                    >
                      {page.help.email}
                    </a>
                  ) : null}
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <TrustBadges badges={page.trustBadges} />
    </main>
  );
}
