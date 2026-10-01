import type { Metadata } from "next";

import { LegalDocumentBody } from "@/components/sections/legal-document";
import { PageHeader } from "@/components/ui/page-header";
import { fetchTermsPageData } from "@/lib/api";
import { mapLegalPage } from "@/lib/map-legal";

export async function generateMetadata(): Promise<Metadata> {
  const terms = mapLegalPage(await fetchTermsPageData());
  return {
    title: terms.title ? `${terms.title} - KNO` : "Terms & Conditions - KNO",
    description:
      terms.intro ||
      "The rules that govern KNO memberships, veterinary consultations, prescriptions and health records - including what remote veterinary advice can and cannot do.",
  };
}

export default async function TermsPage() {
  const terms = mapLegalPage(await fetchTermsPageData());
  const meta =
    terms.effectiveDate || terms.lastUpdated
      ? `Effective ${terms.effectiveDate} · Last updated ${terms.lastUpdated}`
      : undefined;

  return (
    <main className="flex-1">
      <PageHeader
        eyebrow={terms.eyebrow}
        title={terms.title}
        intro={terms.intro}
        meta={meta}
      />
      <LegalDocumentBody document={terms} />
    </main>
  );
}
