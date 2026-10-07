export const footerQuery = `
query {
  Footer {
    companyName
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
    legalLinks {
      label
      url
    }
  }
}
`;
