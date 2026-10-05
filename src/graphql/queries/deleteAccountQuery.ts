import { seoMetaFields } from "@/graphql/queries/seoMetaFields";

export const deleteAccountQuery = `
query {
  DeleteAccount {
    hero {
      eyebrow
      heading
      description
      note
      steps { id label }
    }
    form {
      heading
      description
      reasonPlaceholder
      confirmationText
    }
    process {
      heading
      items { id title description }
    }
    deleted {
      heading
      items { id text }
    }
    retained {
      heading
      description
      items { id label detail }
      button { label href }
    }
    help {
      heading
      description
      email
      address
    }
    showTrustedBanner
    ${seoMetaFields}
  }
  Trust {
    items {
      title
      description
      note
      image { url alt }
    }
  }
}
`;
