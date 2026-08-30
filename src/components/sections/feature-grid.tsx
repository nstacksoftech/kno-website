import Image from "next/image";

import { Container } from "@/components/ui/container";
import { IconChip } from "@/components/ui/icon-chip";
import { FEATURES } from "@/lib/data/features";

export function FeatureGrid() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="scroll-mt-24 bg-kno-canvas py-12 lg:pb-[100px] lg:pt-0"
    >
      <Container>
        <div className="overflow-hidden rounded-panel bg-kno-cream px-6 py-12 lg:px-[34px] lg:pb-[3px] lg:pt-[47px]">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-[48px]">
            {/* Product shot: the source asset is a wider flyer, cropped to the
                349 x 445 frame at the offsets Figma reports. */}
            <div className="relative mx-auto h-[360px] w-[280px] shrink-0 overflow-hidden lg:mx-0 lg:h-[445px] lg:w-[349px]">
              <Image
                src="/images/app-promo-flyer.png"
                alt="The KNO mobile app showing a pet health overview"
                width={4096}
                height={2683}
                sizes="(min-width: 1024px) 1273px, 1021px"
                className="absolute left-[-128.1%] top-[-18.2%] h-[188.37%] w-[364.56%] max-w-none object-cover"
              />
            </div>

            <div className="flex-1">
              <h2
                id="features-heading"
                className="text-balance text-[1.75rem] font-bold leading-tight text-kno-primary sm:text-[2.25rem] lg:text-section lg:leading-[56px]"
              >
                Everything in One Place
              </h2>

              <ul className="mt-8 grid gap-x-[49px] gap-y-10 sm:grid-cols-2 lg:mt-[55px] lg:gap-y-[40px]">
                {FEATURES.map((feature) => (
                  <li key={feature.title} className="flex items-start gap-[18px]">
                    <IconChip
                      src={feature.icon}
                      alt={feature.iconAlt}
                      size={60}
                      iconSize={33}
                      tone="accent"
                      shape="squircle"
                    />
                    <div className="flex flex-col gap-2">
                      <h3 className="text-h4 font-bold text-kno-primary">
                        {feature.title}
                      </h3>
                      <p className="text-base text-kno-muted">
                        {feature.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
