import { headerQuery } from "@/graphql/queries/headerQuery";
import { homeQuery } from "@/graphql/queries/homeQuery";
import { footerQuery } from "@/graphql/queries/footerQuery";

import { graphqlFetch } from "./graphqlClient";
import type { FooterData, HeaderData, HomePageData, HomePageResponse, TrustData } from "./types";

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

export async function fetchHomePageData(): Promise<HomePageResponse | null> {
  try {
    const data = await graphqlFetch<{
      Home: HomePageData | null;
      Trust: TrustData | null;
    }>({
      query: homeQuery,
      revalidate: 60,
      tags: ["home"],
    });
    console.log(data, "Home");
    return { home: data.Home, trust: data.Trust };
  } catch (error) {
    console.error("Error fetching home page", error);
    return null;
  }
}

export async function fetchFooterData(): Promise<FooterData | null> {
  try {
    const data = await graphqlFetch<{ Footer: FooterData | null }>({
      query: footerQuery,
      revalidate: 60,
      tags: ["footer"],
    });
    return data.Footer;
  } catch (error) {
    console.error("Error fetching footer", error);
    return null;
  }
}
