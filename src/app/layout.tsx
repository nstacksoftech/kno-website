import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";
import { fetchHeaderData } from "@/lib/api";
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
  const header = await fetchHeaderData();
  const items =
    header?.navLinks && header.navLinks.length > 0
      ? header.navLinks.map((link) => ({ label: link.label, href: link.url }))
      : NAV_ITEMS;
  const ctaLabel = header?.cta?.label || "Become a Member";
  const ctaHref = header?.cta?.url || "/#pricing";
  const logo = header?.logo?.url
    ? {
        src: resolveMediaUrl(header.logo.url),
        alt: header.logo.alt || "KNO",
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
        <SiteFooter />
      </body>
    </html>
  );
}
