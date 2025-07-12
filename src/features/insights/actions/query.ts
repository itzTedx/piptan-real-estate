import { sanityFetch } from "@/lib/sanity/lib/live";
import {
  FILTERED_INSIGHTS_QUERY,
  INSIGHTS_COUNT_QUERY,
  INSIGHTS_QUERY,
  INSIGHT_BY_SLUG_QUERY,
  INSIGHT_CATEGORIES_QUERY,
  PAGINATED_INSIGHTS_QUERY,
} from "@/lib/sanity/queries/insights-queries";

import {
  FILTERED_INSIGHTS_QUERYResult,
  INSIGHTS_QUERYResult,
  INSIGHT_BY_SLUG_QUERYResult,
  INSIGHT_CATEGORIES_QUERYResult,
  PAGINATED_INSIGHTS_QUERYResult,
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

export const getPaginatedInsights = async (
  page: number = 1,
  pageSize: number = 9
): Promise<{ insights: PAGINATED_INSIGHTS_QUERYResult; total: number }> => {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  const [insightsResult, totalResult] = await Promise.all([
    sanityFetch({
      query: PAGINATED_INSIGHTS_QUERY,
      params: { start, end },
      tags: ["sanity-content", "insight"],
    }),
    sanityFetch({
      query: INSIGHTS_COUNT_QUERY,
      tags: ["sanity-content", "insight"],
    }),
  ]);

  return {
    insights: insightsResult.data,
    total: totalResult.data,
  };
};

interface GetFilteredInsightsParams {
  searchQuery?: string;
  category?: string;
}

export async function getFilteredInsights({
  searchQuery,
  category,
}: GetFilteredInsightsParams): Promise<{
  insights: FILTERED_INSIGHTS_QUERYResult;
}> {
  try {
    const { data: insights } = await sanityFetch({
      query: FILTERED_INSIGHTS_QUERY,
      params: {
        searchQuery: searchQuery || "",
        category: category === "all" ? "" : category || "",
      },
      tags: ["sanity-content", "insight"],
    });

    return { insights };
  } catch (error) {
    console.error("Error fetching filtered insights:", error);
    throw new Error("Failed to fetch filtered insights");
  }
}

export const getInsightCategories =
  async (): Promise<INSIGHT_CATEGORIES_QUERYResult> => {
    const { data } = await sanityFetch({
      query: INSIGHT_CATEGORIES_QUERY,
      tags: ["sanity-content", "insightCategory"],
    });
    return data;
  };
