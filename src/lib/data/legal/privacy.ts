import type { LegalDocument } from "@/types/legal";

export const PRIVACY_POLICY: LegalDocument = {
  title: "Privacy Policy",
  intro:
    "This policy explains what KNO collects when you use our website and app, why we collect it, who we share it with, and the choices you have. It covers your personal information and your pet's medical records, which we treat with the same care.",
  effectiveDate: "16 October 2026",
  lastUpdated: "16 October 2026",
  sections: [
    {
      id: "who-we-are",
      heading: "Who we are",
      blocks: [
        {
          kind: "p",
          text: "KNO is operated by KNO Veterinary Care Network Private Limited, a company registered in India with its office at Oberoi Garden City, Goregaon East, Mumbai - 400063, Maharashtra. In this policy, “KNO”, “we” and “us” mean that company.",
        },
        {
          kind: "p",
          text: "For the purposes of the Digital Personal Data Protection Act, 2023, KNO is the Data Fiduciary for the personal data described below. You are the Data Principal. Because a pet cannot hold rights of its own, records about your animal are held as part of your account and are governed by this policy.",
        },
      ],
    },
    {
      id: "what-we-collect",
      heading: "What we collect",
      blocks: [
        {
          kind: "p",
          text: "We collect only what the service needs to function. That falls into five groups.",
        },
        {
          kind: "table",
          caption: "Categories of data KNO collects",
          head: ["Category", "Examples", "Where it comes from"],
          rows: [
            [
              "Account data",
              "Name, email address, mobile number, city, password hash",
              "You, at sign-up",
            ],
            [
              "Pet data",
              "Species, breed, name, sex, date of birth, weight history, sterilisation status",
              "You, and veterinarians during consultations",
            ],
            [
              "Health records",
              "Consultation notes, prescriptions, vaccination and deworming dates, uploaded reports and images",
              "You, and the veterinarian who treats your pet",
            ],
            [
              "Transaction data",
              "Membership tier, renewal dates, consultation invoices, payment status and last four digits of the instrument",
              "You and our payment gateway",
            ],
            [
              "Technical data",
              "Device type, operating system, app version, IP address, crash reports, pages viewed",
              "Collected automatically as you use the service",
            ],
          ],
        },
        {
          kind: "p",
          text: "We do not collect Aadhaar, PAN or other government identifiers from pet parents, and we do not ask for your full card or bank details - those are entered directly with our payment gateway and never reach our servers.",
        },
      ],
    },
    {
      id: "why-we-collect",
      heading: "Why we collect it",
      blocks: [
        {
          kind: "list",
          items: [
            "To create and run your account, and to let you add pets to it.",
            "To let a veterinarian see your pet's history before and during a consultation, so their advice is informed rather than generic.",
            "To build and display the health timeline, and to calculate when vaccinations, deworming and parasite cover fall due.",
            "To send care reminders and appointment confirmations you have asked for.",
            "To take payment for memberships and consultations, and to issue invoices.",
            "To keep the service secure, investigate misuse, and fix faults reported through crash logs.",
            "To meet legal and record-keeping obligations, including those that apply to veterinary prescriptions.",
          ],
        },
      ],
    },
    {
      id: "lawful-basis",
      heading: "Consent and lawful basis",
      blocks: [
        {
          kind: "p",
          text: "We process your data on the basis of the consent you give when you create an account and accept this policy, and for the certain legitimate uses permitted under the Digital Personal Data Protection Act, 2023 - principally to provide a service you have asked for and to comply with law.",
        },
        {
          kind: "p",
          text: "Consent for marketing is separate and optional. Declining it does not affect your membership or your ability to book a consultation. You may withdraw any consent at any time, in your account settings or by writing to support@kno.vet. Withdrawal is not retrospective: it does not undo processing already carried out lawfully.",
        },
      ],
    },
    {
      id: "sharing",
      heading: "Who we share data with",
      blocks: [
        {
          kind: "p",
          text: "We do not sell personal data or pet health records, and we do not share them for third-party advertising. We share the minimum personal data necessary with the following categories of recipients:",
        },
        {
          kind: "list",
          items: [
            "Veterinarians on the KNO panel: They see the profile and medical history of the specific pet they are consulting on, and nothing else, strictly for the purpose of delivering clinical care.",
            "Payment gateways and financial intermediaries: To authorize, process, and settle your payments in compliance with RBI guidelines. They receive basic transaction identifiers (name, email address, transaction amount).",
            "Cloud hosting and infrastructure providers: Who store and host the platform under data-processing contracts and strictly on our instructions.",
            "Communication providers: That deliver transactional email, SMS, and push notifications requested by you.",
            "Law enforcement agencies, courts, and statutory authorities: Where we are legally obligated to disclose information under applicable Indian law, summons, court orders, or for the prevention, detection, investigation, or prosecution of any cyber incident or criminal offence.",
            "Professional advisers and auditors: Where reasonably required for financial reporting, auditing, or legal advice regarding dispute resolution.",
            "An acquirer or corporate successor: In the event of a merger, acquisition, or restructuring. You will be notified before your data is transferred, and this policy will continue to apply until formally replaced.",
          ],
        },
        {
          kind: "p",
          text: "Every third-party service provider acting as a Data Processor on our behalf is bound by a contract to process data solely for the designated purpose, maintain equivalent technical and organizational security safeguards, and erase the data upon completion of the service. KNO remains responsible for ensuring the processing of your data complies with the Digital Personal Data Protection Act, 2023.",
        },
      ],
    },
    {
      id: "retention",
      heading: "How long we keep it",
      blocks: [
        {
          kind: "table",
          caption: "Retention periods by category",
          head: ["Data", "Kept for"],
          rows: [
            ["Account data", "While your account is active, then 90 days after closure"],
            [
              "Pet health records and prescriptions",
              "Three years from the last consultation, so that clinical history remains available to you and to treating vets",
            ],
            [
              "Invoices and transaction records",
              "Eight years, as required by Indian accounting and tax law",
            ],
            ["Support correspondence", "Two years from the last message in the thread"],
            ["Technical and crash logs", "Twelve months"],
          ],
        },
        {
          kind: "p",
          text: "When a retention period ends we delete the data or irreversibly anonymise it. Anonymised, aggregate figures - for example, how many consultations concerned skin conditions in a given month - may be kept indefinitely, because they can no longer identify you or your pet.",
        },
      ],
    },
    {
      id: "security",
      heading: "How we protect it",
      blocks: [
        {
          kind: "p",
          text: "Our information security management is certified to ISO/IEC 27001. In practice that means data is encrypted in transit and at rest, access to health records is restricted to the veterinarian consulting on that pet and to a small number of authorised staff, administrative access is logged, and we review those controls on a defined schedule.",
        },
        {
          kind: "p",
          text: "No system is perfectly secure. If a breach occurs that is likely to affect you, we will notify you and the Data Protection Board of India as required by law, and tell you plainly what happened and what to do about it.",
        },
      ],
    },
    {
      id: "your-rights",
      heading: "Your rights",
      blocks: [
        {
          kind: "p",
          text: "Under the Digital Personal Data Protection Act, 2023, you have the right to:",
        },
        {
          kind: "list",
          items: [
            "Access: Request a summary of the personal data we hold about you and the identities of third parties with whom it has been shared.",
            "Correction & Completion: Request the correction of inaccurate data or the completion of incomplete information.",
            "Erasure & Downstream Deletion: Request the erasure of your personal data when it is no longer necessary for the purpose it was collected. Upon receiving a valid erasure request or withdrawal of consent, we will delete your personal data from our active systems and mandate that our third-party Data Processors do the same, subject only to statutory retention periods required by law.",
            "Nomination: Nominate an individual to exercise these data rights on your behalf in the event of death or incapacity.",
            "Grievance Redressal: Raise concerns directly with our Grievance Officer, and escalate to the Data Protection Board of India if you are not satisfied with the resolution.",
          ],
        },
        {
          kind: "p",
          text: "Write to support@kno.vet to exercise any of these rights. We acknowledge requests within 24 hours and respond substantively within 15 days. We may require verification of your identity prior to releasing or modifying records.",
        },
      ],
    },
    {
      id: "export",
      heading: "Taking your records with you",
      blocks: [
        {
          kind: "p",
          text: "Your pet's health timeline belongs to your pet, not to us. You can export it as a PDF from your account at any time, including after you cancel your membership, and share it with any veterinarian or clinic - whether or not they work with KNO.",
        },
      ],
    },
    {
      id: "children",
      heading: "Children",
      blocks: [
        {
          kind: "p",
          text: "KNO is intended for adults. We do not knowingly create accounts for anyone under 18, and we do not direct marketing at children. If you believe a child has given us personal data, write to support@kno.vet and we will delete it.",
        },
      ],
    },
    {
      id: "cookies",
      heading: "Cookies and similar technologies",
      blocks: [
        {
          kind: "p",
          text: "Our website uses cookies that are necessary to keep you signed in, remember your preferences, and protect forms against abuse. We also use privacy-respecting analytics to understand which pages are used, which we cannot tie back to a named individual.",
        },
        {
          kind: "p",
          text: "You can block or delete cookies in your browser settings. Blocking the necessary ones will stop you staying signed in.",
        },
      ],
    },
    {
      id: "transfers",
      heading: "Where your data is stored",
      blocks: [
        {
          kind: "p",
          text: "We store personal data and health records on infrastructure located in India. Where a service provider processes data outside India, we transfer it only to countries not restricted by the Central Government, and only under contractual protections that hold the provider to the standards in this policy.",
        },
      ],
    },
    {
      id: "changes",
      heading: "Changes to this policy",
      blocks: [
        {
          kind: "p",
          text: "We update this policy when the service or the law changes. The effective date at the top always reflects the current version. If a change materially affects your rights, we will tell you by email or in the app before it takes effect, and where the law requires it we will ask for fresh consent.",
        },
      ],
    },
    {
      id: "contact-privacy",
      heading: "Contacting us",
      blocks: [
        {
          kind: "p",
          text: "For any questions regarding this policy or to exercise your rights under the DPDP Act, 2023, please write to support@kno.vet.",
        },
        {
          kind: "p",
          text: "If your concern remains unresolved or you wish to raise a formal complaint, you may escalate the matter to our designated Grievance Officer:",
        },
        {
          kind: "list",
          items: [
            "Grievance Officer: Grievance Officer",
            "Email: support@kno.vet",
            "Postal Address: KNO Veterinary Care Network Private Limited, Oberoi Garden City, Goregaon East, Mumbai – 400063, Maharashtra, India.",
          ],
        },
        {
          kind: "p",
          text: "In accordance with applicable rules, our Grievance Officer will acknowledge your complaint within 24 hours and resolve it within 15 days of receipt. If you remain unsatisfied with our response, you have the right to submit a complaint directly to the Data Protection Board of India.",
        },
      ],
    },
  ],
};
