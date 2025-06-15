"use server";

import { unstable_cache as cache } from "next/cache";

import { CATEGORIES_QUERYResult } from "../../../sanity.types";
import { CATEGORIES_QUERY } from "../queries/categories-queries";
import { sanityFetch } from "./live";

const cacheOptions = {
  revalidate: 3600, // 1 hour
  tags: ["sanity-content", "categories"],
};

export const getCategories = async (): Promise<CATEGORIES_QUERYResult> => {
  try {
    return await cache(
      async () => {
        const { data } = await sanityFetch({
          query: CATEGORIES_QUERY,
          tags: ["categories"],
        });
        return data;
      },
      ["categories"],
      cacheOptions
    )();
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw new Error("Failed to fetch categories");
  }
};
