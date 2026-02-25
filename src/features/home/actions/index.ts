import { sanityFetch } from "@/lib/sanity/lib/live";
import { CATEGORIES_QUERY } from "@/lib/sanity/queries/categories-queries";
import { DEVELOPERS_QUERY } from "@/lib/sanity/queries/developers-queries";
import { FAQS_QUERY } from "@/lib/sanity/queries/site-queries";

import {
	CATEGORIES_QUERY_RESULT,
	DEVELOPERS_QUERY_RESULT,
	FAQS_QUERY_RESULT,
} from "../../../../sanity.types";

export const getCategories = async (): Promise<CATEGORIES_QUERY_RESULT> => {
	const { data } = await sanityFetch({
		query: CATEGORIES_QUERY,
		tags: ["sanity-content", "category"],
	});
	return data;
};
export const getFaqs = async (): Promise<FAQS_QUERY_RESULT> => {
	const { data } = await sanityFetch({
		query: FAQS_QUERY,
		tags: ["sanity-content", "faq"],
	});
	return data;
};

export const getDevelopers = async (): Promise<DEVELOPERS_QUERY_RESULT> => {
	const { data } = await sanityFetch({
		query: DEVELOPERS_QUERY,
		tags: ["sanity-content", "developer"],
	});
	return data;
};
