import { seoMetaFields } from "@/graphql/queries/seoMetaFields";

export const homeQuery = `
query {
  Home {
    hero {
      heading
      highlight
      supportingLine
      description
      chipImage { url alt }
      chip
      highlights {
        icon { url alt }
        title
        description
      }
      primaryCta {
        label
        url
        icon { url alt }
      }
      secondaryCta { label url icon { url alt }
 }
      image { url alt }
      badgeImage { url alt }
      badge
      proofTitle
      proofStat
      avatars { url alt }
    }
    howItWorks {
      heading
      steps {
        icon { url alt }
        title
        description
      }
    }
    painPoints {
      heading
      points {
        icon { url alt }
        label
      }
      resolution
    }
    features {
      heading
      image { url alt }
      items {
        icon { url alt }
        title
        description
      }
    }
    pricing {
      heading
      plans {
        id
        name
        tagline
        price
        currency
        interval
        featured
        includesLabel
        features { text }
        ctaLabel
        ctaUrl
      }
      image { url alt }
      caption
    }
    veterinarians {
      heading
      vets {
        id
        name
        photo { url alt }
        initials
        speciality
        qualification
        experience
        languages
        verifiedLabel
      }
      viewAllLabel
      viewAllUrl
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
