export const siteSettingsTrustFields = `
  trust {
    items {
      title
      description
      note
      image { url alt }
    }
  }
`

export const siteSettingsQuery = `
query {
  SiteSetting {
    headerLogo {
      url
      alt
    }
    address
    footerLogo {
      url
      alt
    }
    copyright
    ${siteSettingsTrustFields}
  }
}
`
