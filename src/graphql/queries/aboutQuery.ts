import { seoMetaFields } from "@/graphql/queries/seoMetaFields";
import { siteSettingsTrustFields } from "@/graphql/queries/siteSettingsQuery";

export const aboutQuery = `
query {
  About {
    hero {
      heading
      highlight
      supportingLine
      description
      chipIcon { url alt }
      chip
      primaryCta { label url icon { url alt } }
      secondaryCta { label url icon { url alt } }
      image { url alt }
    }
    whyKno {
      heading
      supportingLine
      description
      items { icon { url alt } label }
      resolution
    }
    beliefs {
      heading
      items { icon { url alt } title description }
    }
    team {
      heading
      people { image { url alt } name role bio }
      supportingLine
      description
    }
    commitments {
      heading
      items { icon { url alt } title description }
      primaryCta { label url icon { url alt } }
      secondaryCta { label url icon { url alt } }
    }
    showTrustedBanner
    ${seoMetaFields}
  }
  SiteSetting {
    ${siteSettingsTrustFields}
  }
}
`;
