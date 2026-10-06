import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/seo/json-ld";
import { LegalDocumentBody } from "@/components/sections/legal-document";
import { PageHeader } from "@/components/ui/page-header";
import { fetchLegalPageBySlug, fetchLegalPageSlugs } from "@/lib/api";
import { mapLegalPage } from "@/lib/map-legal";
import { metadataFromSeo } from "@/lib/map-seo";

type LegalPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await fetchLegalPageSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: LegalPageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = await fetchLegalPageBySlug(slug);
  if (!data) return { title: "Not found - KNO" };

  const document = mapLegalPage(data);
  return metadataFromSeo(data.meta, {
    title: document.title ? `${document.title} - KNO` : "Legal - KNO",
    description: document.intro || "KNO legal information.",
  });
}

export default async function LegalPage({ params }: LegalPageProps) {
  const { slug } = await params;
  const data = await fetchLegalPageBySlug(slug);
  if (!data) notFound();

  const document = mapLegalPage(data);
  const meta =
    document.effectiveDate || document.lastUpdated
      ? `Effective ${document.effectiveDate} · Last updated ${document.lastUpdated}`
      : undefined;

  return (
    <main className="flex-1">
      <JsonLd data={data.meta?.schema} />
      <PageHeader
        eyebrow={document.eyebrow}
        title={document.title}
        intro={document.intro}
        meta={meta}
      />
      <LegalDocumentBody document={document} />
    </main>
  );
}
