export interface Principle {
  title: string;
  body: string;
  icon: string;
}

export interface Milestone {
  value: string;
  label: string;
}

export const ABOUT_INTRO =
  "KNO is a veterinary care network built for Indian pet parents. We connect you to licensed veterinarians, keep your pet's medical history in one place, and tell you what is due next - so caring for an animal stops being a guessing game.";

export const ABOUT_PROBLEM = {
  heading: "Why we started KNO",
  paragraphs: [
    "Pet ownership in India has grown far faster than the infrastructure around it. A family brings home a puppy or kitten and immediately runs into the same wall: finding a veterinarian they can trust, remembering which vaccination is due, and holding on to a paper prescription long enough to show it at the next visit.",
    "Records live in WhatsApp threads and shoeboxes. Deworming slips by a month. A rash gets treated twice because nobody can tell whether the first course worked. None of this is negligence - it is what happens when care is delivered as a series of disconnected visits rather than a continuous relationship.",
    "KNO was built to close that gap. One membership, one profile per pet, and one timeline that every veterinarian you speak to can actually read.",
  ],
} as const;

export const ABOUT_PRINCIPLES: readonly Principle[] = [
  {
    title: "Qualified people, not chatbots",
    body: "Every consultation on KNO is with a registered veterinarian holding a BVSc, and in most cases an MVSc as well. We verify degrees and council registration before anyone joins the panel, and we publish the languages each vet speaks so you can be understood properly.",
    icon: "/icons/stethoscope-step.svg",
  },
  {
    title: "The record belongs to the pet",
    body: "Weights, vaccinations, prescriptions and consultation notes are written to a single health timeline. You can read it, export it, and share it with any clinic - including ones outside our network. We are not trying to lock your pet's history inside our app.",
    icon: "/icons/contract.svg",
  },
  {
    title: "Care that arrives before the problem",
    body: "Most of what harms a healthy animal is preventable and scheduled: vaccinations, deworming, flea and tick cover, annual checkups. KNO tracks those dates against your pet's species, age and last visit, and reminds you in time to act rather than after the fact.",
    icon: "/icons/av-timer.svg",
  },
  {
    title: "Priced so you use it early",
    body: "Charging per visit teaches people to wait until something is clearly wrong. A membership does the opposite - it makes the small question, asked early, effectively free. That is when veterinary advice is cheapest and most useful.",
    icon: "/icons/loyalty.svg",
  },
] as const;

export const ABOUT_HOW = {
  heading: "What a KNO membership actually covers",
  paragraphs: [
    "Membership gives you the platform: a profile for each pet, the full health timeline, vaccination and care reminders, digital prescriptions, and consultations booked at member pricing rather than walk-in rates.",
    "KNO Care is ₹199 a month and covers one pet. KNO Care+ is ₹499 a month, covers up to three pets, gives you priority access to veterinarians, and lowers the per-consultation price. Consultations themselves are charged separately - ₹599 on KNO Care and ₹499 on KNO Care+ - so you only pay for the advice you use.",
    "Consultations run over audio or video, at any hour. If a veterinarian believes your pet needs to be examined physically, they will say so and tell you what to ask for at the clinic.",
  ],
} as const;

export const ABOUT_LIMITS = {
  heading: "What KNO is not",
  body: "KNO is a telehealth and records service. It is not an emergency room, and it does not replace a physical examination where one is needed. Some conditions cannot be assessed responsibly over a screen - trauma, breathing difficulty, seizures, suspected poisoning, bloat, whelping complications, and collapse among them. In those situations, take your pet to the nearest emergency veterinary hospital immediately and contact us afterwards so the episode is recorded on the timeline.",
} as const;

/**
 * Every figure here is a commitment we can point at - an availability window, a
 * qualification bar, a retention period, a certification. Deliberately no user
 * or install counts, which age badly and cannot be checked by a reader.
 */
export const ABOUT_MILESTONES: readonly Milestone[] = [
  { value: "24/7", label: "Consultation availability" },
  { value: "BVSc & MVSc", label: "Minimum panel qualification" },
  { value: "3 years", label: "Clinical history retained per pet" },
  { value: "ISO 27001", label: "Certified information security" },
] as const;

export const ABOUT_TRUST = {
  heading: "How we handle trust",
  paragraphs: [
    "Veterinarians on KNO are registered with the veterinary council and are credentialed by us before they take a single consultation. Consultation notes are attributable - you can always see who advised you and when.",
    "Health records are sensitive, and we treat them that way. Our information security practices are certified to ISO 27001, payments run through regulated Indian gateways, and we never sell your data or your pet's medical history to anyone. What we collect, why, and how long we keep it is set out in full in our Privacy Policy.",
  ],
} as const;

export const ABOUT_CTA = {
  heading: "Start your pet's health journey",
  body: "Pick a plan, add your pet, and book a consultation whenever you need one. Cancel any time from your account.",
} as const;
