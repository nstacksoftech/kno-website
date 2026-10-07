export async function graphqlFetch<T>({
  query,
  variables = {},
  revalidate = 60,
  tags,
  url: urlOverride,
}: {
  query: string;
  variables?: Record<string, unknown>;
  revalidate?: number | false;
  tags?: string[];
  /** Override the default CMS GraphQL endpoint. */
  url?: string;
}): Promise<T> {
  const url =
    urlOverride ||
    process.env.NEXT_PUBLIC_GRAPHQL_API_URL ||
    "https://kno-api-stg.stagingurl.in";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
      cache: revalidate === false ? "no-store" : "force-cache",
      next: revalidate === false ? undefined : { revalidate, tags },
    });

    if (!response.ok) {
      throw new Error(
        `GraphQL Error: ${response.status} ${response.statusText}`,
      );
    }

    const { data, errors } = (await response.json()) as {
      data: T;
      errors?: { message: string }[];
    };

    if (errors?.length) {
      console.error("GraphQL validation/resolution errors:", errors);
      throw new Error(errors.map((e) => e.message).join(", "));
    }

    return data;
  } catch (error) {
    console.error("GraphQL Fetch Error:", error);
    throw error;
  }
}

/** CMS uploads often come back as `/api/media/...` relative to the GraphQL origin. */
export function resolveMediaUrl(url: string): string {
  if (!url.startsWith("/api/media/")) return url;

  const rawApiUrl =
    process.env.NEXT_PUBLIC_GRAPHQL_API_URL ||
    "http://localhost:3000/api/graphql";

  try {
    return `${new URL(rawApiUrl).origin}${url}`;
  } catch {
    return url;
  }
}

/** Petcare backend GraphQL endpoint: `{NEXT_PUBLIC_KNO_API_BASE_URL}/v1/graphql` */
export function getKnoApiGraphqlUrl(): string {
  const base = process.env.NEXT_PUBLIC_KNO_API_BASE_URL?.trim().replace(
    /\/$/,
    "",
  );
  if (!base) {
    throw new Error(
      "NEXT_PUBLIC_KNO_API_BASE_URL is missing in environment variables",
    );
  }
  return `${base}/v1/graphql`;
}
