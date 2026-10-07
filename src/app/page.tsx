import type { Metadata } from "next";
import dynamic from "next/dynamic";

import { JsonLd } from "@/components/seo/json-ld";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { PainPoints } from "@/components/sections/pain-points";
import { Pricing } from "@/components/sections/pricing";
import { TrustBadges } from "@/components/sections/trust-badges";
import { fetchApprovedVets, fetchHomePageData } from "@/lib/api";
import { mapHomePage } from "@/lib/map-home";
import { metadataFromSeo } from "@/lib/map-seo";

/** Below the fold and interactive - split out of the initial page bundle. */
const Vets = dynamic(() =>
  import("@/components/sections/vets").then((mod) => mod.Vets),
);

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchHomePageData();
  return metadataFromSeo(data?.home?.meta, {
    title: "KNO - Veterinary Care, Simplified",
    description:
      "Everything for your pet’s health and wellbeing, connected in one place. Licensed veterinarians, 24/7 availability and secure health records.",
  });
}

export default async function HomePage() {
  const [data, approvedVets] = await Promise.all([
    fetchHomePageData(),
    fetchApprovedVets({ page: 1, limit: 20 }),
  ]);
  const home = mapHomePage(data);

  return (
    <main className="flex-1">
      <JsonLd data={data?.home?.meta?.schema} />
      <Hero hero={home.hero} />
      <HowItWorks heading={home.howItWorks.heading} steps={home.howItWorks.steps} />
      <PainPoints
        heading={home.painPoints.heading}
        points={home.painPoints.points}
        resolution={home.painPoints.resolution}
      />
      <FeatureGrid
        heading={home.features.heading}
        image={home.features.image}
        items={home.features.items}
      />
      <Pricing
        heading={home.pricing.heading}
        plans={home.pricing.plans}
        image={home.pricing.image}
        caption={home.pricing.caption}
      />
      <Vets
        heading={home.veterinarians.heading}
        vets={approvedVets}
        viewAllLabel={home.veterinarians.viewAllLabel}
        viewAllUrl={home.veterinarians.viewAllUrl}
      />
      <TrustBadges badges={home.trustBadges} />
    </main>
  );
}
