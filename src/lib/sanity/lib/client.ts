import { createClient } from "next-sanity";
import { QueryParams } from "sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Enable CDN for better caching
  perspective: "published", // Only fetch published content
});

export async function sanityFetch<const QueryString extends string>({
  query,
  params = {},
  revalidate = 3600, // Increase default revalidation time to 1 hour
  tags = [],
}: {
  query: QueryString;
  params?: QueryParams;
  revalidate?: number | false;
  tags?: string[];
}) {
  return client.fetch(query, params, {
    next: {
      revalidate: tags.length ? false : revalidate,
      tags: ["sanity-content", ...tags], // Add default tag for all Sanity content
    },
  });
}
