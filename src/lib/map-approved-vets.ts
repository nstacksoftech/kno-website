import type { ApprovedVetItem, HomeVet } from "./types";

function text(value: string | null | undefined): string {
  return value?.trim() ?? "";
}

function initialsFrom(name: string): string {
  return name
    .replace(/^Dr\.?\s+/i, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function slugId(name: string, index: number): string {
  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return slug || `vet-${index}`;
}

function experienceLabel(years: number | null | undefined): string {
  if (years == null || Number.isNaN(years)) return "";
  if (years <= 0) return "Less than 1 year experience";
  return `${years}+ Years Experience`;
}

export function mapApprovedVets(
  items: ApprovedVetItem[] | null | undefined,
): HomeVet[] {
  return (items ?? []).map((vet, index) => {
    const name = text(vet.full_name);
    return {
      id: slugId(name, index),
      name,
      speciality: text(vet.specialization),
      qualification: text(vet.qualification),
      experience: experienceLabel(vet.years_experience),
      languages: (vet.languages ?? []).map(text).filter(Boolean),
      photo: text(vet.profile_image_url) || null,
      initials: initialsFrom(name) || "V",
      verified: true,
    };
  });
}
