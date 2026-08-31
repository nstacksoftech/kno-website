/**
 * Single source of truth for how people reach KNO. Referenced by the Contact
 * page and by the grievance sections of the Privacy Policy and Terms.
 *
 * The registered entity and address are taken from the company record; mail is
 * routed on the kno.vet domain. Add a support telephone number here when one
 * is published - the Contact page renders whatever this file declares.
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

export interface ContactChannel {
  id: string;
  label: string;
  description: string;
  email: string;
  responseTime: string;
}

export const CONTACT_CHANNELS: readonly ContactChannel[] = [
  {
    id: "support",
    label: "Member support",
    description:
      "Questions about your membership, billing, health records or a consultation you have already booked.",
    email: "support@kno.vet",
    responseTime: "Replies within 24 hours",
  },
  {
    id: "general",
    label: "General enquiries",
    description:
      "Partnerships, press, and anything that does not fit the other mailboxes.",
    email: "hello@kno.vet",
    responseTime: "Replies within 2 working days",
  },
  {
    id: "vets",
    label: "For veterinarians",
    description:
      "Join the KNO panel, or ask about credentialing, consultation scheduling and payouts.",
    email: "vets@kno.vet",
    responseTime: "Replies within 3 working days",
  },
  {
    id: "privacy",
    label: "Privacy and data requests",
    description:
      "Access, correct or erase your data, or raise a concern about how it is handled.",
    email: "privacy@kno.vet",
    responseTime: "Acknowledged within 72 hours",
  },
] as const;

/** Required under the Consumer Protection (E-Commerce) Rules, 2020. */
export const GRIEVANCE = {
  designation: "Grievance Officer",
  email: "grievance@kno.vet",
  acknowledgement: "48 hours",
  resolution: "30 days",
} as const;

export const CONSULT_AVAILABILITY =
  "Veterinary consultations are available 24 hours a day, every day of the year. Written support is answered by our Mumbai team between 9:00 AM and 9:00 PM IST.";

export const CONTACT_SUBJECTS = [
  "Membership and billing",
  "Booking a consultation",
  "Health records and reminders",
  "Joining KNO as a veterinarian",
  "Privacy or data request",
  "Something else",
] as const;
