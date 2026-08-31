import type { Metadata } from "next";

import { LegalDocumentBody } from "@/components/sections/legal-document";
import { PageHeader } from "@/components/ui/page-header";
import { TERMS } from "@/lib/data/legal/terms";

export const metadata: Metadata = {
  title: "Terms & Conditions - KNO",
  description:
    "The rules that govern KNO memberships, veterinary consultations, prescriptions and health records - including what remote veterinary advice can and cannot do.",
};

export default function TermsPage() {
  return (
    <main className="flex-1">
      <PageHeader
        eyebrow="Legal"
        title={TERMS.title}
        intro={TERMS.intro}
        meta={`Effective ${TERMS.effectiveDate} · Last updated ${TERMS.lastUpdated}`}
      />
      <LegalDocumentBody document={TERMS} />
    </main>
  );
}
