import Image from "next/image";
import { ShieldCheck } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { PillLink } from "@/components/ui/pill-button";
import { StarRating } from "@/components/ui/star-rating";
import { HERO, TRUST_POINTS } from "@/lib/data/site";

function SocialProofCard() {
  return (
    <div className="w-[258px] rounded-note bg-kno-surface-muted/90 px-4 pt-[17px] lg:h-[132px]">
      <p className="flex items-center gap-1 text-xs text-kno-primary">
        <ShieldCheck className="size-[21px] shrink-0" aria-hidden />
        {HERO.socialProof.caption}
      </p>
      <div className="mt-[10px] flex items-center gap-3">
        <ul className="flex items-center">
          {HERO.socialProof.avatars.map((avatar, index) => (
            <li key={index} className="-ml-[18px] first:ml-0">
              <Image
                src={avatar}
                alt=""
                aria-hidden
                width={36}
                height={36}
                className="size-9 rounded-full object-cover"
              />
            </li>
          ))}
        </ul>
        <StarRating rating={HERO.socialProof.rating} />
      </div>
      <p className="mt-[12px] text-base font-bold text-kno-primary">
        {HERO.socialProof.headline}
      </p>
    </div>
  );
}

function JourneyBadge() {
  return (
    <div className="flex size-36 flex-col items-center rounded-full bg-kno-primary pt-[23px] text-center">
      <Icon src="/icons/heart-check.svg" alt="" size={42} />
      <p className="w-[98px] text-base text-kno-on-primary">
        {HERO.badge}
      </p>
    </div>
  );
}

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-kno-cream"
    >
      {/* Photograph bleeds to the right edge of the viewport, exactly as in the
          source frame where it occupies 699 of 1440px and runs the full height. */}
      <div className="absolute inset-y-0 right-0 -z-10 hidden w-[48.54%] lg:block">
        {/* The frame is 1440 wide, where this box is 699x788 and a centred
            cover-crop reproduces Figma exactly. Below that the box narrows but
            keeps its height, so the crop window closes in from both sides and
            the wall behind the badge scrolls out of view. Biasing the focal
            point right keeps that wall in frame; at 1440+ it reverts to
            centred so the frame still matches pixel for pixel. */}
        <Image
          src="/images/hero-family.png"
          alt="A parent and child sitting outdoors with their dog"
          fill
          priority
          sizes="(min-width: 1024px) 49vw, 0px"
          className="object-[68%_center] object-cover frame:object-center"
        />
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 w-[20.5%] bg-gradient-to-r from-kno-cream to-transparent"
        />
      </div>

      <Container className="relative pb-10 pt-[88px] lg:min-h-[700px] lg:pb-[40px] lg:pt-[137px]">
        <div className="max-w-[609px]">
          <h1
            id="hero-heading"
            className="text-[2rem] font-bold leading-tight text-kno-ink sm:text-[2.5rem] lg:text-display lg:leading-[58px]"
          >
            {HERO.headline}{" "}
            <span className="text-kno-primary">{HERO.headlineAccent}</span>
          </h1>

          <p className="mt-4 text-base font-semibold text-kno-primary">
            {HERO.eyebrow}
          </p>
          <p className="mt-1 text-base text-kno-muted">{HERO.subhead}</p>

          <p className="mt-8 inline-flex h-[66px] items-center gap-[10px] rounded-[16px] border border-kno-primary pl-[18px] pr-[26px] lg:mt-[42px]">
            <Icon src="/icons/kno-karo.svg" alt="" size={34} />
            <span className="text-[1.25rem] font-bold text-kno-primary lg:text-h3">
              {HERO.tagline}
            </span>
          </p>

          {/* The four glyphs differ in height and sit on a shared baseline, so
              each icon box is bottom-aligned inside a 40px-tall track. */}
          <ul className="mt-9 grid grid-cols-2 gap-x-10 gap-y-6 sm:flex sm:flex-wrap sm:gap-x-[56px]">
            {TRUST_POINTS.map((point) => (
              <li
                key={point.lead}
                className="flex flex-col items-center gap-[10px]"
              >
                <span className="flex h-10 items-end">
                  <Icon
                    src={point.icon}
                    alt={point.iconAlt}
                    width={point.iconWidth}
                    height={point.iconHeight}
                  />
                </span>
                <span className="text-center text-sm text-kno-ink">
                  <span className="block font-bold">{point.lead}</span>
                  <span className="block">{point.detail}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row lg:mt-[42px]">
            <PillLink
              href={HERO.primaryCta.href}
              className="gap-[10px] px-[30px]"
            >
              <Icon
                src={HERO.primaryCta.icon}
                alt=""
                width={18.6}
                height={19}
              />
              {HERO.primaryCta.label}
              <Icon
                src="/icons/chevron-right-light.svg"
                alt=""
                width={9.18}
                height={16}
                className="-scale-x-100"
              />
            </PillLink>
            <PillLink
              href={HERO.secondaryCta.href}
              variant="outline"
              className="gap-[10px] px-[30px]"
            >
              <Icon src={HERO.secondaryCta.icon} alt="" size={20} />
              {HERO.secondaryCta.label}
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

        {/* Mobile: the photograph and its overlays stack below the copy. */}
        <div className="relative mt-10 lg:hidden">
          <Image
            src="/images/hero-family.png"
            alt="A parent and child sitting outdoors with their dog"
            width={699}
            height={788}
            priority
            sizes="100vw"
            className="h-[320px] w-full rounded-panel object-cover sm:h-[420px]"
          />
          <div className="absolute bottom-4 right-4">
            <SocialProofCard />
          </div>
        </div>

        <div className="pointer-events-none absolute right-[29px] top-[176px] hidden lg:block">
          <JourneyBadge />
        </div>
        <div className="absolute right-[91px] top-[543px] hidden lg:block">
          <SocialProofCard />
        </div>
      </Container>
    </section>
  );
}
