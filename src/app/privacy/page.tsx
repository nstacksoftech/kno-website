import type { Metadata } from "next";

import { LegalDocumentBody } from "@/components/sections/legal-document";
import { PageHeader } from "@/components/ui/page-header";
import { PRIVACY_POLICY } from "@/lib/data/legal/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy - KNO",
  description:
    "What KNO collects about you and your pet, why, who we share it with, how long we keep it, and the rights you hold under India's Digital Personal Data Protection Act, 2023.",
};

export default function PrivacyPage() {
  return (
    <main className="flex-1">
      <PageHeader
        eyebrow="Legal"
        title={PRIVACY_POLICY.title}
        intro={PRIVACY_POLICY.intro}
        meta={`Effective ${PRIVACY_POLICY.effectiveDate} · Last updated ${PRIVACY_POLICY.lastUpdated}`}
      />
      <LegalDocumentBody document={PRIVACY_POLICY} />
    </main>
  );
}
