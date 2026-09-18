import type { Metadata } from "next";
import Image from "next/image";

import { Founders } from "@/components/sections/founders";
import { TrustBadges } from "@/components/sections/trust-badges";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { IconChip } from "@/components/ui/icon-chip";
import { PillLink } from "@/components/ui/pill-button";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  ABOUT_BELIEFS,
  ABOUT_FOUNDERS,
  ABOUT_HERO,
  ABOUT_TRUST,
  ABOUT_WHY,
} from "@/lib/data/about";

export const metadata: Metadata = {
  title: "About KNO - We built KNO because we're pet parents too",
  description:
    "KNO brings your pet's healthcare together in one place: licensed veterinarians, health records, prescriptions, preventive care and reminders - one pet, one health journey.",
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section
        aria-labelledby="about-hero-heading"
        className="relative isolate overflow-hidden bg-kno-cream"
      >
        {/* Photograph bleeds to the right edge, as in the source frame. */}
        <div className="absolute inset-y-0 right-0 -z-10 hidden w-[48%] lg:block">
          <Image
            src={ABOUT_HERO.image}
            alt={ABOUT_HERO.imageAlt}
            fill
            priority
            sizes="(min-width: 1024px) 49vw, 0px"
            className="rounded-l-panel object-cover object-[68%_center]"
          />
          <div
            aria-hidden
            className="absolute inset-y-0 left-0 w-[18%] bg-gradient-to-r from-kno-cream to-transparent"
          />
        </div>

        <Container className="relative pb-12 pt-[104px] lg:min-h-[720px] lg:pb-[86px] lg:pt-[150px]">
          <div className="max-w-[560px]">
            <h1
              id="about-hero-heading"
              className="text-[2rem] font-bold leading-tight text-kno-ink sm:text-[2.5rem] lg:text-display lg:leading-[58px]"
            >
              {ABOUT_HERO.headline}{" "}
              <span className="text-kno-primary">
                {ABOUT_HERO.headlineAccent}
              </span>
            </h1>

            <p className="mt-6 text-base font-semibold text-kno-ink">
              {ABOUT_HERO.eyebrow}
            </p>
            <p className="mt-2 max-w-[470px] text-base text-kno-muted">
              {ABOUT_HERO.body}
            </p>

            <p className="mt-8 inline-flex h-[66px] items-center gap-[3px] rounded-[16px] border border-kno-primary pl-[15px] pr-[26px]">
              <Icon src="/icons/loyalty.svg" alt="" size={42} />
              <span className="text-[1.25rem] font-bold text-kno-primary lg:text-h3">
                {ABOUT_HERO.tagline}
              </span>
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row lg:mt-[42px]">
              <PillLink
                href={ABOUT_HERO.primaryCta.href}
                className="gap-[10px] px-[30px]"
              >
                <Icon src={ABOUT_HERO.primaryCta.icon} alt="" width={18.6} height={19} />
                {ABOUT_HERO.primaryCta.label}
                <Icon
                  src="/icons/chevron-right-light.svg"
                  alt=""
                  width={9.18}
                  height={16}
                  className="-scale-x-100"
                />
              </PillLink>
              <PillLink
                href={ABOUT_HERO.secondaryCta.href}
                variant="outline"
                className="gap-[10px] px-[30px]"
              >
                <Icon src={ABOUT_HERO.secondaryCta.icon} alt="" size={20} />
                {ABOUT_HERO.secondaryCta.label}
                <Icon
                  src="/icons/chevron-right.svg"
                  alt=""
                  width={9.18}
                  height={16}
                  className="-scale-x-100"
                />
              </PillLink>
            </div>
          </div>

          {/* Mobile: the photograph stacks below the copy. */}
          <div className="relative mt-10 lg:hidden">
            <Image
              src={ABOUT_HERO.image}
              alt={ABOUT_HERO.imageAlt}
              width={699}
              height={788}
              priority
              sizes="100vw"
              className="h-[320px] w-full rounded-panel object-cover sm:h-[420px]"
            />
          </div>
        </Container>
      </section>

      {/* Why KNO? */}
      <section
        aria-labelledby="about-why"
        className="bg-kno-canvas py-16 lg:py-[80px]"
      >
        <Container>
          <SectionHeading id="about-why">{ABOUT_WHY.heading}</SectionHeading>
          <p className="mt-4 text-center text-lead font-bold text-kno-ink">
            {ABOUT_WHY.lead}
          </p>
          <p className="mt-2 text-center text-base text-kno-muted">
            {ABOUT_WHY.sub}
          </p>

          <ul className="mx-auto mt-12 flex max-w-[1000px] flex-wrap items-start justify-center gap-x-10 gap-y-8 lg:mt-[48px]">
            {ABOUT_WHY.features.map((feature) => (
              <li
                key={feature.title}
                className="flex w-[120px] flex-col items-center gap-3 text-center"
              >
                <IconChip
                  src={feature.icon}
                  alt=""
                  size={66}
                  iconSize={34}
                  tone="accentSoft"
                  shape="circle"
                />
                <span className="text-sm text-kno-ink">{feature.title}</span>
              </li>
            ))}
          </ul>

          <p className="mx-auto mt-12 max-w-[820px] text-center text-base text-kno-muted lg:mt-[48px]">
            {ABOUT_WHY.footnote}
          </p>
        </Container>
      </section>

      {/* What we believe */}
      <section aria-labelledby="about-beliefs" className="bg-kno-cream py-16 lg:py-[80px]">
        <Container>
          <SectionHeading id="about-beliefs">
            {ABOUT_BELIEFS.heading}
          </SectionHeading>

          <ul className="mt-10 grid gap-6 lg:mt-[52px] lg:grid-cols-4">
            {ABOUT_BELIEFS.cards.map((card) => (
              <li
                key={card.title}
                className="flex flex-col gap-6 rounded-panel border border-kno-primary/30 p-6 lg:p-[26px]"
              >
                <IconChip
                  src={card.icon}
                  alt=""
                  size={60}
                  iconSize={30}
                  tone="accentSoft"
                  shape="squircle"
                />
                <div>
                  <h3 className="text-h4 font-bold text-kno-ink">{card.title}</h3>
                  <p className="mt-3 text-sm text-kno-muted">{card.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Meet the people behind KNO */}
      <section
        aria-labelledby="about-founders"
        className="bg-kno-canvas py-16 lg:py-[80px]"
      >
        <Container>
          <SectionHeading id="about-founders">
            {ABOUT_FOUNDERS.heading}
          </SectionHeading>

          <Founders />
        </Container>
      </section>

      {/* Built with trust at the center */}
      <section
        aria-labelledby="about-trust"
        className="bg-kno-canvas pb-16 lg:pb-[80px]"
      >
        <Container>
          <SectionHeading id="about-trust">
            {ABOUT_TRUST.heading}
          </SectionHeading>

          <ul className="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:mt-[52px] lg:grid-cols-4">
            {ABOUT_TRUST.points.map((point) => (
              <li key={point.title} className="flex flex-col gap-4">
                <IconChip
                  src={point.icon}
                  alt=""
                  size={64}
                  iconSize={32}
                  tone="primarySoft"
                  shape="squircle"
                />
                <div>
                  <h3 className="text-h4 font-bold text-kno-ink">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm text-kno-muted">{point.body}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:mt-[48px]">
            <PillLink
              href={ABOUT_TRUST.primaryCta.href}
              className="gap-[10px] px-[30px]"
            >
              <Icon src="/icons/consult.svg" alt="" width={18.6} height={19} />
              {ABOUT_TRUST.primaryCta.label}
              <Icon
                src="/icons/chevron-right-light.svg"
                alt=""
                width={9.18}
                height={16}
                className="-scale-x-100"
              />
            </PillLink>
            <PillLink
              href={ABOUT_TRUST.secondaryCta.href}
              variant="outline"
              className="gap-[10px] px-[30px]"
            >
              <Icon src="/icons/medical-services.svg" alt="" size={20} />
              {ABOUT_TRUST.secondaryCta.label}
              <Icon
                src="/icons/chevron-right.svg"
                alt=""
                width={9.18}
                height={16}
                className="-scale-x-100"
              />
            </PillLink>
          </div>
        </Container>
      </section>

      {/* Trust badges band — reused from the home page. */}
      <TrustBadges />
    </main>
  );
}
