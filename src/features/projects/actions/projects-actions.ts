"use server";

import { unstable_cache as cache } from "next/cache";

import { sanityFetch } from "@/lib/sanity/lib/live";
import {
  FILTERED_PROJECTS_QUERY,
  PROJECT_CARD_QUERY,
} from "@/lib/sanity/queries/projects-queries";

import {
  FILTERED_PROJECTS_QUERYResult,
  PROJECT_CARD_QUERYResult,
} from "../../../../sanity.types";

const cacheOptions = {
  revalidate: 3600, // 1 hour
  tags: ["sanity-content", "projects"],
};

export const getProjectsCardData =
  async (): Promise<PROJECT_CARD_QUERYResult> => {
    return cache(
      async () => {
        const { data } = await sanityFetch({
          query: PROJECT_CARD_QUERY,
          tags: ["projects"],
        });
        return data;
      },
      ["projects"],
      cacheOptions
    )();
  };

interface GetFilteredProjectsParams {
  searchQuery?: string;
  category?: string;
}

export async function getFilteredProjects({
  searchQuery,
  category,
}: GetFilteredProjectsParams): Promise<{
  projects: FILTERED_PROJECTS_QUERYResult;
}> {
  console.log(category);
  try {
    const projects = await cache(
      async () => {
        const { data } = await sanityFetch({
          query: FILTERED_PROJECTS_QUERY,
          params: {
            searchQuery: searchQuery || "",
            category: category === "all" ? "" : category || "",
          },
          tags: ["projects"],
        });
        return data;
      },
      ["projects", searchQuery || "", category || ""],
      cacheOptions
    )();

    return { projects };
  } catch (error) {
    console.error("Error fetching filtered projects:", error);
    throw new Error("Failed to fetch filtered projects");
  }
}
