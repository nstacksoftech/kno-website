export interface NavItem {
  label: string;
  href: string;
}

export interface TrustPoint {
  /** Emphasised first line, rendered bold. */
  lead: string;
  /** Second line, rendered regular. */
  detail: string;
  icon: string;
  iconAlt: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
  /** Text-column width in px, taken from the Figma frame (200 / 214 / 268). */
  textWidth: number;
}

export interface PainPoint {
  label: string;
  icon: string;
  iconAlt: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
}

export interface Plan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  includes: readonly string[];
  cta: string;
  featured: boolean;
}

export interface Vet {
  id: string;
  name: string;
  qualification: string;
  experience: string;
  languages: readonly string[];
  /** Omitted when we have no portrait; the card renders a monogram instead. */
  photo?: string;
  initials: string;
  verified: boolean;
}

export interface TrustBadge {
  title: string;
  description: string;
  caption?: string;
  /** Caption column width in px, from the Figma frame. */
  captionWidth?: number;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
}

export interface FooterColumn {
  heading: string;
  links: readonly NavItem[];
}

export interface CompanyDetails {
  /** Registered company name - always rendered on its own line. */
  name: string;
  /** Postal address; each entry renders on a new line beneath the name. */
  addressLines: readonly string[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface StoreLink {
  label: string;
  href: string;
  icon: string;
}
