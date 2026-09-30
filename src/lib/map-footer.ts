import { resolveMediaUrl } from "./graphqlClient";
import type { CmsImage, FooterData, FooterView, MediaRef } from "./types";

const EMPTY_FOOTER: FooterView = {
  logo: null,
  companyName: "",
  addressLines: [],
  socialLinks: [],
  columns: [],
  copyright: "",
  legalLinks: [],
};

function text(value: string | null | undefined): string {
  return value?.trim() ?? "";
}

function image(media: MediaRef): CmsImage | null {
  if (!media?.url) return null;
  return { src: resolveMediaUrl(media.url), alt: text(media.alt) };
}

function platformLabel(platform: string): string {
  const value = text(platform);
  if (!value) return "";
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function mapFooter(footer: FooterData | null): FooterView {
  if (!footer) return EMPTY_FOOTER;

  return {
    logo: image(footer.logo),
    companyName: text(footer.companyName),
    addressLines: text(footer.companyAddress)
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean),
    socialLinks: (footer.socialLinks ?? []).map((link) => ({
      label: platformLabel(link.platform),
      href: text(link.url),
      icon: image(link.icon),
    })),
    columns: (footer.columns ?? []).map((column) => ({
      heading: text(column.title),
      links: (column.links ?? []).map((link) => ({
        label: text(link.label),
        href: text(link.url),
      })),
    })),
    copyright: text(footer.copyright),
    legalLinks: (footer.legalLinks ?? []).map((link) => ({
      label: text(link.label),
      href: text(link.url),
    })),
  };
}
