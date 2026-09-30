import type { Metadata } from "next";
import Image from "next/image";

import { Founders } from "@/components/sections/founders";
import { TrustBadges } from "@/components/sections/trust-badges";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { IconChip } from "@/components/ui/icon-chip";
import { PillLink } from "@/components/ui/pill-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { fetchAboutPageData } from "@/lib/api";
import { mapAboutPage } from "@/lib/map-about";
import type { AboutCta, CmsImage } from "@/lib/types";

export const metadata: Metadata = {
  title: "About KNO - We built KNO because we're pet parents too",
  description:
    "KNO brings your pet's healthcare together in one place: licensed veterinarians, health records, prescriptions, preventive care and reminders - one pet, one health journey.",
};

function CtaIcon({ icon, size = 20 }: { icon: CmsImage | null; size?: number }) {
  if (!icon) return null;
  return <Icon src={icon.src} alt={icon.alt} width={size} height={size} />;
}

function AboutCtaLink({
  cta,
  variant = "solid",
}: {
  cta: AboutCta;
  variant?: "solid" | "outline";
}) {
  return (
    <PillLink href={cta.href} variant={variant} className="gap-[10px] px-[30px]">
      <CtaIcon icon={cta.icon} size={variant === "outline" ? 20 : 18.6} />
      {cta.label}
      <Icon
        src={variant === "outline" ? "/icons/chevron-right.svg" : "/icons/chevron-right-light.svg"}
        alt=""
        width={9.18}
        height={16}
        className="-scale-x-100"
      />
    </PillLink>
  );
}

export default async function AboutPage() {
  const about = mapAboutPage(await fetchAboutPageData());

  return (
    <main className="flex-1">
      <section
        aria-labelledby="about-hero-heading"
        className="relative isolate overflow-hidden bg-kno-cream"
      >
        <div className="absolute inset-y-0 right-0 -z-10 hidden w-[48%] lg:block">
          {about.hero.image ? (
            <Image
              src={about.hero.image.src}
              alt={about.hero.image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 49vw, 0px"
              className="rounded-l-panel object-cover object-[68%_center]"
            />
          ) : null}
          <div
            aria-hidden
            className="absolute inset-y-0 left-0 w-[18%] bg-gradient-to-r from-kno-cream to-transparent"
          />
        </div>

        <Container className="relative pb-10 pt-[104px] lg:min-h-[620px] lg:pb-[40px] lg:pt-[150px]">
          <div className="max-w-[560px]">
            <h1
              id="about-hero-heading"
              className="text-[2rem] font-bold leading-tight text-kno-ink sm:text-[2.5rem] lg:text-display lg:leading-[58px]"
            >
              {about.hero.heading}{" "}
              <span className="text-kno-primary">{about.hero.highlight}</span>
            </h1>

            <p className="mt-6 text-base font-semibold text-kno-ink">
              {about.hero.supportingLine}
            </p>
            <p className="mt-2 max-w-[470px] text-base text-kno-muted">
              {about.hero.description}
            </p>

            <p className="mt-8 inline-flex h-[66px] items-center gap-[10px] rounded-[16px] border border-kno-primary pl-[18px] pr-[26px] lg:mt-[42px]">
              <CtaIcon icon={about.hero.chipIcon} size={34} />
              <span className="text-[1.25rem] font-bold text-kno-primary lg:text-h3">
                {about.hero.chip}
              </span>
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row lg:mt-[42px]">
              <AboutCtaLink cta={about.hero.primaryCta} />
              <AboutCtaLink cta={about.hero.secondaryCta} variant="outline" />
            </div>
          </div>

          <div className="relative mt-10 lg:hidden">
            {about.hero.image ? (
              <Image
                src={about.hero.image.src}
                alt={about.hero.image.alt}
                width={699}
                height={788}
                priority
                sizes="100vw"
                className="h-[320px] w-full rounded-panel object-cover sm:h-[420px]"
              />
            ) : null}
          </div>
        </Container>
      </section>

      <section aria-labelledby="about-why" className="bg-kno-canvas py-10 lg:py-[40px]">
        <Container>
          <SectionHeading id="about-why">{about.whyKno.heading}</SectionHeading>
          <p className="mt-2 text-center text-lead font-bold text-kno-ink">
            {about.whyKno.supportingLine}
          </p>
          <p className="mt-1 text-center text-base text-kno-muted">{about.whyKno.description}</p>

          <ul className="mx-auto mt-8 flex max-w-[1000px] flex-wrap items-start justify-center gap-x-10 gap-y-8 lg:mt-[36px]">
            {about.whyKno.items.map((feature) => (
              <li
                key={feature.label}
                className="flex w-[120px] flex-col items-center gap-3 text-center"
              >
                {feature.icon ? (
                  <IconChip
                    src={feature.icon.src}
                    alt={feature.icon.alt}
                    size={66}
                    iconSize={34}
                    tone="accentSoft"
                    shape="circle"
                  />
                ) : null}
                <span className="text-sm text-kno-ink">{feature.label}</span>
              </li>
            ))}
          </ul>

          <p className="mx-auto mt-8 max-w-[820px] text-center text-base text-kno-muted lg:mt-[36px]">
            {about.whyKno.resolution}
          </p>
        </Container>
      </section>

      <section aria-labelledby="about-beliefs" className="bg-kno-cream py-10 lg:py-[40px]">
        <Container>
          <SectionHeading id="about-beliefs">{about.beliefs.heading}</SectionHeading>

          <ul className="mt-8 grid gap-6 lg:mt-[36px] lg:grid-cols-4">
            {about.beliefs.items.map((card) => (
              <li
                key={card.title}
                className="flex flex-col gap-6 rounded-panel border border-kno-primary/30 p-6 lg:p-[26px]"
              >
                {card.icon ? (
                  <IconChip
                    src={card.icon.src}
                    alt={card.icon.alt}
                    size={60}
                    iconSize={30}
                    tone="accentSoft"
                    shape="squircle"
                  />
                ) : null}
                <div>
                  <h3 className="text-h4 font-bold text-kno-ink">{card.title}</h3>
                  <p className="mt-3 text-sm text-kno-muted">{card.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="about-founders" className="bg-kno-canvas py-10 lg:py-[40px]">
        <Container>
          <SectionHeading id="about-founders">{about.team.heading}</SectionHeading>
          <Founders
            people={about.team.people}
            supportingLine={about.team.supportingLine}
            description={about.team.description}
          />
        </Container>
      </section>

      <section aria-labelledby="about-trust" className="bg-kno-canvas pb-10 lg:pb-[40px]">
        <Container>
          <SectionHeading id="about-trust">{about.commitments.heading}</SectionHeading>

          <ul className="mt-8 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:mt-[36px] lg:grid-cols-4">
            {about.commitments.items.map((point) => (
              <li key={point.title} className="flex flex-col gap-4">
                {point.icon ? (
                  <IconChip
                    src={point.icon.src}
                    alt={point.icon.alt}
                    size={64}
                    iconSize={32}
                    tone="primarySoft"
                    shape="squircle"
                  />
                ) : null}
                <div>
                  <h3 className="text-h4 font-bold text-kno-ink">{point.title}</h3>
                  <p className="mt-2 text-sm text-kno-muted">{point.description}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:mt-[36px]">
            <AboutCtaLink cta={about.commitments.primaryCta} />
            <AboutCtaLink cta={about.commitments.secondaryCta} variant="outline" />
          </div>
        </Container>
      </section>

      <TrustBadges badges={about.trustBadges} />
    </main>
  );
}
