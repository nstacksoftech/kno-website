import type { Plan } from "@/types";

export const PLANS: readonly Plan[] = [
  {
    id: "kno-care",
    name: "KNO Care",
    tagline: "Essential care. Always there.",
    price: "₹199",
    period: "/month",
    includes: [
      "Access to KNO platform",
      "1 pet profile",
      "Book consultations at member price (₹599)",
      "Health records & reminders",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    id: "kno-care-plus",
    name: "KNO Care+",
    tagline: "More care. More value.",
    price: "₹499",
    period: "/month",
    includes: [
      "Everything in KNO Care",
      "Priority access to veterinarians",
      "Up to 3 pets",
      "Consultations at member price (₹499)",
    ],
    cta: "Get Started",
    featured: true,
  },
] as const;

export const PLANS_HEADING = "Plans that care for every Pet";
export const PLANS_QUOTE =
  "Because every pet parent deserves confidence, not confusion.";
