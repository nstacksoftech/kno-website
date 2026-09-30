import { headerQuery } from "@/graphql/queries/headerQuery";

import { graphqlFetch } from "./graphqlClient";

export type HeaderLogo = {
  url: string | null;
  alt: string | null;
};

export type HeaderLink = {
  label: string;
  url: string;
};

export type HeaderData = {
  logo: HeaderLogo | null;
  subheadingLogo: HeaderLogo | null;
  navLinks: HeaderLink[] | null;
  cta: HeaderLink | null;
};

export async function fetchHeaderData(): Promise<HeaderData | null> {
  try {
    const data = await graphqlFetch<{ Header: HeaderData | null }>({
      query: headerQuery,
      revalidate: 60,
      tags: ["header"],
    });
    return data.Header;
  } catch (error) {
    console.error("Error fetching header", error);
    return null;
  }
}
