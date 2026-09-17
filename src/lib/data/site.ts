import type { NavItem, TrustPoint } from "@/types";

export const NAV_ITEMS: readonly NavItem[] = [
  { label: "How It Work", href: "/#how-it-works" },
  { label: "Plan & Pricing", href: "/#pricing" },
  { label: "Our Vets", href: "/#vets" },
  { label: "About KNO", href: "/about" },
] as const;

export const HERO = {
  /** The design sets the closing phrase in brand green against near-black. */
  headline: "Parenting your pet shouldn’t come",
  headlineAccent: "with guesswork",
  eyebrow: "Expert Care. Real guidance",
  subhead:
    "Everything for your pet’s health and wellbeing, connected in one place",
  tagline: "KNO karo. Guess mat karo",
  primaryCta: {
    label: "Book Vet Consult",
    href: "/#pricing",
    icon: "/icons/consult.svg",
  },
  secondaryCta: {
    label: "Explore Health Needs",
    href: "/#features",
    icon: "/icons/medical-services.svg",
  },
  socialProof: {
    caption: "Trusted by Pet Parents across India",
    headline: "10,000+ Happy Families",
    rating: 5,
    avatars: [
      "/images/avatar-1.png",
      "/images/avatar-2.png",
      "/images/avatar-3.png",
      "/images/avatar-3.png",
    ],
  },
  badge: "One Pet. One Health Journey.",
} as const;

/**
 * The strip bottom-aligns its four glyphs on a shared baseline, so each carries
 * its own box rather than a single shared size.
 */
export const TRUST_POINTS: readonly TrustPoint[] = [
  {
    lead: "Licensed",
    detail: "Veterinarians",
    icon: "/icons/hero-licensed.svg",
    iconAlt: "",
    iconWidth: 40,
    iconHeight: 40,
  },
  {
    lead: "24/7",
    detail: "Available",
    icon: "/icons/hero-247.svg",
    iconAlt: "",
    iconWidth: 40,
    iconHeight: 40,
  },
  {
    lead: "Record",
    detail: "Secure Health",
    icon: "/icons/hero-records.svg",
    iconAlt: "",
    iconWidth: 35,
    iconHeight: 35,
  },
  {
    lead: "Trusted",
    detail: "Across India",
    icon: "/icons/hero-india.svg",
    iconAlt: "",
    iconWidth: 40,
    iconHeight: 32,
  },
] as const;
