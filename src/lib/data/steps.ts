import type { PainPoint, Step } from "@/types";

export const STEPS: readonly Step[] = [
  {
    number: 1,
    title: "Join KNO",
    description: "Choose a plan that’s right for you and your pet.",
    icon: "/icons/person-add.svg",
    iconAlt: "",
    textWidth: 200,
  },
  {
    number: 2,
    title: "Connect with a Vet",
    description: "Book a consultation and talk to a trusted veterinarian.",
    icon: "/icons/stethoscope-step.svg",
    iconAlt: "",
    textWidth: 214,
  },
  {
    number: 3,
    title: "Manage Your Pet’s Health",
    description:
      "Access records, prescriptions and care reminders all in one place.",
    icon: "/icons/cardiology.svg",
    iconAlt: "",
    textWidth: 268,
  },
] as const;

export const PAIN_POINTS: readonly PainPoint[] = [
  {
    label: "Finding the right\nvet",
    icon: "/icons/stethoscope.svg",
    iconAlt: "",
  },
  {
    label: "Remembering vaccinations",
    icon: "/icons/av-timer.svg",
    iconAlt: "",
  },
  { label: "Keeping health\nrecords", icon: "/icons/contract.svg", iconAlt: "" },
  {
    label: "Wondering if\ntreatment is working",
    icon: "/icons/verified.svg",
    iconAlt: "",
  },
] as const;

export const PAIN_POINT_HEADING = "Pet healthcare shouldn’t feel this complicated.";
export const PAIN_POINT_RESOLUTION = "One KNO membership.\nEverything in one place.";
