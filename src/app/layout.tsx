import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";
import {
  fetchFooterData,
  fetchHeaderData,
  fetchSiteSettingsData,
} from "@/lib/api";
import { mapFooter } from "@/lib/map-footer";
import { NAV_ITEMS } from "@/lib/data/site";
import { resolveMediaUrl } from "@/lib/graphqlClient";

import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KNO - Veterinary Care, Simplified",
  description:
    "Everything for your pet’s health and wellbeing, connected in one place. Licensed veterinarians, 24/7 availability and secure health records.",
  openGraph: {
    title: "KNO - Veterinary Care, Simplified",
    description:
      "Everything for your pet’s health and wellbeing, connected in one place.",
    type: "website",
  },
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const [header, footerData, siteSettings] = await Promise.all([
    fetchHeaderData(),
    fetchFooterData(),
    fetchSiteSettingsData(),
  ]);
  const footer = mapFooter(footerData, siteSettings);
  const items =
    header?.navLinks && header.navLinks.length > 0
      ? header.navLinks.map((link) => ({ label: link.label, href: link.url }))
      : NAV_ITEMS;
  const ctaLabel = header?.cta?.label || "Become a Member";
  const ctaHref = header?.cta?.url || "/#pricing";
  const logo = siteSettings?.headerLogo?.url
    ? {
        src: resolveMediaUrl(siteSettings.headerLogo.url),
        alt: siteSettings.headerLogo.alt || "KNO",
      }
    : null;

  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <SiteHeader
          items={items}
          ctaLabel={ctaLabel}
          ctaHref={ctaHref}
          logo={logo}
        />
        {children}
        <SiteFooter footer={footer} />
      </body>
    </html>
  );
}
