import dynamic from "next/dynamic";

import { FeatureGrid } from "@/components/sections/feature-grid";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { PainPoints } from "@/components/sections/pain-points";
import { Pricing } from "@/components/sections/pricing";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";
import { TrustBadges } from "@/components/sections/trust-badges";

/** Below the fold and interactive — split out of the initial page bundle. */
const Vets = dynamic(() =>
  import("@/components/sections/vets").then((mod) => mod.Vets),
);

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <PainPoints />
        <FeatureGrid />
        <Pricing />
        <Vets />
        <TrustBadges />
      </main>
      <SiteFooter />
    </>
  );
}
