import type { Metadata } from "next";

import { LegalDocumentBody } from "@/components/sections/legal-document";
import { PageHeader } from "@/components/ui/page-header";
import { fetchPrivacyPageData } from "@/lib/api";
import { mapLegalPage } from "@/lib/map-legal";

export async function generateMetadata(): Promise<Metadata> {
  const policy = mapLegalPage(await fetchPrivacyPageData());
  return {
    title: policy.title ? `${policy.title} - KNO` : "Privacy Policy - KNO",
    description:
      policy.intro ||
      "What KNO collects about you and your pet, why, who we share it with, how long we keep it, and the rights you hold under India's Digital Personal Data Protection Act, 2023.",
  };
}

export default async function PrivacyPage() {
  const policy = mapLegalPage(await fetchPrivacyPageData());
  const meta =
    policy.effectiveDate || policy.lastUpdated
      ? `Effective ${policy.effectiveDate} · Last updated ${policy.lastUpdated}`
      : undefined;

  return (
    <main className="flex-1">
      <PageHeader
        eyebrow={policy.eyebrow}
        title={policy.title}
        intro={policy.intro}
        meta={meta}
      />
      <LegalDocumentBody document={policy} />
    </main>
  );
}
