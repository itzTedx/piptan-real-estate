import { client } from "@/lib/sanity/lib/client";
import { sanityFetch } from "@/lib/sanity/lib/live";
import {
	FILTERED_INSIGHTS_QUERY,
	INSIGHT_BY_SLUG_QUERY,
	INSIGHT_CATEGORIES_QUERY,
	INSIGHTS_COUNT_QUERY,
	INSIGHTS_QUERY,
	PAGINATED_INSIGHTS_QUERY,
} from "@/lib/sanity/queries/insights-queries";

import {
	FILTERED_INSIGHTS_QUERY_RESULT,
	INSIGHT_BY_SLUG_QUERY_RESULT,
	INSIGHT_CATEGORIES_QUERY_RESULT,
	INSIGHTS_QUERY_RESULT,
	PAGINATED_INSIGHTS_QUERY_RESULT,
} from "../../../../sanity.types";

export const getInsights = async (): Promise<INSIGHTS_QUERY_RESULT> => {
	const { data } = await sanityFetch({
		query: INSIGHTS_QUERY,
		tags: ["sanity-content", "insight"],
	});
	return data;
};

// Static version for generateStaticParams - doesn't use draftMode
export const getInsightsStatic = async (): Promise<INSIGHTS_QUERY_RESULT> => {
	const data = await client.fetch(INSIGHTS_QUERY);
	return data;
};

export const getInsightBySlug = async (
	slug: string
): Promise<INSIGHT_BY_SLUG_QUERY_RESULT | null> => {
	const { data } = await sanityFetch({
		query: INSIGHT_BY_SLUG_QUERY,
		params: { slug },
		tags: ["sanity-content", "insight"],
	});
	return data;
};

// Static version for generateMetadata - doesn't use draftMode
export const getInsightBySlugStatic = async (
	slug: string
): Promise<INSIGHT_BY_SLUG_QUERY_RESULT | null> => {
	const data = await client.fetch(INSIGHT_BY_SLUG_QUERY, { slug });
	return data;
};

export const getPaginatedInsights = async (
	page = 1,
	pageSize = 9
): Promise<{ insights: PAGINATED_INSIGHTS_QUERY_RESULT; total: number }> => {
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
	insights: FILTERED_INSIGHTS_QUERY_RESULT;
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
	async (): Promise<INSIGHT_CATEGORIES_QUERY_RESULT> => {
		const { data } = await sanityFetch({
			query: INSIGHT_CATEGORIES_QUERY,
			tags: ["sanity-content", "insightCategory"],
		});
		return data;
	};

export async function getFilteredInsightsWithParams(searchParams: {
	q?: string;
	category?: string;
}): Promise<{
	insights: FILTERED_INSIGHTS_QUERY_RESULT;
	categories: INSIGHT_CATEGORIES_QUERY_RESULT;
}> {
	try {
		const [insightsResult, categoriesResult] = await Promise.all([
			sanityFetch({
				query: FILTERED_INSIGHTS_QUERY,
				params: {
					searchQuery: searchParams.q || "",
					category:
						searchParams.category === "all" ? "" : searchParams.category || "",
				},
				tags: ["sanity-content", "insight"],
			}),
			sanityFetch({
				query: INSIGHT_CATEGORIES_QUERY,
				tags: ["sanity-content", "insightCategory"],
			}),
		]);

		return {
			insights: insightsResult.data,
			categories: categoriesResult.data,
		};
	} catch (error) {
		console.error("Error fetching filtered insights:", error);
		throw new Error("Failed to fetch filtered insights");
	}
}
