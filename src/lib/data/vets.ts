import type { Vet } from "@/types";

export const VETS: readonly Vet[] = [
  {
    id: "rohan-mehta",
    name: "Dr. Rohan Mehta",
    qualification: "BVSc & MVSc",
    experience: "10+ Years Experience",
    languages: ["English", "Hindi", "Gujarati", "Marathi"],
    photo: "/images/vet-rohan.png",
    verified: true,
  },
  {
    id: "ruhi-rai",
    name: "Dr. Ruhi Rai",
    qualification: "BVSc & MVSc",
    experience: "10+ Years Experience",
    languages: ["English", "Hindi", "Gujarati", "Marathi"],
    photo: "/images/vet-ruhi.png",
    verified: true,
  },
  {
    id: "romi-mishra",
    name: "Dr. Romi Mishra",
    qualification: "BVSc & MVSc",
    experience: "10+ Years Experience",
    languages: ["English", "Hindi", "Gujarati", "Marathi"],
    photo: "/images/vet-rohan.png",
    verified: true,
  },
] as const;

export const VETS_HEADING = "Meet our veterinarians";
