import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/json-ld";
import { LegalDocumentBody } from "@/components/sections/legal-document";
import { PageHeader } from "@/components/ui/page-header";
import { fetchPrivacyPageData } from "@/lib/api";
import { mapLegalPage } from "@/lib/map-legal";
import { metadataFromSeo } from "@/lib/map-seo";

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchPrivacyPageData();
  const policy = mapLegalPage(data);
  return metadataFromSeo(data?.meta, {
    title: policy.title ? `${policy.title} - KNO` : "Privacy Policy - KNO",
    description:
      policy.intro ||
      "What KNO collects about you and your pet, why, who we share it with, how long we keep it, and the rights you hold under India's Digital Personal Data Protection Act, 2023.",
  });
}

export default async function PrivacyPage() {
  const data = await fetchPrivacyPageData();
  const policy = mapLegalPage(data);
  const meta =
    policy.effectiveDate || policy.lastUpdated
      ? `Effective ${policy.effectiveDate} · Last updated ${policy.lastUpdated}`
      : undefined;

  return (
    <main className="flex-1">
      <JsonLd data={data?.meta?.schema} />
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
