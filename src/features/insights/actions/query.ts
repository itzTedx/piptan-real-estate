import { sanityFetch } from "@/lib/sanity/lib/live";
import {
  INSIGHTS_QUERY,
  INSIGHT_BY_SLUG_QUERY,
} from "@/lib/sanity/queries/insights-queries";

import {
  INSIGHTS_QUERYResult,
  INSIGHT_BY_SLUG_QUERYResult,
} from "../../../../sanity.types";

export const getInsights = async (): Promise<INSIGHTS_QUERYResult> => {
  const { data } = await sanityFetch({
    query: INSIGHTS_QUERY,
    tags: ["sanity-content", "insight"],
  });
  return data;
};

export const getInsightBySlug = async (
  slug: string
): Promise<INSIGHT_BY_SLUG_QUERYResult | null> => {
  const { data } = await sanityFetch({
    query: INSIGHT_BY_SLUG_QUERY,
    params: { slug },
    tags: ["sanity-content", "insight"],
  });
  return data;
};
