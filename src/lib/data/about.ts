export interface AboutFeature {
  title: string;
  icon: string;
}

export interface AboutBelief {
  title: string;
  body: string;
  icon: string;
}

export interface AboutFounder {
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  /** Long-form profile shown in the click-through popup. */
  bio: {
    /** Opening single line, e.g. "For Sanaya, KNO began with something personal." */
    intro: string;
    paragraphs: readonly string[];
    /** Brand sign-off line under the story. */
    closing: string;
  };
}

export interface AboutTrustPoint {
  title: string;
  body: string;
  icon: string;
}

/** Hero band — copy sits left of the family photograph. */
export const ABOUT_HERO = {
  headline: "We built KNO because",
  headlineAccent: "We're pet parents too.",
  eyebrow: "There are moments every pet parent knows -",
  body: "when they haven't eaten all day, when something doesn't look right, or when you can't remember their last vaccination. KNO was built to make those moments feel a little less uncertain.",
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
  image: "/images/hero-family.png",
  imageAlt: "A parent and child sitting outdoors with their dog",
} as const;

/** "Why KNO?" — one row of six connected capabilities. */
export const ABOUT_WHY = {
  heading: "Why KNO?",
  lead: "One pet. One health journey.",
  sub: "KNO brings the people, care and information behind your pet's health together in one place.",
  footnote:
    "So, whether you have a question today or need to look back at their health years from now, their journey stays connected.",
  features: [
    { title: "Veterinarians", icon: "/icons/stethoscope-step.svg" },
    { title: "Health records", icon: "/icons/folder.svg" },
    { title: "Prescriptions", icon: "/icons/pill.svg" },
    { title: "Preventive care", icon: "/icons/bloodtype.svg" },
    { title: "Reminders", icon: "/icons/calendar-clock.svg" },
    { title: "Online vet pharmacy", icon: "/icons/hero-records.svg" },
  ] satisfies AboutFeature[],
} as const;

/** "What we believe" — four value cards on the cream panel. */
export const ABOUT_BELIEFS = {
  heading: "What we believe",
  cards: [
    {
      title: "Care should start early.",
      body: "Getting trusted guidance shouldn't have to wait until something becomes serious.",
      icon: "/icons/cardiology.svg",
    },
    {
      title: "Your pet's history should follow them",
      body: "Health records, consultations and prescriptions belong to one continuous journey.",
      icon: "/icons/contract.svg",
    },
    {
      title: "Good care should be easy to access.",
      body: "Connect with qualified veterinarians when you need guidance",
      icon: "/icons/pet_supplies.svg",
    },
    {
      title: "Pet parenting should feel more confident.",
      body: "Less searching. Less remembering. Less guessing. That's all you need to KNO.",
      icon: "/icons/loyalty.svg",
    },
  ] satisfies AboutBelief[],
} as const;

/** "Meet the people behind KNO" — the three co-founders. */
export const ABOUT_FOUNDERS = {
  heading: "Meet the people behind KNO",
  lead: "Three people. Three stories. One reason for building KNO.",
  sub: "We started KNO with a simple belief: pet parents deserve better access, better information and greater confidence when making decisions about the animals they love.",
  people: [
    {
      name: "Sanaya",
      role: "Co-Founder",
      image: "/images/Sanaya.png",
      imageAlt: "Sanaya, Co-Founder of KNO",
      bio: {
        intro: "For Sanaya, KNO began with something personal.",
        paragraphs: [
          "Raised in America and a lifelong pet lover, Sanaya visited India and saw a rapidly growing community of passionate pet parents — but also a veterinary-care ecosystem that often felt fragmented. Veterinary consultations, health records, prescriptions, preventive care, medications and follow-ups frequently lived in different places, leaving pet parents to connect the dots themselves. She saw an opportunity to make that experience simpler, more accessible and more connected.",
          "An NYU graduate, Sanaya brings experience from building and operating pet businesses spanning pharma, mobile grooming and pet care across more than 25 countries. That experience inspired a simple idea: what if every pet parent in India could have one trusted place for their pet's health journey?",
          "That idea became KNO — an affordable veterinary and digital health platform designed to connect veterinarians, health records, prescriptions, preventive care, reminders and ongoing support around every pet — because when it comes to their pet's health, every pet parent in India deserves to KNO.",
        ],
        closing: "One pet. One health journey.",
      },
    },
    {
      name: "Anuj",
      role: "Co-Founder",
      image: "/images/Anuj.jpeg",
      imageAlt: "Anuj, Co-Founder of KNO",
      bio: {
        intro: "For Anuj, KNO began with a story he couldn't forget.",
        paragraphs: [
          "Coming from four generations of jewelers, Anuj grew up with an appreciation for craftsmanship, precision and trust. He studied International Business in London before earning his Graduate Gemologist qualification from GIA in New York. Alongside that journey has always been a deep love for animals.",
          "His perspective changed after hearing about a pet parent who lost her dog in the middle of the night because she couldn't reach veterinary care when she needed it most. What stayed with Anuj was the helplessness of knowing that care may have existed — but wasn't within reach when it mattered.",
          "That experience became one of the reasons he co-founded KNO — built on the same principles that have shaped his life: patience, care and attention to detail.",
          "Because when it comes to their pet's health, every pet parent deserves to KNO.",
        ],
        closing: "One pet. One health journey.",
      },
    },
    {
      name: "Vishaka",
      role: "Clinical Lead",
      image: "/images/Vishaka.jpg",
      imageAlt: "Vishaka, Clinical Lead of KNO",
      bio: {
        intro: "For Vishaka, KNO is about making trusted veterinary care easier to reach.",
        paragraphs: [
          "Trained at the Royal Veterinary College in London, Vishaka's journey as a veterinarian has given her firsthand insight into the challenges both pet parents and veterinary professionals face when trying to access timely, reliable care. As India's community of pet parents continues to grow, she saw an opportunity to use technology to bring pet parents and qualified veterinarians closer together — regardless of where they live or how difficult it may be to find the right professional.",
          "Her vision is to help build a more connected veterinary ecosystem: one where pet parents can access trusted professional guidance when they need it, while veterinarians are empowered to reach and care for more pets and their families.",
          "That shared belief became part of the foundation of KNO — combining veterinary expertise with technology to make quality pet healthcare more accessible, approachable and connected across India.",
          "Because when it comes to their pet's health, every pet parent deserves to KNO.",
        ],
        closing: "One pet. One health journey.",
      },
    },
  ] satisfies AboutFounder[],
} as const;

/** "Built with trust at the center." — four assurances plus CTAs. */
export const ABOUT_TRUST = {
  heading: "Built with trust at the center.",
  points: [
    {
      title: "Qualified Veterinarians",
      body: "Every consultation is with a registered veterinary professional",
      icon: "/icons/stethoscope-step.svg",
    },
    {
      title: "Secure Health Records",
      body: "Your pet's healthcare records stays connected and protected.",
      icon: "/icons/folder.svg",
    },
    {
      title: "Continuity of Care",
      body: "Consultation, prescriptions, vaccinations and reminders form one health journey.",
      icon: "/icons/cardiology.svg",
    },
    {
      title: "Care Beyond the Consultation",
      body: "KNO Pharmacy and ongoing health management keep care moving forward.",
      icon: "/icons/hero-india.svg",
    },
  ] satisfies AboutTrustPoint[],
  primaryCta: { label: "Start your pet's health journey", href: "/#pricing" },
  secondaryCta: { label: "One pet. One health journey", href: "/#features" },
} as const;
