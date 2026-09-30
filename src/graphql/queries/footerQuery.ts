export const footerQuery = `
query {
  Footer {
    logo {
      url
      alt
    }
    companyName
    companyAddress
    socialLinks {
      platform
      url
      icon {
        url
        alt
      }
    }
    columns {
      title
      links {
        label
        url
      }
    }
    copyright
    legalLinks {
      label
      url
    }
  }
}
`;
