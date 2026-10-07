import { headerQuery } from "@/graphql/queries/headerQuery";
import { homeQuery } from "@/graphql/queries/homeQuery";
import { aboutQuery } from "@/graphql/queries/aboutQuery";
import { contactQuery } from "@/graphql/queries/contactQuery";
import { deleteAccountQuery } from "@/graphql/queries/deleteAccountQuery";
import { legalPageBySlugQuery, legalPageSlugsQuery } from "@/graphql/queries/legalQuery";
import { footerQuery } from "@/graphql/queries/footerQuery";
import { siteSettingsQuery } from "@/graphql/queries/siteSettingsQuery";
import { approvedVetsQuery } from "@/graphql/queries/approvedVetsQuery";

import { getKnoApiGraphqlUrl, graphqlFetch } from "./graphqlClient";
import type {
  AboutPageData,
  AboutPageResponse,
  ApprovedVetsResponse,
  ContactPageData,
  ContactPageResponse,
  DeleteAccountPageData,
  DeleteAccountPageResponse,
  FooterData,
  HeaderData,
  HomePageData,
  HomePageResponse,
  HomeVet,
  LegalPageData,
  SiteSettingsData,
  TrustData,
} from "./types";
import { mapApprovedVets } from "./map-approved-vets";

type SiteSettingsTrustResponse = {
  SiteSetting: { trust: TrustData | null } | null;
};

export async function fetchSiteSettingsData(): Promise<SiteSettingsData | null> {
  try {
    const data = await graphqlFetch<{ SiteSetting: SiteSettingsData | null }>({
      query: siteSettingsQuery,
      revalidate: 60,
      tags: ["site-settings"],
    });
    return data.SiteSetting;
  } catch (error) {
    console.error("Error fetching site settings", error);
    return null;
  }
}

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
    } & SiteSettingsTrustResponse>({
      query: homeQuery,
      revalidate: 60,
      tags: ["home"],
    });
    return { home: data.Home, trust: data.SiteSetting?.trust ?? null };
  } catch (error) {
    console.error("Error fetching home page", error);
    return null;
  }
}

export async function fetchApprovedVets(options?: {
  page?: number;
  limit?: number;
}): Promise<HomeVet[]> {
  try {
    const data = await graphqlFetch<ApprovedVetsResponse>({
      query: approvedVetsQuery,
      variables: {
        page: options?.page ?? 1,
        limit: options?.limit ?? 20,
      },
      url: getKnoApiGraphqlUrl(),
      tags: ["approved-vets"],
    });
    return mapApprovedVets(data?.items ?? []);
  } catch (error) {
    console.error("Error fetching approved vets", error);
    return [];
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
    } & SiteSettingsTrustResponse>({
      query: aboutQuery,
      revalidate: 60,
      tags: ["about"],
    });
    return { about: data.About, trust: data.SiteSetting?.trust ?? null };
  } catch (error) {
    console.error("Error fetching about page", error);
    return null;
  }
}

export async function fetchContactPageData(): Promise<ContactPageResponse | null> {
  try {
    const data = await graphqlFetch<{
      Contact: ContactPageData | null;
    } & SiteSettingsTrustResponse>({
      query: contactQuery,
      revalidate: 60,
      tags: ["contact"],
    });
    return { contact: data.Contact, trust: data.SiteSetting?.trust ?? null };
  } catch (error) {
    console.error("Error fetching contact page", error);
    return null;
  }
}

export async function fetchLegalPageBySlug(
  slug: string,
): Promise<LegalPageData | null> {
  try {
    const data = await graphqlFetch<{
      LegalPages: { docs: LegalPageData[] } | null;
    }>({
      query: legalPageBySlugQuery,
      variables: { slug },
      revalidate: 60,
      tags: ["legal-pages", `legal-page-${slug}`],
    });
    return data.LegalPages?.docs?.[0] ?? null;
  } catch (error) {
    console.error(`Error fetching legal page "${slug}"`, error);
    return null;
  }
}

export async function fetchLegalPageSlugs(): Promise<string[]> {
  try {
    const data = await graphqlFetch<{
      LegalPages: { docs: { slug: string }[] } | null;
    }>({
      query: legalPageSlugsQuery,
      revalidate: 60,
      tags: ["legal-pages"],
    });
    return (data.LegalPages?.docs ?? [])
      .map((doc) => doc.slug?.trim())
      .filter((slug): slug is string => Boolean(slug));
  } catch (error) {
    console.error("Error fetching legal page slugs", error);
    return [];
  }
}

export async function fetchDeleteAccountPageData(): Promise<DeleteAccountPageResponse | null> {
  try {
    const data = await graphqlFetch<{
      DeleteAccount: DeleteAccountPageData | null;
    } & SiteSettingsTrustResponse>({
      query: deleteAccountQuery,
      revalidate: 60,
      tags: ["delete-account"],
    });
    return {
      deleteAccount: data.DeleteAccount,
      trust: data.SiteSetting?.trust ?? null,
    };
  } catch (error) {
    console.error("Error fetching delete account page", error);
    return null;
  }
}
