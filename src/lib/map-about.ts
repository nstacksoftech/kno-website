import { resolveMediaUrl } from "./graphqlClient";
import type {
  AboutPageData,
  AboutPageResponse,
  AboutView,
  CmsImage,
  HomeTrustBadge,
  MediaRef,
  TrustData,
} from "./types";

const EMPTY_CTA = { label: "", href: "", icon: null };

const EMPTY_ABOUT: AboutView = {
  hero: {
    heading: "",
    highlight: "",
    supportingLine: "",
    description: "",
    chip: "",
    chipIcon: null,
    image: null,
    primaryCta: EMPTY_CTA,
    secondaryCta: EMPTY_CTA,
  },
  whyKno: {
    heading: "",
    supportingLine: "",
    description: "",
    items: [],
    resolution: "",
  },
  beliefs: { heading: "", items: [] },
  team: { heading: "", people: [], supportingLine: "", description: "" },
  commitments: {
    heading: "",
    items: [],
    primaryCta: EMPTY_CTA,
    secondaryCta: EMPTY_CTA,
  },
  trustBadges: [],
};

function text(value: string | null | undefined): string {
  return value?.trim() ?? "";
}

function image(media: MediaRef | undefined): CmsImage | null {
  if (!media?.url) return null;
  return { src: resolveMediaUrl(media.url), alt: text(media.alt) };
}

function list<T>(items: T[] | null | undefined): T[] {
  return items ?? [];
}

function mapCta(
  cta: { label?: string | null; url?: string | null; icon?: MediaRef } | null | undefined,
): AboutView["hero"]["primaryCta"] {
  return {
    label: text(cta?.label),
    href: text(cta?.url),
    icon: image(cta?.icon),
  };
}

function mapCards(
  items: { icon: MediaRef; title: string; description: string }[] | null | undefined,
): AboutView["beliefs"]["items"] {
  return list(items).map((item) => ({
    title: text(item.title),
    description: text(item.description),
    icon: image(item.icon),
  }));
}

function mapTrust(trust: TrustData | null): HomeTrustBadge[] {
  return list(trust?.items).map((item) => ({
    title: text(item.title),
    description: text(item.description),
    caption: text(item.note),
    image: image(item.image),
  }));
}

function mapAbout(about: AboutPageData, trust: TrustData | null): AboutView {
  return {
    hero: {
      heading: text(about.hero?.heading),
      highlight: text(about.hero?.highlight),
      supportingLine: text(about.hero?.supportingLine),
      description: text(about.hero?.description),
      chip: text(about.hero?.chip),
      chipIcon: image(about.hero?.chipIcon),
      image: image(about.hero?.image),
      primaryCta: mapCta(about.hero?.primaryCta),
      secondaryCta: mapCta(about.hero?.secondaryCta),
    },
    whyKno: {
      heading: text(about.whyKno?.heading),
      supportingLine: text(about.whyKno?.supportingLine),
      description: text(about.whyKno?.description),
      resolution: text(about.whyKno?.resolution),
      items: list(about.whyKno?.items).map((item) => ({
        label: text(item.label),
        icon: image(item.icon),
      })),
    },
    beliefs: {
      heading: text(about.beliefs?.heading),
      items: mapCards(about.beliefs?.items),
    },
    team: {
      heading: text(about.team?.heading),
      supportingLine: text(about.team?.supportingLine),
      description: text(about.team?.description),
      people: list(about.team?.people).map((person) => ({
        name: text(person.name),
        role: text(person.role),
        image: image(person.image),
        bio: text(person.bio),
      })),
    },
    commitments: {
      heading: text(about.commitments?.heading),
      items: mapCards(about.commitments?.items),
      primaryCta: mapCta(about.commitments?.primaryCta),
      secondaryCta: mapCta(about.commitments?.secondaryCta),
    },
    trustBadges: about.showTrustedBanner ? mapTrust(trust) : [],
  };
}

export function mapAboutPage(response: AboutPageResponse | null): AboutView {
  if (!response?.about) return EMPTY_ABOUT;
  return mapAbout(response.about, response.trust);
}
