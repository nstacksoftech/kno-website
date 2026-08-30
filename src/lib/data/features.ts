import type { Feature } from "@/types";

export const FEATURES: readonly Feature[] = [
  {
    title: "Health Records",
    description: "All your pet’s medical records, safe and secure.",
    icon: "/icons/blood-pressure.svg",
    iconAlt: "",
  },
  {
    title: "Care Reminders",
    description: "Deworming, flea & tick, checkups and more.",
    icon: "/icons/bloodtype.svg",
    iconAlt: "",
  },
  {
    title: "Vaccinations",
    description: "Stay on track with timely vaccination reminders.",
    icon: "/icons/syringe.svg",
    iconAlt: "",
  },
  {
    title: "Health Timeline",
    description: "Track your pet’s health journey over time.",
    icon: "/icons/planner-review.svg",
    iconAlt: "",
  },
  {
    title: "Consultations",
    description: "Audio or video consultations with expert vets.",
    icon: "/icons/stethoscope-feature.svg",
    iconAlt: "",
  },
  {
    title: "Prescriptions",
    description: "Digital prescriptions and medication guidance.",
    icon: "/icons/pill.svg",
    iconAlt: "",
  },
] as const;
