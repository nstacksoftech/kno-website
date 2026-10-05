export type MediaRef = {
  url?: string | null;
  alt?: string | null;
} | null;

export type SeoMeta = {
  title?: string | null;
  description?: string | null;
  canonical?: string | null;
  ogTitle?: string | null;
  ogDescription?: string | null;
  ogImage?: MediaRef;
  ogType?: "website" | "article" | "product" | "profile" | null;
  ogUrl?: string | null;
  keywords?: { keyword: string; id?: string | null }[] | null;
  twitterCard?: "summary" | "summary_large_image" | "app" | "player" | null;
  twitterSite?: string | null;
  twitterTitle?: string | null;
  twitterDescription?: string | null;
  twitterImage?: MediaRef;
  schema?: unknown;
};

export type HomePageData = {
  hero: {
    heading: string;
    highlight: string;
    supportingLine: string;
    description: string;
    chip: string;
    highlights: {
      icon: MediaRef;
      title: string;
      description: string | null;
    }[] | null;
    primaryCta: { label: string; url: string; icon: MediaRef };
    secondaryCta: { label: string; url: string };
    image: MediaRef;
    badgeImage: MediaRef;
    badge: string;
    proofTitle: string;
    proofStat: string;
    avatars: MediaRef[] | null;
  };
  howItWorks: {
    heading: string;
    steps: {
      icon: MediaRef;
      title: string;
      description: string;
    }[] | null;
  };
  painPoints: {
    heading: string;
    points: { icon: MediaRef; label: string }[] | null;
    resolution: string;
  };
  features: {
    heading: string;
    image: MediaRef;
    items: {
      icon: MediaRef;
      title: string;
      description: string;
    }[] | null;
  };
  pricing: {
    heading: string;
    plans: {
      id: string;
      name: string;
      tagline: string;
      price: number;
      currency: string;
      interval: string;
      featured?: boolean | null;
      includesLabel: string;
      features: { text: string }[] | null;
      ctaLabel: string;
      ctaUrl: string;
    }[] | null;
    image: MediaRef;
    caption?: string | null;
  };
  veterinarians: {
    heading: string;
    vets: {
      id: string;
      name: string;
      photo: MediaRef;
      initials?: string | null;
      speciality: string;
      qualification: string;
      experience: string;
      languages: string;
      verifiedLabel?: string | null;
    }[] | null;
    viewAllLabel?: string | null;
    viewAllUrl?: string | null;
  };
  showTrustedBanner?: boolean | null;
  meta?: SeoMeta | null;
};

export type TrustData = {
  items: {
    title: string;
    description: string;
    note?: string | null;
    image: MediaRef;
  }[] | null;
};

export type HomePageResponse = {
  home: HomePageData | null;
  trust: TrustData | null;
};

export type HeaderLogo = {
  url: string | null;
  alt: string | null;
};

export type HeaderLink = {
  label: string;
  url: string;
};

export type HeaderData = {
  logo: HeaderLogo | null;
  navLinks: HeaderLink[] | null;
  cta: HeaderLink | null;
};

export type FooterData = {
  logo: MediaRef;
  companyName: string;
  companyAddress: string;
  socialLinks:
    | {
        platform: string;
        url: string;
        icon: MediaRef;
      }[]
    | null;
  columns:
    | {
        title: string;
        links: { label: string; url: string }[] | null;
      }[]
    | null;
  copyright: string;
  legalLinks: { label: string; url: string }[] | null;
};

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterSocialLink = {
  label: string;
  href: string;
  icon: CmsImage | null;
};

export type FooterColumnView = {
  heading: string;
  links: FooterLink[];
};

export type FooterView = {
  logo: CmsImage | null;
  companyName: string;
  addressLines: string[];
  socialLinks: FooterSocialLink[];
  columns: FooterColumnView[];
  copyright: string;
  legalLinks: FooterLink[];
};

export type CmsImage = {
  src: string;
  alt: string;
};

export type HomeCta = {
  label: string;
  href: string;
  icon: CmsImage | null;
};

export type HomeHighlight = {
  title: string;
  description: string;
  icon: CmsImage | null;
};

export type HomeStep = {
  number: number;
  title: string;
  description: string;
  icon: CmsImage | null;
};

export type HomePainPoint = {
  label: string;
  icon: CmsImage | null;
};

export type HomeFeature = {
  title: string;
  description: string;
  icon: CmsImage | null;
};

export type HomePlan = {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  includes: string[];
  includesLabel: string;
  cta: string;
  href: string;
  featured: boolean;
};

export type HomeVet = {
  id: string;
  name: string;
  speciality: string;
  qualification: string;
  experience: string;
  languages: string[];
  photo: string | null;
  initials: string;
  verified: boolean;
};

export type HomeTrustBadge = {
  title: string;
  description: string;
  caption: string;
  image: CmsImage | null;
};

export type HomeView = {
  hero: {
    heading: string;
    highlight: string;
    supportingLine: string;
    description: string;
    chip: string;
    image: CmsImage | null;
    badge: string;
    badgeImage: CmsImage | null;
    highlights: HomeHighlight[];
    primaryCta: HomeCta;
    secondaryCta: Omit<HomeCta, "icon">;
    proofTitle: string;
    proofStat: string;
    avatars: CmsImage[];
  };
  howItWorks: {
    heading: string;
    steps: HomeStep[];
  };
  painPoints: {
    heading: string;
    points: HomePainPoint[];
    resolution: string;
  };
  features: {
    heading: string;
    image: CmsImage | null;
    items: HomeFeature[];
  };
  pricing: {
    heading: string;
    plans: HomePlan[];
    image: CmsImage | null;
    caption: string;
  };
  veterinarians: {
    heading: string;
    vets: HomeVet[];
    viewAllLabel: string;
    viewAllUrl: string;
  };
  trustBadges: HomeTrustBadge[];
};

export type AboutCta = {
  label: string;
  href: string;
  icon: CmsImage | null;
};

export type AboutIconItem = {
  label: string;
  icon: CmsImage | null;
};

export type AboutCard = {
  title: string;
  description: string;
  icon: CmsImage | null;
};

export type AboutPerson = {
  name: string;
  role: string;
  image: CmsImage | null;
  bio: string;
};

export type AboutPageData = {
  hero: {
    heading: string;
    highlight: string;
    supportingLine: string;
    description: string;
    chipIcon: MediaRef;
    chip: string;
    primaryCta: { label: string; url: string; icon: MediaRef };
    secondaryCta: { label: string; url: string; icon: MediaRef };
    image: MediaRef;
  };
  whyKno: {
    heading: string;
    supportingLine: string;
    description: string;
    items: { icon: MediaRef; label: string }[] | null;
    resolution: string;
  };
  beliefs: {
    heading: string;
    items: { icon: MediaRef; title: string; description: string }[] | null;
  };
  team: {
    heading: string;
    people:
      | {
          image: MediaRef;
          name: string;
          role: string;
          bio: string;
        }[]
      | null;
    supportingLine: string;
    description: string;
  };
  commitments: {
    heading: string;
    items: { icon: MediaRef; title: string; description: string }[] | null;
    primaryCta: { label: string; url: string; icon: MediaRef };
    secondaryCta: { label: string; url: string; icon: MediaRef };
  };
  showTrustedBanner?: boolean | null;
  meta?: SeoMeta | null;
};

export type AboutPageResponse = {
  about: AboutPageData | null;
  trust: TrustData | null;
};

export type ContactPageData = {
  hero: {
    eyebrow: string;
    heading: string;
    description: string;
    hours: string;
    image: MediaRef;
    actions:
      | {
          icon: MediaRef;
          title: string;
          description: string;
          url?: string | null;
          id?: string | null;
        }[]
      | null;
  };
  emergency: {
    icon: MediaRef;
    heading: string;
    description: string;
    note: string;
  };
  helpTopics: {
    heading: string;
    description: string;
    items:
      | {
          icon: MediaRef;
          title: string;
          description: string;
          url: string;
          id?: string | null;
        }[]
      | null;
  };
  channels: {
    heading: string;
    description: string;
    items:
      | {
          icon: MediaRef;
          title: string;
          description: string;
          email: string;
          responseTime: string;
          id?: string | null;
        }[]
      | null;
  };
  message: {
    heading: string;
    description: string;
    disclaimer: string;
    submitLabel: string;
    whatsapp: {
      icon: MediaRef;
      eyebrow: string;
      heading: string;
      description: string;
    };
    faqs: {
      icon: MediaRef;
      heading: string;
      description: string;
    };
  };
  showTrustedBanner?: boolean | null;
  meta?: SeoMeta | null;
};

export type ContactPageResponse = {
  contact: ContactPageData | null;
  trust: TrustData | null;
};

export type ContactAction = {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: CmsImage | null;
};

export type ContactTopic = {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: CmsImage | null;
};

export type ContactChannelView = {
  id: string;
  title: string;
  description: string;
  email: string;
  responseTime: string;
  icon: CmsImage | null;
};

export type ContactSideCard = {
  eyebrow: string;
  heading: string;
  description: string;
  icon: CmsImage | null;
};

export type ContactView = {
  hero: {
    eyebrow: string;
    heading: string;
    description: string;
    hours: string;
    image: CmsImage | null;
    actions: ContactAction[];
  };
  emergency: {
    heading: string;
    description: string;
    note: string;
    icon: CmsImage | null;
  };
  helpTopics: {
    heading: string;
    description: string;
    items: ContactTopic[];
  };
  channels: {
    heading: string;
    description: string;
    items: ContactChannelView[];
  };
  message: {
    heading: string;
    description: string;
    disclaimer: string;
    submitLabel: string;
    whatsapp: ContactSideCard;
    faqs: ContactSideCard;
  };
  trustBadges: HomeTrustBadge[];
};

export type LegalBlockData = {
  type: "paragraph" | "list" | "table";
  text?: string | null;
  items?: { text: string; id?: string | null }[] | null;
  caption?: string | null;
  columns?: { label: string; id?: string | null }[] | null;
  rows?:
    | {
        cells?: { text: string; id?: string | null }[] | null;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
};

export type LegalPageData = {
  eyebrow: string;
  heading: string;
  description: string;
  effectiveDate: string;
  lastUpdated: string;
  tocHeading: string;
  sections?:
    | {
        title: string;
        anchor?: string | null;
        blocks?: LegalBlockData[] | null;
        id?: string | null;
      }[]
    | null;
  meta?: SeoMeta | null;
};

export type DeleteAccountPageData = {
  hero: {
    eyebrow: string;
    heading: string;
    description: string;
    note: string;
    steps?: { label: string; id?: string | null }[] | null;
  };
  form: {
    heading: string;
    description: string;
    reasons?: { text: string; id?: string | null }[] | null;
    confirmationText: string;
  };
  process: {
    heading: string;
    items?:
      | {
          title: string;
          description: string;
          id?: string | null;
        }[]
      | null;
  };
  deleted: {
    heading: string;
    items?: { text: string; id?: string | null }[] | null;
  };
  retained: {
    heading: string;
    description: string;
    items?:
      | {
          detail: string;
          id?: string | null;
        }[]
      | null;
    button: { label: string; href: string };
  };
  help: {
    heading: string;
    description: string;
    email: string;
  };
  showTrustedBanner?: boolean | null;
  meta?: SeoMeta | null;
};

export type DeleteAccountPageResponse = {
  deleteAccount: DeleteAccountPageData | null;
  trust: TrustData | null;
};

export type DeleteAccountStepView = {
  id: "details" | "verify" | "done";
  label: string;
};

export type DeleteAccountView = {
  hero: {
    eyebrow: string;
    heading: string;
    description: string;
    note: string;
    steps: DeleteAccountStepView[];
  };
  form: {
    heading: string;
    description: string;
    reasonPlaceholder: string;
    reasons: string[];
    confirmationText: string;
  };
  process: {
    heading: string;
    items: { id: string; title: string; description: string }[];
  };
  deleted: {
    heading: string;
    items: { id: string; text: string }[];
  };
  retained: {
    heading: string;
    description: string;
    items: { id: string; text: string }[];
    button: { label: string; href: string };
  };
  help: {
    heading: string;
    description: string;
    email: string;
  };
  trustBadges: HomeTrustBadge[];
};

export type AboutView = {
  hero: {
    heading: string;
    highlight: string;
    supportingLine: string;
    description: string;
    chip: string;
    chipIcon: CmsImage | null;
    image: CmsImage | null;
    primaryCta: AboutCta;
    secondaryCta: AboutCta;
  };
  whyKno: {
    heading: string;
    supportingLine: string;
    description: string;
    items: AboutIconItem[];
    resolution: string;
  };
  beliefs: {
    heading: string;
    items: AboutCard[];
  };
  team: {
    heading: string;
    people: AboutPerson[];
    supportingLine: string;
    description: string;
  };
  commitments: {
    heading: string;
    items: AboutCard[];
    primaryCta: AboutCta;
    secondaryCta: AboutCta;
  };
  trustBadges: HomeTrustBadge[];
};

