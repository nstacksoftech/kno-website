import type { Plan } from "@/types";

export const PLANS: readonly Plan[] = [
  {
    id: "kno-care",
    name: "KNO Care",
    tagline: "Essential care. Always there.",
    price: "₹199",
    period: "/month",
    includes: [
      "Access to KNO Platform",
      "1 Pet Health Profile",
      "Book Vet Consultations from ₹499",
      "Health Records and Reminders",
      "₹100 off KNO Supplements",
      "20% off KNO Pharmacy",
      "FREE next day delivery",
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
      "Up to 3 Pet Health Profiles",
      "Book Vet Consultations from ₹499",
      "Health Records and Reminders",
      "₹100 off KNO Supplements",
      "20% off KNO Pharmacy",
      "FREE next day delivery",
    ],
    cta: "Get Started",
    featured: true,
  },
] as const;

export const PLANS_HEADING = "Plans that care for every Pet";

export const PLANS_QUOTE =
  "Because every pet parent deserves confidence, not confusion.";
