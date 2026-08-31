import type { LegalDocument } from "@/types/legal";

export const TERMS: LegalDocument = {
  title: "Terms & Conditions",
  intro:
    "These terms govern your use of the KNO website, app and veterinary consultation service. They set out what we provide, what a membership includes, how payment works, and the limits of advice delivered over a screen. Please read section 3 in particular - it explains what KNO cannot do.",
  effectiveDate: "31 August 2026",
  lastUpdated: "31 August 2026",
  sections: [
    {
      id: "acceptance",
      heading: "Acceptance",
      blocks: [
        {
          kind: "p",
          text: "By creating an account, buying a membership, or booking a consultation, you agree to these terms and to our Privacy Policy. If you do not agree, please do not use the service.",
        },
        {
          kind: "p",
          text: "The service is operated by KNO Veterinary Care Network Private Limited, Mumbai. “KNO”, “we” and “us” mean that company; “you” means the account holder.",
        },
      ],
    },
    {
      id: "eligibility",
      heading: "Who may use KNO",
      blocks: [
        {
          kind: "p",
          text: "You must be at least 18 years old, capable of entering a contract under the Indian Contract Act, 1872, and resident in India. You must be the owner of the animal you register, or have the owner's permission to seek care for it.",
        },
        {
          kind: "p",
          text: "One account belongs to one person. Do not share your login. You are responsible for everything done through your account.",
        },
      ],
    },
    {
      id: "nature-of-service",
      heading: "What KNO is, and is not",
      blocks: [
        {
          kind: "p",
          text: "KNO is a telehealth and health-records platform. It connects you to registered veterinarians for consultations by audio or video, and keeps your pet's medical history in one place. The veterinarian exercises their own clinical judgement; KNO does not practise veterinary medicine and does not direct the advice you receive.",
        },
        {
          kind: "p",
          text: "KNO is not an emergency service. Remote consultation cannot substitute for physical examination, diagnostic imaging, laboratory testing or surgery. Do not use KNO in an emergency. Take your pet directly to the nearest 24-hour veterinary hospital if it shows any of the following:",
        },
        {
          kind: "list",
          items: [
            "Trauma of any kind, including road accidents and falls.",
            "Difficulty breathing, choking, or blue or pale gums.",
            "Seizures, collapse, or loss of consciousness.",
            "Suspected poisoning, or ingestion of a foreign object.",
            "A distended, hard or painful abdomen, or unproductive retching.",
            "Inability to urinate, or straining without result.",
            "Continuous bleeding, or complications during whelping or queening.",
          ],
        },
        {
          kind: "p",
          text: "If a KNO veterinarian believes your pet needs to be examined in person, they will tell you so and explain what to ask for at the clinic. Following that advice is your responsibility.",
        },
      ],
    },
    {
      id: "accounts",
      heading: "Accounts and pet profiles",
      blocks: [
        {
          kind: "p",
          text: "You must give accurate information about yourself and your animal, and keep it current. Age, weight, breed, existing conditions and current medication all change clinical advice - withholding or misstating them can lead to harm, and we cannot be responsible for advice given on wrong information.",
        },
        {
          kind: "p",
          text: "Keep your password confidential and tell us at once if you think someone else has used your account.",
        },
      ],
    },
    {
      id: "memberships",
      heading: "Memberships and billing",
      blocks: [
        {
          kind: "table",
          caption: "Membership plans",
          head: ["Plan", "Price", "Pets covered", "Consultation price"],
          rows: [
            ["KNO Care", "₹199 per month", "1", "₹599 per consultation"],
            ["KNO Care+", "₹499 per month", "Up to 3", "₹499 per consultation"],
          ],
        },
        {
          kind: "p",
          text: "Prices are in Indian Rupees and include applicable taxes unless stated otherwise at checkout. Membership renews automatically each month on the date you first subscribed, using the payment instrument you registered, until you cancel.",
        },
        {
          kind: "p",
          text: "You can cancel at any time from your account. Cancellation stops the next renewal; your membership benefits continue until the end of the period you have already paid for. We do not charge a cancellation fee.",
        },
        {
          kind: "p",
          text: "If a renewal payment fails, we will retry and notify you. If it remains unpaid, membership benefits pause until payment succeeds. Your pet's records stay intact and exportable throughout.",
        },
        {
          kind: "p",
          text: "We may change prices with at least 30 days' notice by email. A price change never applies to a period you have already paid for, and you may cancel before it takes effect.",
        },
      ],
    },
    {
      id: "consultations",
      heading: "Consultations",
      blocks: [
        {
          kind: "p",
          text: "Consultations are charged separately from membership at the rates in section 5, and are payable when you book. Veterinary availability is offered around the clock, but a specific veterinarian, time slot or language cannot be guaranteed.",
        },
        {
          kind: "p",
          text: "You may cancel or reschedule without charge up to one hour before the appointment. Cancellations inside that window, and appointments you do not attend, are charged in full because the slot is held for you.",
        },
        {
          kind: "p",
          text: "If a consultation fails for a technical reason on our side, or the veterinarian does not appear, we will rebook it at no cost or refund the fee, whichever you prefer.",
        },
        {
          kind: "p",
          text: "Do not record a consultation without the veterinarian's consent. The written note is added to your pet's timeline and is yours to keep.",
        },
      ],
    },
    {
      id: "prescriptions",
      heading: "Prescriptions and medicines",
      blocks: [
        {
          kind: "p",
          text: "A veterinarian may issue a prescription where, in their professional judgement, it is appropriate to do so from a remote consultation. They may also decline, and will explain why. A prescription is never guaranteed by paying a consultation fee.",
        },
        {
          kind: "p",
          text: "Certain medicines cannot responsibly or lawfully be prescribed without physical examination. KNO does not sell or dispense medicines, and we do not receive commission from any pharmacy. Fill prescriptions at a licensed pharmacy and follow the dosage exactly.",
        },
      ],
    },
    {
      id: "records",
      heading: "Health records",
      blocks: [
        {
          kind: "p",
          text: "The record of your pet's care is yours. You can view and export the full health timeline as a PDF at any time, including after you cancel, and share it with any clinic inside or outside our network.",
        },
        {
          kind: "p",
          text: "Consultation notes written by a veterinarian are their clinical record and cannot be edited after the fact. If you believe a note contains a factual error, tell us and we will add a correction alongside it rather than rewrite history.",
        },
      ],
    },
    {
      id: "acceptable-use",
      heading: "Acceptable use",
      blocks: [
        {
          kind: "p",
          text: "You agree not to:",
        },
        {
          kind: "list",
          items: [
            "Use KNO to seek advice for an animal you do not own or care for.",
            "Abuse, threaten or harass a veterinarian or a member of our team.",
            "Upload anything unlawful, or any file you do not have the right to share.",
            "Attempt to access another user's account, records or consultations.",
            "Scrape, reverse-engineer, or interfere with the operation of the platform.",
            "Resell or commercially exploit consultations or content from the service.",
          ],
        },
        {
          kind: "p",
          text: "We may suspend or close an account that breaks these rules, and will tell you why.",
        },
      ],
    },
    {
      id: "third-parties",
      heading: "Third-party services",
      blocks: [
        {
          kind: "p",
          text: "Payments are processed by regulated Indian payment gateways under their own terms. The platform also relies on third-party hosting and messaging providers. We choose these carefully, but we are not responsible for their independent acts or outages beyond our control.",
        },
      ],
    },
    {
      id: "ip",
      heading: "Intellectual property",
      blocks: [
        {
          kind: "p",
          text: "The KNO name, logo, software, design and written content belong to us. You may use them only as needed to use the service. Content you upload - photographs, reports, notes about your pet - remains yours; you grant us the licence needed to store it, display it to you, and show it to the veterinarian treating your animal.",
        },
      ],
    },
    {
      id: "liability",
      heading: "Disclaimers and liability",
      blocks: [
        {
          kind: "p",
          text: "Veterinary advice given through KNO is based on the information you provide and on what can be observed remotely. It is guidance, not a diagnosis made after physical examination. Outcomes in medicine cannot be guaranteed, and we do not guarantee any particular result.",
        },
        {
          kind: "p",
          text: "We provide the platform with reasonable skill and care, but we do not warrant that it will be uninterrupted or error-free.",
        },
        {
          kind: "p",
          text: "To the extent Indian law permits, our total liability to you for any claim arising out of the service is limited to the amount you paid us in the twelve months before the claim arose. Nothing in these terms limits liability for death or personal injury caused by negligence, for fraud, or for anything else that cannot lawfully be limited.",
        },
      ],
    },
    {
      id: "indemnity",
      heading: "Indemnity",
      blocks: [
        {
          kind: "p",
          text: "You agree to indemnify KNO against claims, losses and reasonable legal costs arising from your breach of these terms, your misuse of the service, or information you gave us that was materially false.",
        },
      ],
    },
    {
      id: "termination",
      heading: "Suspension and closure",
      blocks: [
        {
          kind: "p",
          text: "You may close your account at any time. We may suspend or close an account for breach of these terms, for non-payment, or where we are required to by law. Except in cases of serious misuse, we will give you notice and a chance to put things right.",
        },
        {
          kind: "p",
          text: "On closure you keep the right to export your pet's records, and we retain what we must under the retention periods in the Privacy Policy.",
        },
      ],
    },
    {
      id: "governing-law",
      heading: "Governing law and disputes",
      blocks: [
        {
          kind: "p",
          text: "These terms are governed by the laws of India. The courts at Mumbai, Maharashtra have exclusive jurisdiction, without prejudice to any right you have to approach a consumer forum where you live.",
        },
        {
          kind: "p",
          text: "Please raise any dispute with us first. Most are resolved quickly once we understand what happened.",
        },
      ],
    },
    {
      id: "grievance",
      heading: "Grievance redressal",
      blocks: [
        {
          kind: "p",
          text: "In line with the Consumer Protection (E-Commerce) Rules, 2020, complaints may be sent to our Grievance Officer at grievance@kno.vet. We acknowledge every complaint within 48 hours and aim to resolve it within 30 days.",
        },
        {
          kind: "p",
          text: "Postal address: KNO Veterinary Care Network Private Limited, WeWork Oberoi Commerz II, Oberoi Garden City, Goregaon East, Mumbai - 400063, Maharashtra, India.",
        },
      ],
    },
    {
      id: "changes-terms",
      heading: "Changes to these terms",
      blocks: [
        {
          kind: "p",
          text: "We may update these terms as the service develops or the law changes. The effective date above always reflects the current version. Material changes are notified by email or in the app at least 30 days before they take effect, and you may cancel before then if you do not accept them.",
        },
      ],
    },
  ],
};
