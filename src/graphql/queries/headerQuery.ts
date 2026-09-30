export const headerQuery = `
query {
  Header {
    logo {
      url
      alt
    }
    subheadingLogo{
      url
      alt
    }
    navLinks {
      label
      url
    }
    cta {
      label
      url
    }
  }
}
`;
