import Image from "next/image";

import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { IconChip } from "@/components/ui/icon-chip";
import { PillLink } from "@/components/ui/pill-button";
import { StarRating } from "@/components/ui/star-rating";
import { HERO, TRUST_POINTS } from "@/lib/data/site";

function SocialProofCard() {
  return (
    <div className="w-[258px] rounded-note bg-kno-surface-muted px-4 pt-[17px] lg:h-[132px]">
      <p className="flex items-center gap-1 text-xs text-kno-primary">
        <Icon src="/icons/verified.svg" alt="" size={21} />
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
        {/* The frame is 1440 wide, where this box is 699x698 and a centred
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
          className="absolute inset-y-0 left-0 w-[45.5%] bg-gradient-to-r from-kno-cream to-transparent"
        />
      </div>

      <Container className="relative pb-12 pt-[88px] lg:min-h-[698px] lg:pb-11 lg:pt-[137px]">
        <div className="max-w-[609px]">
          <h1
            id="hero-heading"
            className="text-[2rem] font-bold leading-tight text-kno-primary sm:text-[2.5rem] lg:text-display lg:leading-[58px]"
          >
            {HERO.headline}
          </h1>

          <p className="mt-4 text-base font-semibold text-kno-primary">
            {HERO.eyebrow}
          </p>
          <p className="mt-1 text-base text-kno-muted">{HERO.subhead}</p>

          <p className="mt-8 inline-flex h-[66px] items-center gap-[3px] rounded-[16px] border border-kno-primary pl-[15px] pr-[26px]">
            <Icon src="/icons/loyalty.svg" alt="" size={42} />
            <span className="text-[1.25rem] font-bold text-kno-primary lg:text-h3">
              {HERO.tagline}
            </span>
          </p>

          <ul className="mt-10 grid grid-cols-2 gap-x-5 gap-y-4 sm:flex sm:flex-wrap">
            {TRUST_POINTS.map((point) => (
              <li key={point.lead} className="flex items-center gap-3">
                <IconChip
                  src={point.icon}
                  alt={point.iconAlt}
                  size={42}
                  iconSize={21}
                />
                <span className="text-sm text-kno-primary">
                  <span className="block font-bold">{point.lead}</span>
                  <span className="block">{point.detail}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-5 sm:flex-row lg:mt-[52px]">
            <PillLink href={HERO.primaryCta.href}>
              {HERO.primaryCta.label}
            </PillLink>
            <PillLink href={HERO.secondaryCta.href} variant="outline">
              {HERO.secondaryCta.label}
            </PillLink>
          </div>
        </div>

        {/* Mobile: the photograph and its overlays stack below the copy. */}
        <div className="relative mt-10 lg:hidden">
          <Image
            src="/images/hero-family.png"
            alt="A parent and child sitting outdoors with their dog"
            width={699}
            height={698}
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
