import { resolveMediaUrl } from "./graphqlClient";
import type {
  CmsImage,
  ContactPageData,
  ContactPageResponse,
  ContactSideCard,
  ContactView,
  HomeTrustBadge,
  MediaRef,
  TrustData,
} from "./types";

const EMPTY_CARD: ContactSideCard = {
  eyebrow: "",
  heading: "",
  description: "",
  icon: null,
};

const EMPTY_CONTACT: ContactView = {
  hero: {
    eyebrow: "",
    heading: "",
    description: "",
    hours: "",
    image: null,
    actions: [],
  },
  emergency: { heading: "", description: "", note: "", icon: null },
  helpTopics: { heading: "", description: "", items: [] },
  channels: { heading: "", description: "", items: [] },
  message: {
    heading: "",
    description: "",
    disclaimer: "",
    submitLabel: "Send message",
    whatsapp: EMPTY_CARD,
    faqs: EMPTY_CARD,
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

function mapCard(
  card:
    | {
        icon?: MediaRef;
        eyebrow?: string | null;
        heading?: string | null;
        description?: string | null;
      }
    | null
    | undefined,
): ContactSideCard {
  return {
    eyebrow: text(card?.eyebrow),
    heading: text(card?.heading),
    description: text(card?.description),
    icon: image(card?.icon),
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

function mapContact(contact: ContactPageData, trust: TrustData | null): ContactView {
  return {
    hero: {
      eyebrow: text(contact.hero?.eyebrow),
      heading: text(contact.hero?.heading),
      description: text(contact.hero?.description),
      hours: text(contact.hero?.hours),
      image: image(contact.hero?.image),
      actions: list(contact.hero?.actions).map((action, index) => ({
        id: text(action.id) || `action-${index}`,
        title: text(action.title),
        description: text(action.description),
        href: text(action.url),
        icon: image(action.icon),
      })),
    },
    emergency: {
      heading: text(contact.emergency?.heading),
      description: text(contact.emergency?.description),
      note: text(contact.emergency?.note),
      icon: image(contact.emergency?.icon),
    },
    helpTopics: {
      heading: text(contact.helpTopics?.heading),
      description: text(contact.helpTopics?.description),
      items: list(contact.helpTopics?.items).map((topic, index) => ({
        id: text(topic.id) || `topic-${index}`,
        title: text(topic.title),
        description: text(topic.description),
        href: text(topic.url) || "#",
        icon: image(topic.icon),
      })),
    },
    channels: {
      heading: text(contact.channels?.heading),
      description: text(contact.channels?.description),
      items: list(contact.channels?.items).map((channel, index) => ({
        id: text(channel.id) || `channel-${index}`,
        title: text(channel.title),
        description: text(channel.description),
        email: text(channel.email),
        responseTime: text(channel.responseTime),
        icon: image(channel.icon),
      })),
    },
    message: {
      heading: text(contact.message?.heading),
      description: text(contact.message?.description),
      disclaimer: text(contact.message?.disclaimer),
      submitLabel: text(contact.message?.submitLabel) || "Send message",
      whatsapp: mapCard(contact.message?.whatsapp),
      faqs: mapCard(contact.message?.faqs),
    },
    trustBadges: contact.showTrustedBanner ? mapTrust(trust) : [],
  };
}

export function mapContactPage(response: ContactPageResponse | null): ContactView {
  if (!response?.contact) return EMPTY_CONTACT;
  return mapContact(response.contact, response.trust);
}
