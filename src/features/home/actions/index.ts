import { sanityFetch } from "@/lib/sanity/lib/live";
import { CATEGORIES_QUERY } from "@/lib/sanity/queries/categories-queries";
import { FAQS_QUERY } from "@/lib/sanity/queries/site-queries";

import {
  CATEGORIES_QUERYResult,
  FAQS_QUERYResult,
} from "../../../../sanity.types";

export const getCategories = async (): Promise<CATEGORIES_QUERYResult> => {
  const { data } = await sanityFetch({
    query: CATEGORIES_QUERY,
    tags: ["sanity-content", "expertise"],
  });
  return data;
};
export const getFaqs = async (): Promise<FAQS_QUERYResult> => {
  const { data } = await sanityFetch({
    query: FAQS_QUERY,
    tags: ["sanity-content", "faq"],
  });
  return data;
};
