import type { LegalBlock, LegalDocument } from "@/types/legal";

import type { LegalBlockData, LegalPageData } from "./types";

const EMPTY_DOCUMENT: LegalDocument = {
  eyebrow: "",
  title: "",
  intro: "",
  effectiveDate: "",
  lastUpdated: "",
  tocHeading: "On this page",
  sections: [],
};

function text(value: string | null | undefined): string {
  return value?.trim() ?? "";
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function formatLegalDate(value: string | null | undefined): string {
  const raw = text(value);
  if (!raw) return "";
  const date = new Date(raw);
  if (Number.isNaN(date.getTime())) return raw;
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  }).format(date);
}

function uniqueAnchor(preferred: string, used: Set<string>): string {
  const base = preferred || "section";
  let id = base;
  let suffix = 2;
  while (used.has(id)) {
    id = `${base}-${suffix}`;
    suffix += 1;
  }
  used.add(id);
  return id;
}

function mapBlock(block: LegalBlockData): LegalBlock | null {
  if (block.type === "paragraph") {
    const paragraph = text(block.text);
    return paragraph ? { kind: "p", text: paragraph } : null;
  }

  if (block.type === "list") {
    const items = (block.items ?? []).map((item) => text(item.text)).filter(Boolean);
    return items.length > 0 ? { kind: "list", items } : null;
  }

  const head = (block.columns ?? []).map((column) => text(column.label)).filter(Boolean);
  if (head.length === 0) return null;

  const rows = (block.rows ?? [])
    .map((row) => (row.cells ?? []).map((cell) => text(cell.text)))
    .filter((row) => row.some(Boolean));

  return {
    kind: "table",
    caption: text(block.caption),
    head,
    rows,
  };
}

export function mapLegalPage(page: LegalPageData | null): LegalDocument {
  if (!page) return EMPTY_DOCUMENT;

  const usedAnchors = new Set<string>();

  return {
    eyebrow: text(page.eyebrow),
    title: text(page.heading),
    intro: text(page.description),
    effectiveDate: formatLegalDate(page.effectiveDate),
    lastUpdated: formatLegalDate(page.lastUpdated),
    tocHeading: text(page.tocHeading) || "On this page",
    sections: (page.sections ?? []).map((section) => {
      const heading = text(section.title);
      return {
        id: uniqueAnchor(text(section.anchor) || slugify(heading), usedAnchors),
        heading,
        blocks: (section.blocks ?? [])
          .map(mapBlock)
          .filter((block): block is LegalBlock => block !== null),
      };
    }),
  };
}
