import type { Metadata } from "next";

import { resolveMediaUrl } from "./graphqlClient";
import type { SeoMeta } from "./types";

type SeoFallback = {
  title: string;
  description: string;
};

function text(value: string | null | undefined): string {
  return value?.trim() ?? "";
}

function imageUrl(image: SeoMeta["ogImage"]): string | undefined {
  const url = text(image?.url);
  return url ? resolveMediaUrl(url) : undefined;
}

export function metadataFromSeo(
  meta: SeoMeta | null | undefined,
  fallback: SeoFallback,
): Metadata {
  const title = text(meta?.title) || fallback.title;
  const description = text(meta?.description) || fallback.description;
  const ogTitle = text(meta?.ogTitle) || title;
  const ogDescription = text(meta?.ogDescription) || description;
  const twitterTitle = text(meta?.twitterTitle) || ogTitle;
  const twitterDescription = text(meta?.twitterDescription) || ogDescription;
  const ogImage = imageUrl(meta?.ogImage);
  const twitterImage = imageUrl(meta?.twitterImage) || ogImage;
  const canonical = text(meta?.canonical);
  const ogUrl = text(meta?.ogUrl);
  const keywords = (meta?.keywords ?? [])
    .map((item) => text(item.keyword))
    .filter(Boolean);

  return {
    title,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      type: (meta?.ogType || "website") as "website",
      url: ogUrl || undefined,
      images: ogImage
        ? [{ url: ogImage, alt: text(meta?.ogImage?.alt) || title }]
        : undefined,
    },
    twitter: {
      card: meta?.twitterCard || (twitterImage ? "summary_large_image" : "summary"),
      site: text(meta?.twitterSite) || undefined,
      title: twitterTitle,
      description: twitterDescription,
      images: twitterImage ? [twitterImage] : undefined,
    },
  };
}
