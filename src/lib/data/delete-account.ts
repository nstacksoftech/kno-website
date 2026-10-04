/**
 * Copy for the public account-deletion page (/delete-account). The app stores
 * require a web link where people can ask for their account to be deleted
 * without opening the app, so this page must keep working on its own.
 */
export const DELETE_ACCOUNT_HERO = {
  eyebrow: "Account & Privacy",
  title: "Delete your KNO account",
  intro:
    "Request permanent deletion of your KNO account and the personal data linked to it. Verify the mobile number registered with KNO and our privacy team will take it from there.",
  meta: "Requests are acknowledged within 72 hours and completed within 30 days.",
} as const;

/** The three stages shown in the stepper above the form. */
export const DELETE_ACCOUNT_STEPS = [
  { id: "details", label: "Your details" },
  { id: "verify", label: "Verify OTP" },
  { id: "done", label: "Request sent" },
] as const;

export type DeleteAccountStep = (typeof DELETE_ACCOUNT_STEPS)[number]["id"];

/** Optional - helps the team improve, never required to process a request. */
export const DELETE_ACCOUNT_REASONS = [
  "I no longer have a pet",
  "I'm using a different service",
  "I have privacy concerns",
  "I created a duplicate account",
  "The app didn't meet my needs",
  "Something else",
] as const;

export const DELETE_ACCOUNT_DELETED = {
  title: "What gets deleted",
  items: [
    "Your profile, login and mobile number",
    "Pet profiles, photos and reminders",
    "Saved addresses and preferences",
    "Chat history with the KNO team",
    "Active memberships (no refund for the remaining period)",
  ],
} as const;

/** Mirrors the retention table in the Privacy Policy - keep them in sync. */
export const DELETE_ACCOUNT_RETAINED = {
  title: "What we're required to keep",
  body: "Some records are held for a limited period by law, then deleted or irreversibly anonymised:",
  items: [
    "Invoices and transaction records - 8 years (Indian tax law)",
    "Prescriptions and consultation notes - 3 years from your last consultation",
    "Support correspondence - 2 years from the last message",
  ],
} as const;

export const DELETE_ACCOUNT_TIMELINE = [
  {
    title: "Verify your number",
    body: "We send a one-time password to confirm the request comes from you.",
  },
  {
    title: "Our team reviews",
    body: "We acknowledge your request within 72 hours and may contact you if anything needs clarifying.",
  },
  {
    title: "Account deleted",
    body: "Your account is closed and your data removed within 30 days. We'll confirm by SMS or email.",
  },
] as const;

export const DELETE_ACCOUNT_HELP = {
  title: "Changed your mind or need help?",
  body: "Before deletion is complete you can cancel by writing to us. For anything else about your data, contact our privacy team.",
  email: "privacy@kno.vet",
} as const;
