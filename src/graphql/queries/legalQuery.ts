import { seoMetaFields } from "@/graphql/queries/seoMetaFields";

const legalPageFields = `
  title
  slug
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

/** Fetch one legal page by URL slug (e.g. privacy, terms). */
export const legalPageBySlugQuery = `
query LegalPageBySlug($slug: String!) {
  LegalPages(where: { slug: { equals: $slug } }, limit: 1) {
    docs {
      ${legalPageFields}
    }
  }
}
`;

/** All legal page slugs for static generation. */
export const legalPageSlugsQuery = `
query LegalPageSlugs {
  LegalPages(limit: 100) {
    docs {
      slug
    }
  }
}
`;
