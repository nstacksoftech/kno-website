import type { Vet } from "@/types";

/**
 * PLACEHOLDER PANEL. These are illustrative profiles, not real practitioners.
 * Replace every entry with a credentialed veterinarian - name, registration,
 * qualification and experience - before this page goes live. Publishing
 * invented veterinary credentials would misrepresent the panel.
 *
 * Only three portraits exist in the design file. Entries without a `photo`
 * render a brand monogram rather than a stand-in photograph of someone else.
 */
export const VETS: readonly Vet[] = [
  {
    id: "rohan-mehta",
    name: "Dr. Rohan Mehta",
    qualification: "BVSc & MVSc",
    experience: "12+ Years Experience",
    languages: ["English", "Hindi", "Gujarati", "Marathi"],
    photo: "/images/vet-rohan.png",
    initials: "RM",
    verified: true,
  },
  {
    id: "ruhi-rai",
    name: "Dr. Ruhi Rai",
    qualification: "BVSc & MVSc",
    experience: "9+ Years Experience",
    languages: ["English", "Hindi", "Bengali"],
    photo: "/images/vet-ruhi.png",
    initials: "RR",
    verified: true,
  },
  {
    id: "romi-mishra",
    name: "Dr. Romi Mishra",
    qualification: "BVSc & MVSc",
    experience: "10+ Years Experience",
    languages: ["English", "Hindi", "Marathi"],
    photo: "/images/vet-romi.png",
    initials: "RM",
    verified: true,
  },
  {
    id: "anand-krishnan",
    name: "Dr. Anand Krishnan",
    qualification: "BVSc, MVSc (Medicine)",
    experience: "8+ Years Experience",
    languages: ["English", "Tamil", "Malayalam", "Hindi"],
    initials: "AK",
    verified: true,
  },
  {
    id: "simran-kaur-bedi",
    name: "Dr. Simran Kaur Bedi",
    qualification: "BVSc, MVSc (Surgery)",
    experience: "7+ Years Experience",
    languages: ["English", "Hindi", "Punjabi"],
    initials: "SB",
    verified: true,
  },
] as const;

export const VETS_HEADING = "Meet our veterinarians";
