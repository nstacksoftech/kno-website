import type { CmsImage, HomePageData, HomePageResponse, HomeTrustBadge, HomeView, MediaRef, TrustData } from "./types";
import { resolveMediaUrl } from "./graphqlClient";

const EMPTY_HOME: HomeView = {
  hero: {
    heading: "",
    highlight: "",
    supportingLine: "",
    description: "",
    chipImage: null,
    chip: "",
    image: null,
    badge: "",
    badgeImage: null,
    highlights: [],
    primaryCta: { label: "", href: "", icon: null },
    secondaryCta: { label: "", href: "" },
    proofTitle: "",
    proofStat: "",
    avatars: [],
  },
  howItWorks: { heading: "", steps: [] },
  painPoints: { heading: "", points: [], resolution: "" },
  features: { heading: "", image: null, items: [] },
  pricing: { heading: "", plans: [], image: null, caption: "" },
  veterinarians: { heading: "", vets: [], viewAllLabel: "", viewAllUrl: "" },
  trustBadges: [],
};

function text(value: string | null | undefined): string {
  return value?.trim() ?? "";
}

function image(media: MediaRef): CmsImage | null {
  if (!media?.url) return null;
  return { src: resolveMediaUrl(media.url), alt: text(media.alt) };
}

function list<T>(items: T[] | null | undefined): T[] {
  return items ?? [];
}

function initialsFrom(name: string): string {
  return name
    .replace(/^Dr\.?\s+/i, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function mapHero(hero: HomePageData["hero"]): HomeView["hero"] {
  return {
    heading: text(hero.heading),
    highlight: text(hero.highlight),
    supportingLine: text(hero.supportingLine),
    description: text(hero.description),
    chipImage: image(hero.chipImage),
    chip: text(hero.chip),
    image: image(hero.image),
    badge: text(hero.badge),
    badgeImage: image(hero.badgeImage),
    highlights: list(hero.highlights).map((item) => ({
      title: text(item.title),
      description: text(item.description),
      icon: image(item.icon),
    })),
    primaryCta: {
      label: text(hero.primaryCta?.label),
      href: text(hero.primaryCta?.url),
      icon: image(hero.primaryCta?.icon),
    },
    secondaryCta: {
      label: text(hero.secondaryCta?.label),
      href: text(hero.secondaryCta?.url),
    },
    proofTitle: text(hero.proofTitle),
    proofStat: text(hero.proofStat),
    avatars: list(hero.avatars)
      .map((avatar) => image(avatar))
      .filter((avatar): avatar is CmsImage => avatar !== null),
  };
}

function mapHowItWorks(section: HomePageData["howItWorks"]): HomeView["howItWorks"] {
  return {
    heading: text(section?.heading),
    steps: list(section?.steps).map((step, index) => ({
      number: index + 1,
      title: text(step.title),
      description: text(step.description),
      icon: image(step.icon),
    })),
  };
}

function mapPainPoints(section: HomePageData["painPoints"]): HomeView["painPoints"] {
  return {
    heading: text(section?.heading),
    resolution: text(section?.resolution),
    points: list(section?.points).map((point) => ({
      label: text(point.label),
      icon: image(point.icon),
    })),
  };
}

function mapFeatures(section: HomePageData["features"]): HomeView["features"] {
  return {
    heading: text(section?.heading),
    image: image(section?.image),
    items: list(section?.items).map((item) => ({
      title: text(item.title),
      description: text(item.description),
      icon: image(item.icon),
    })),
  };
}

function mapPricing(section: HomePageData["pricing"]): HomeView["pricing"] {
  return {
    heading: text(section?.heading),
    caption: text(section?.caption),
    image: image(section?.image),
    plans: list(section?.plans).map((plan) => ({
      id: plan.id,
      name: text(plan.name),
      tagline: text(plan.tagline),
      price: `${plan.currency ?? ""}${plan.price ?? ""}`,
      period: plan.interval ? `/${plan.interval}` : "",
      includes: list(plan.features).map((feature) => text(feature.text)).filter(Boolean),
      includesLabel: text(plan.includesLabel),
      cta: text(plan.ctaLabel),
      href: text(plan.ctaUrl),
      featured: Boolean(plan.featured),
    })),
  };
}

function mapVets(section: HomePageData["veterinarians"]): HomeView["veterinarians"] {
  return {
    heading: text(section?.heading),
    viewAllLabel: text(section?.viewAllLabel),
    viewAllUrl: text(section?.viewAllUrl),
    vets: list(section?.vets).map((vet) => {
      const name = text(vet.name);
      return {
        id: vet.id,
        name,
        speciality: text(vet.speciality),
        qualification: text(vet.qualification),
        experience: text(vet.experience),
        languages: text(vet.languages)
          .split(",")
          .map((language) => language.trim())
          .filter(Boolean),
        photo: image(vet.photo)?.src ?? null,
        initials: text(vet.initials) || initialsFrom(name),
        verified: text(vet.verifiedLabel).length > 0,
      };
    }),
  };
}

function mapTrust(trust: TrustData | null): HomeTrustBadge[] {
  return list(trust?.items).map((item) => ({
    title: text(item.title),
    description: text(item.description),
    caption: text(item.note),
    image: image(item.image),
  }));
}

export function mapHomePage(response: HomePageResponse | null): HomeView {
  const home = response?.home;
  if (!home) return EMPTY_HOME;

  return {
    hero: mapHero(home.hero),
    howItWorks: mapHowItWorks(home.howItWorks),
    painPoints: mapPainPoints(home.painPoints),
    features: mapFeatures(home.features),
    pricing: mapPricing(home.pricing),
    veterinarians: mapVets(home.veterinarians),
    trustBadges: home.showTrustedBanner ? mapTrust(response?.trust ?? null) : [],
  };
}
