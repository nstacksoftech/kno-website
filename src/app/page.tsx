import dynamic from "next/dynamic";

import { FeatureGrid } from "@/components/sections/feature-grid";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { PainPoints } from "@/components/sections/pain-points";
import { Pricing } from "@/components/sections/pricing";
import { TrustBadges } from "@/components/sections/trust-badges";
import { fetchHomePageData } from "@/lib/api";
import { mapHomePage } from "@/lib/map-home";

/** Below the fold and interactive - split out of the initial page bundle. */
const Vets = dynamic(() =>
  import("@/components/sections/vets").then((mod) => mod.Vets),
);

export default async function HomePage() {
  const home = mapHomePage(await fetchHomePageData());

  return (
    <main className="flex-1">
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
        vets={home.veterinarians.vets}
        viewAllLabel={home.veterinarians.viewAllLabel}
        viewAllUrl={home.veterinarians.viewAllUrl}
      />
      <TrustBadges badges={home.trustBadges} />
    </main>
  );
}
