import { resolveMediaUrl } from "./graphqlClient";
import type {
  CmsImage,
  DeleteAccountPageData,
  DeleteAccountPageResponse,
  DeleteAccountStepView,
  DeleteAccountView,
  HomeTrustBadge,
  MediaRef,
  TrustData,
} from "./types";

const STEP_IDS: DeleteAccountStepView["id"][] = ["details", "verify", "done"];

const DEFAULT_STEPS: DeleteAccountStepView[] = [
  { id: "details", label: "Your details" },
  { id: "verify", label: "Verify OTP" },
  { id: "done", label: "Request sent" },
];

const EMPTY_DELETE_ACCOUNT: DeleteAccountView = {
  hero: {
    eyebrow: "",
    heading: "",
    description: "",
    note: "",
    steps: DEFAULT_STEPS,
  },
  form: {
    heading: "Enter your details",
    description:
      "Use the mobile number you signed in to KNO with. We'll send a one-time password to confirm it's you.",
    reasonPlaceholder: "Select a reason",
    reasons: [
      "I no longer have a pet",
      "I'm using a different service",
      "I have privacy concerns",
      "I created a duplicate account",
      "The app didn't meet my needs",
      "Something else",
    ],
    confirmationText:
      "I understand that deleting my account is permanent. My pet profiles, health history and any active membership will be removed and cannot be restored.",
  },
  process: { heading: "", items: [] },
  deleted: { heading: "", items: [] },
  retained: {
    heading: "",
    description: "",
    items: [],
    button: { label: "", href: "" },
  },
  help: { heading: "", description: "", email: "" },
  trustBadges: [],
};

function text(value: string | null | undefined): string {
  return value?.trim() ?? "";
}

function image(media: MediaRef | undefined): CmsImage | null {
  if (!media?.url) return null;
  return { src: resolveMediaUrl(media.url), alt: text(media.alt) };
}

function list<T>(items: T[] | null | undefined): T[] {
  return items ?? [];
}

function href(value: string | null | undefined): string {
  const raw = text(value);
  if (!raw) return "";
  if (/^(https?:|mailto:|#|\/)/i.test(raw)) return raw;
  return `/${raw}`;
}

function mapTrust(trust: TrustData | null): HomeTrustBadge[] {
  return list(trust?.items).map((item) => ({
    title: text(item.title),
    description: text(item.description),
    caption: text(item.note),
    image: image(item.image),
  }));
}

function mapSteps(
  steps: { label: string; id?: string | null }[] | null | undefined,
): DeleteAccountStepView[] {
  const labels = list(steps)
    .map((step) => text(step.label))
    .filter(Boolean);

  if (labels.length === 0) return DEFAULT_STEPS;

  return STEP_IDS.map((id, index) => ({
    id,
    label: labels[index] || DEFAULT_STEPS[index].label,
  }));
}

function mapDeleteAccount(
  page: DeleteAccountPageData,
  trust: TrustData | null,
): DeleteAccountView {
  return {
    hero: {
      eyebrow: text(page.hero?.eyebrow),
      heading: text(page.hero?.heading),
      description: text(page.hero?.description),
      note: text(page.hero?.note),
      steps: mapSteps(page.hero?.steps),
    },
    form: {
      heading: text(page.form?.heading) || EMPTY_DELETE_ACCOUNT.form.heading,
      description:
        text(page.form?.description) || EMPTY_DELETE_ACCOUNT.form.description,
      reasonPlaceholder: EMPTY_DELETE_ACCOUNT.form.reasonPlaceholder,
      reasons: (() => {
        const reasons = list(page.form?.reasons)
          .map((item) => text(item.text))
          .filter(Boolean);
        return reasons.length > 0 ? reasons : EMPTY_DELETE_ACCOUNT.form.reasons;
      })(),
      confirmationText:
        text(page.form?.confirmationText) ||
        EMPTY_DELETE_ACCOUNT.form.confirmationText,
    },
    process: {
      heading: text(page.process?.heading),
      items: list(page.process?.items).map((item, index) => ({
        id: text(item.id) || `process-${index}`,
        title: text(item.title),
        description: text(item.description),
      })),
    },
    deleted: {
      heading: text(page.deleted?.heading),
      items: list(page.deleted?.items).map((item, index) => ({
        id: text(item.id) || `deleted-${index}`,
        text: text(item.text),
      })),
    },
    retained: {
      heading: text(page.retained?.heading),
      description: text(page.retained?.description),
      items: list(page.retained?.items).map((item, index) => ({
        id: text(item.id) || `retained-${index}`,
        text: text(item.detail),
      })),
      button: {
        label: text(page.retained?.button?.label),
        href: href(page.retained?.button?.href),
      },
    },
    help: {
      heading: text(page.help?.heading),
      description: text(page.help?.description),
      email: text(page.help?.email),
    },
    trustBadges: page.showTrustedBanner ? mapTrust(trust) : [],
  };
}

export function mapDeleteAccountPage(
  response: DeleteAccountPageResponse | null,
): DeleteAccountView {
  if (!response?.deleteAccount) return EMPTY_DELETE_ACCOUNT;
  return mapDeleteAccount(response.deleteAccount, response.trust);
}
