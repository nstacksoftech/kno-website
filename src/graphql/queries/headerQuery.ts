export const headerQuery = `
query {
  Header {
    logo {
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
