import Image from "next/image";
import { ShieldCheck } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { PillLink } from "@/components/ui/pill-button";
import { StarRating } from "@/components/ui/star-rating";
import type { HomeView } from "@/lib/types";

function SocialProofCard({
  caption,
  avatars,
  headline,
}: {
  caption: string;
  avatars: HomeView["hero"]["avatars"];
  headline: string;
}) {
  return (
    <div className="w-[258px] rounded-note bg-kno-surface-muted/90 px-4 pt-[17px] lg:h-[132px]">
      <p className="flex items-center gap-1 text-xs text-kno-primary">
        <ShieldCheck className="size-[21px] shrink-0" aria-hidden />
        {caption}
      </p>
      <div className="mt-[10px] flex items-center gap-3">
        <ul className="flex items-center">
          {avatars.map((avatar) => (
            <li key={avatar.src} className="-ml-[18px] first:ml-0">
              <Image
                src={avatar.src}
                alt={avatar.alt}
                width={36}
                height={36}
                className="size-9 rounded-full object-cover"
              />
            </li>
          ))}
        </ul>
        <StarRating rating={5} />
      </div>
      <p className="mt-[12px] text-base font-bold text-kno-primary">{headline}</p>
    </div>
  );
}

function JourneyBadge({
  badge,
  badgeImage,
}: {
  badge: string;
  badgeImage: HomeView["hero"]["badgeImage"];
}) {
  return (
    <div className="flex size-36 flex-col items-center rounded-full bg-kno-primary pt-[23px] text-center">
      {badgeImage ? <Icon src={badgeImage.src} alt={badgeImage.alt} size={42} /> : null}
      <p className="w-[98px] text-base text-kno-on-primary">{badge}</p>
    </div>
  );
}

export function Hero({ hero }: { hero: HomeView["hero"] }) {
  return (
    <section aria-labelledby="hero-heading" className="relative isolate overflow-hidden bg-kno-cream">
      <div className="absolute inset-y-0 right-0 -z-10 hidden w-[48.54%] lg:block">
        {hero.image ? (
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            priority
            sizes="(min-width: 1024px) 49vw, 0px"
            className="object-[68%_center] object-cover frame:object-center"
          />
        ) : null}
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
            {hero.heading} <span className="text-kno-primary">{hero.highlight}</span>
          </h1>

          <p className="mt-4 text-base font-semibold text-kno-primary">{hero.supportingLine}</p>
          <p className="mt-1 text-base text-kno-muted">{hero.description}</p>

          <p className="mt-8 inline-flex h-[66px] items-center gap-[10px] rounded-[16px] border border-kno-primary pl-[18px] pr-[26px] lg:mt-[42px]">
            <Icon src="/icons/kno-karo.svg" alt="" size={34} />
            <span className="text-[1.25rem] font-bold text-kno-primary lg:text-h3">{hero.chip}</span>
          </p>

          <ul className="mt-9 grid grid-cols-2 gap-x-10 gap-y-6 sm:flex sm:flex-wrap sm:gap-x-[56px]">
            {hero.highlights.map((point) => (
              <li key={point.title} className="flex flex-col items-center gap-[10px]">
                <span className="flex h-10 items-end">
                  {point.icon ? (
                    <Icon src={point.icon.src} alt={point.icon.alt} width={40} height={40} />
                  ) : null}
                </span>
                <span className="text-center text-sm text-kno-ink">
                  <span className="block font-bold">{point.title}</span>
                  <span className="block">{point.description}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row lg:mt-[42px]">
            <PillLink href={hero.primaryCta.href} className="gap-[10px] px-[30px]">
              {hero.primaryCta.icon ? (
                <Icon src={hero.primaryCta.icon.src} alt={hero.primaryCta.icon.alt} width={18.6} height={19} />
              ) : null}
              {hero.primaryCta.label}
              <Icon src="/icons/chevron-right-light.svg" alt="" width={9.18} height={16} className="-scale-x-100" />
            </PillLink>
            <PillLink href={hero.secondaryCta.href} variant="outline" className="gap-[10px] px-[30px]">
              {hero.secondaryCta.label}
              <Icon src="/icons/chevron-right.svg" alt="" width={9.18} height={16} className="-scale-x-100" />
            </PillLink>
          </div>
        </div>

        <div className="relative mt-10 lg:hidden">
          {hero.image ? (
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              width={699}
              height={788}
              priority
              sizes="100vw"
              className="h-[320px] w-full rounded-panel object-cover sm:h-[420px]"
            />
          ) : null}
          <div className="absolute bottom-4 right-4">
            <SocialProofCard
              caption={hero.proofTitle}
              avatars={hero.avatars}
              headline={hero.proofStat}
            />
          </div>
        </div>

        <div className="pointer-events-none absolute right-[29px] top-[176px] hidden lg:block">
          <JourneyBadge badge={hero.badge} badgeImage={hero.badgeImage} />
        </div>
        <div className="absolute right-[91px] top-[543px] hidden lg:block">
          <SocialProofCard
            caption={hero.proofTitle}
            avatars={hero.avatars}
            headline={hero.proofStat}
          />
        </div>
      </Container>
    </section>
  );
}
