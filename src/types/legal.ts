/** A block inside a legal section: prose, a bulleted list, or a small table. */
export type LegalBlock =
  | { kind: "p"; text: string }
  | { kind: "list"; items: readonly string[] }
  | {
      kind: "table";
      caption: string;
      head: readonly string[];
      rows: readonly (readonly string[])[];
    };

export interface LegalSection {
  /** Slug used for the in-page anchor and contents link. */
  id: string;
  heading: string;
  blocks: readonly LegalBlock[];
}

export interface LegalDocument {
  title: string;
  intro: string;
  effectiveDate: string;
  lastUpdated: string;
  sections: readonly LegalSection[];
}
