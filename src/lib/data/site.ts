import type { NavItem, TrustPoint } from "@/types";

export const NAV_ITEMS: readonly NavItem[] = [
  { label: "How It Work", href: "/#how-it-works" },
  { label: "Plan & Pricing", href: "/#pricing" },
  { label: "Our Vets", href: "/#vets" },
  { label: "About KNO", href: "/about" },
] as const;

export const HERO = {
  headline: "Parenting your pet shouldn’t come with guesswork",
  eyebrow: "Expert Care. Real guidance",
  subhead:
    "Everything for your pet’s health and wellbeing, connected in one place",
  tagline: "KNO karo. Guess mat karo",
  primaryCta: { label: "Book Vet Consult", href: "/#pricing" },
  secondaryCta: { label: "Explore Health Needs", href: "/#features" },
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

export const TRUST_POINTS: readonly TrustPoint[] = [
  {
    lead: "Licensed",
    detail: "Veterinarians",
    icon: "/icons/stethoscope.svg",
    iconAlt: "",
  },
  { lead: "24/7", detail: "Available", icon: "/icons/av-timer.svg", iconAlt: "" },
  {
    lead: "Record",
    detail: "Secure Health",
    icon: "/icons/contract.svg",
    iconAlt: "",
  },
  {
    lead: "Trusted",
    detail: "Across India",
    icon: "/icons/verified.svg",
    iconAlt: "",
  },
] as const;
