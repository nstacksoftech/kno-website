/**
 * Single source of truth for how people reach KNO. Referenced by the Contact
 * (Help Center) page.
 */
export const COMPANY = {
  legalName: "KNO Veterinary Care Network Private Limited",
  tradingName: "KNO",
  registeredOffice: [
    "WeWork Oberoi Commerz II, Oberoi Garden City",
    "Goregaon East, Mumbai - 400063",
    "Maharashtra, India",
  ],
  jurisdiction: "Mumbai, Maharashtra",
} as const;

/** Hero / help-center band. */
export const CONTACT_HERO = {
  eyebrow: "HELP CENTER",
  title: "How can we help?",
  lead: "Whether you have a question about your membership, your pet's health records, an order or KNO, we're here to help.",
  availability:
    "Member support is available Monday – Friday, 9:00 AM to 9:00 PM IST.",
  searchPlaceholder:
    "Search KNO Help (e.g. memberships, consultations, prescriptions...)",
  image: "/images/contact-banner.png",
  imageAlt: "Happy pets with their families",
} as const;

export interface HeroAction {
  id: "track" | "membership" | "vet";
  title: string;
  sub: string;
  icon: string;
  href: string;
}

export const CONTACT_HERO_ACTIONS: readonly HeroAction[] = [
  {
    id: "track",
    title: "Track My Order",
    sub: "Get real-time update",
    icon: "/icons/calendar-clock.svg",
    href: "#",
  },
  {
    id: "membership",
    title: "Manage Membership",
    sub: "Billing, plan & more",
    icon: "/icons/person-add.svg",
    href: "/#pricing",
  },
  {
    id: "vet",
    title: "Talk to vet",
    sub: "Consult a veterinarian",
    icon: "/icons/stethoscope-step.svg",
    href: "/#pricing",
  },
] as const;

/** Emergency band under the hero. */
export const CONTACT_EMERGENCY = {
  title: "If this is an emergency, seek immediate veterinary care.",
  body: "Trauma, difficulty breathing, seizures, suspected poisoning, severe bleeding, a distended abdomen or collapse may require immediate in-person care. Please contact your nearest 24-hour veterinary hospital.",
  aside: "KNO is not an emergency veterinary service.",
} as const;

export interface HelpTopic {
  title: string;
  body: string;
  icon: string;
  href: string;
}

/** "Browse Help Topics" grid. */
export const HELP_TOPICS: readonly HelpTopic[] = [
  {
    title: "Membership & Billing",
    body: "Plans, payments, cancellations and member benefits",
    icon: "/icons/loyalty.svg",
    href: "#",
  },
  {
    title: "Vet Consultations",
    body: "Booking, rescheduling, video consultations and follow-ups",
    icon: "/icons/stethoscope-step.svg",
    href: "#",
  },
  {
    title: "Pet Health Profile",
    body: "Records, vaccinations, reminders and pet information",
    icon: "/icons/pets.svg",
    href: "#",
  },
  {
    title: "Prescriptions",
    body: "Accessing and understanding KNO prescriptions",
    icon: "/icons/pill.svg",
    href: "#",
  },
  {
    title: "KNO Store & Pharmacy",
    body: "Orders, medicines, supplements and prescription diets",
    icon: "/icons/medical-services.svg",
    href: "#",
  },
  {
    title: "Delivery & Returns",
    body: "Tracking, shipping, damaged orders and returns",
    icon: "/icons/folder.svg",
    href: "#",
  },
] as const;

export interface ContactChannel {
  id: "support" | "orders" | "general" | "vets" | "privacy";
  label: string;
  description: string;
  email: string;
  responseTime: string;
}

/** The five ways to write, shown as email channel cards. */
export const CONTACT_CHANNELS: readonly ContactChannel[] = [
  {
    id: "support",
    label: "Member Support",
    description:
      "Questions about your membership, billing, health records or a consultation.",
    email: "support@kno.vet",
    responseTime: "Replies within 24 hours",
  },
  {
    id: "orders",
    label: "Orders & Pharmacy",
    description:
      "Questions about orders, delivery, returns or KNO Store purchases.",
    email: "order@kno.vet",
    responseTime: "Replies within 24 hours",
  },
  {
    id: "general",
    label: "General Enquiries",
    description: "Partnerships, media and anything else.",
    email: "hello@kno.vet",
    responseTime: "Replies within 24 hours",
  },
  {
    id: "vets",
    label: "For Veterinarians",
    description:
      "Join the KNO panel or ask about consultation scheduling and payouts.",
    email: "vets@kno.vet",
    responseTime: "Replies within 3 working days",
  },
  {
    id: "privacy",
    label: "Privacy & Data Requests",
    description:
      "Access, correct or erase your data, or raise a concern about how it is handled.",
    email: "privacy@kno.vet",
    responseTime: "Acknowledged within 72 hours",
  },
] as const;

/** "Send us a message" intro + the two side cards beside the form. */
export const CONTACT_FORM_COPY = {
  heading: "Send us a message",
  lead: "Use this form for non-urgent enquiries. For clinical advice about a specific animal, please book a consultation with a veterinarian instead.",
} as const;

export const CONTACT_CHAT = {
  eyebrow: "Prefer to chat?",
  title: "Chat with KNO on WhatsApp",
  body: "Need help with your membership or order? We're here to assist.",
  cta: { label: "Chat on WhatsApp", href: "https://wa.me/919999999999" },
} as const;

export const CONTACT_FAQ = {
  title: "Visit our FAQs",
  body: "Find instant answers to the most common questions.",
  cta: { label: "Browse FAQs", href: "#" },
} as const;

/** Required under the Consumer Protection (E-Commerce) Rules, 2020. */
export const GRIEVANCE = {
  designation: "Grievance Officer",
  email: "grievance@kno.vet",
  acknowledgement: "48 hours",
  resolution: "30 days",
} as const;

export const CONTACT_SUBJECTS = [
  "Membership and billing",
  "Booking a consultation",
  "Health records and reminders",
  "Joining KNO as a veterinarian",
  "Privacy or data request",
  "Something else",
] as const;
