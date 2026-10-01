import { headerQuery } from "@/graphql/queries/headerQuery";
import { homeQuery } from "@/graphql/queries/homeQuery";
import { aboutQuery } from "@/graphql/queries/aboutQuery";
import { contactQuery } from "@/graphql/queries/contactQuery";
import { privacyQuery, termsQuery } from "@/graphql/queries/legalQuery";
import { footerQuery } from "@/graphql/queries/footerQuery";

import { graphqlFetch } from "./graphqlClient";
import type {
  AboutPageData,
  AboutPageResponse,
  ContactPageData,
  ContactPageResponse,
  FooterData,
  HeaderData,
  HomePageData,
  HomePageResponse,
  LegalPageData,
  TrustData,
} from "./types";

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

export async function fetchAboutPageData(): Promise<AboutPageResponse | null> {
  try {
    const data = await graphqlFetch<{
      About: AboutPageData | null;
      Trust: TrustData | null;
    }>({
      query: aboutQuery,
      revalidate: 60,
      tags: ["about"],
    });
    return { about: data.About, trust: data.Trust };
  } catch (error) {
    console.error("Error fetching about page", error);
    return null;
  }
}

export async function fetchContactPageData(): Promise<ContactPageResponse | null> {
  try {
    const data = await graphqlFetch<{
      Contact: ContactPageData | null;
      Trust: TrustData | null;
    }>({
      query: contactQuery,
      revalidate: 60,
      tags: ["contact"],
    });
    return { contact: data.Contact, trust: data.Trust };
  } catch (error) {
    console.error("Error fetching contact page", error);
    return null;
  }
}

export async function fetchPrivacyPageData(): Promise<LegalPageData | null> {
  try {
    const data = await graphqlFetch<{ Privacy: LegalPageData | null }>({
      query: privacyQuery,
      revalidate: 60,
      tags: ["privacy"],
    });
    return data.Privacy;
  } catch (error) {
    console.error("Error fetching privacy page", error);
    return null;
  }
}

export async function fetchTermsPageData(): Promise<LegalPageData | null> {
  try {
    const data = await graphqlFetch<{ Term: LegalPageData | null }>({
      query: termsQuery,
      revalidate: 60,
      tags: ["terms"],
    });
    console.log(data,'data');
    return data.Term;
  } catch (error) {
    console.error("Error fetching terms page", error);
    return null;
  }
}
