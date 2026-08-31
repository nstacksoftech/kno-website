import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";

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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
