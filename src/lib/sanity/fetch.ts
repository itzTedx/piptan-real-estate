"use server";

import { CATEGORIES_QUERYResult } from "../../../sanity.types";
import { sanityFetch } from "./lib/live";
import { CATEGORIES_QUERY } from "./queries/categories-queries";

export const getCategories = async (): Promise<CATEGORIES_QUERYResult> => {
  try {
    const { data } = await sanityFetch({
      query: CATEGORIES_QUERY,
      tags: ["sanity-content", "categories"],
    });
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw new Error("Failed to fetch categories");
  }
};
