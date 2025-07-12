import { sanityFetch } from "@/lib/sanity/lib/live";
import { CATEGORIES_QUERY } from "@/lib/sanity/queries/categories-queries";

import { CATEGORIES_QUERYResult } from "../../../../sanity.types";

export const getCategories = async (): Promise<CATEGORIES_QUERYResult> => {
  const { data } = await sanityFetch({
    query: CATEGORIES_QUERY,
    tags: ["sanity-content", "expertise"],
  });
  return data;
};
