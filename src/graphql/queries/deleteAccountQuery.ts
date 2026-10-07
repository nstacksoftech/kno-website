import { seoMetaFields } from "@/graphql/queries/seoMetaFields";
import { siteSettingsTrustFields } from "@/graphql/queries/siteSettingsQuery";

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
      reasons { id text }
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
      items { id detail }
      button { label href }
    }
    help {
      heading
      description
      email
    }
    showTrustedBanner
    ${seoMetaFields}
  }
  SiteSetting {
    ${siteSettingsTrustFields}
  }
}
`;
