import { seoMetaFields } from "@/graphql/queries/seoMetaFields";

const legalPageFields = `
  eyebrow
  heading
  description
  effectiveDate
  lastUpdated
  tocHeading
  sections {
    id
    title
    anchor
    blocks {
      id
      type
      text
      items { id text }
      caption
      columns { id label }
      rows {
        id
        cells { id text }
      }
    }
  }
  ${seoMetaFields}
`;

export const privacyQuery = `
query {
  Privacy {
    ${legalPageFields}
  }
}
`;

/** Payload exposes the terms global as \`Term\`. */
export const termsQuery = `
query {
  Term {
    ${legalPageFields}
  }
}
`;
