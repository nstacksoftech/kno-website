import type {
  CompanyDetails,
  FooterColumn,
  NavItem,
  SocialLink,
  StoreLink,
  TrustBadge,
} from "@/types";

export const TRUST_BADGES: readonly TrustBadge[] = [
  {
    title: "Regulated & Trusted",
    description:
      "We are committed to the highest standards of veterinary care.",
    caption: "Registered with Veterinary Council",
    captionWidth: 113,
    image: "/images/badge-vci.png",
    imageAlt: "Veterinary Council of India registration seal",
    imageWidth: 99,
    imageHeight: 99,
  },
  {
    title: "Secure & Safe",
    description: "Your pet’s data and payments are always protected.",
    caption: "ISO 27001 Certified",
    captionWidth: 73,
    image: "/images/badge-iso.png",
    imageAlt: "ISO 27001 certification seal",
    imageWidth: 81,
    imageHeight: 81,
  },
  {
    title: "Secure Payments",
    description: "Multiple safe payment options for your convenience.",
  },
] as const;

export const FOOTER_COLUMNS: readonly FooterColumn[] = [
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "How it works", href: "/#how-it-works" },
      { label: "Our Vets", href: "/#vets" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Help Centre", href: "/contact" },
      { label: "Contact Us", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of service", href: "/terms" },
    ],
  },
  {
    heading: "For Vet",
    links: [
      { label: "Join Our Network", href: "/contact" },
    ],
  },
] as const;

/**
 * Not rendered: the accounts are not live yet. Restore the block in
 * `site-footer.tsx` once the profiles exist.
 */
export const SOCIAL_LINKS: readonly SocialLink[] = [
  { label: "Instagram", href: "#", icon: "/logos/social-instagram.svg" },
  { label: "LinkedIn", href: "#", icon: "/logos/social-linkedin.svg" },
  { label: "Facebook", href: "#", icon: "/logos/social-facebook.png" },
  { label: "YouTube", href: "#", icon: "/logos/social-youtube.svg" },
] as const;

/**
 * Not rendered: the apps are not published yet. Restore the "Download App"
 * column in `site-footer.tsx` once the store listings are live.
 */
export const STORE_LINKS: readonly StoreLink[] = [
  { label: "App Store", href: "#", icon: "/logos/google-play.png" },
  { label: "Google Play", href: "#", icon: "/logos/app-store.svg" },
] as const;

/** Each entry in `addressLines` renders on its own line under the name. */
export const FOOTER_COMPANY: CompanyDetails = {
  name: "KNO VETERINARY CARE NETWORK PRIVATE LIMITED",
  addressLines: [
    "WeWork Oberoi Commerz II, Oberoi Garden City, Goregaon East, Mumbai- 400063, Maharashtra",
  ],
};
export const FOOTER_COPYRIGHT = "All rights to KNO VETERINARY CARE NETWORK.";
export const FOOTER_LEGAL: readonly NavItem[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Condition", href: "/terms" },
] as const;
