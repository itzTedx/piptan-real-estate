"use server";

import { unstable_cache as cache } from "next/cache";

import { sanityFetch } from "@/lib/sanity/lib/client";
import { PROJECT_CARD_QUERY } from "@/lib/sanity/queries/projects-queries";

import { PROJECT_CARD_QUERYResult } from "../../../../sanity.types";

const cacheOptions = {
  revalidate: 3600, // 1 hour
  tags: ["sanity-content", "categories"],
};

export const getProjectsCardData =
  async (): Promise<PROJECT_CARD_QUERYResult> => {
    try {
      return await cache(
        async () => {
          const data = await sanityFetch({
            query: PROJECT_CARD_QUERY,
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
