import { seoMetaFields } from "@/graphql/queries/seoMetaFields";
import { siteSettingsTrustFields } from "@/graphql/queries/siteSettingsQuery";

export const contactQuery = `
query {
  Contact {
    hero {
      eyebrow
      heading
      description
      hours
      image { url alt }
      actions {
        id
        icon { url alt }
        title
        description
        url
      }
    }
    emergency {
      icon { url alt }
      heading
      description
      note
    }
    helpTopics {
      heading
      description
      items {
        id
        icon { url alt }
        title
        description
        url
      }
    }
    channels {
      heading
      description
      items {
        id
        icon { url alt }
        title
        description
        email
        responseTime
      }
    }
    message {
      heading
      description
      disclaimer
      submitLabel
      whatsapp {
        icon { url alt }
        eyebrow
        heading
        description
      }
      faqs {
        icon { url alt }
        heading
        description
      }
    }
    showTrustedBanner
    ${seoMetaFields}
  }
  SiteSetting {
    ${siteSettingsTrustFields}
  }
}
`;
