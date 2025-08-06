"use server";

import { client } from "@/lib/sanity/lib/client";
import { sanityFetch } from "@/lib/sanity/lib/live";
import {
  FILTERED_PAGINATED_PROJECTS_QUERY,
  FILTERED_PROJECTS_COUNT_QUERY,
  FILTERED_PROJECTS_QUERY,
  PAGINATED_PROJECTS_QUERY,
  PORTFOLIOS_QUERY,
  PORTFOLIOS_SLUGS_QUERY,
  PROJECTS_COUNT_QUERY,
  PROJECT_BY_SLUG_QUERY,
  PROJECT_CARD_QUERY,
} from "@/lib/sanity/queries/projects-queries";

import {
  FILTERED_PROJECTS_QUERYResult,
  PORTFOLIOS_SLUGS_QUERYResult,
  PROJECT_BY_SLUG_QUERYResult,
  PROJECT_CARD_QUERYResult,
} from "../../../../sanity.types";

export const getProjectsCardData =
  async (): Promise<PROJECT_CARD_QUERYResult> => {
    const { data } = await sanityFetch({
      query: PROJECT_CARD_QUERY,
      tags: ["sanity-content", "projects"],
    });

    return data;
  };

export const getPaginatedProjects = async (
  page: number = 1,
  pageSize: number = 9,
  searchQuery?: string,
  category?: string
): Promise<{ projects: PROJECT_CARD_QUERYResult; total: number }> => {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  // If we have filters, use the filtered queries
  if (searchQuery || (category && category !== "all")) {
    const [projectsResult, totalResult] = await Promise.all([
      sanityFetch({
        query: FILTERED_PAGINATED_PROJECTS_QUERY,
        params: {
          start,
          end,
          searchQuery: searchQuery || "",
          category: category === "all" ? "" : category || "",
        },
        tags: ["sanity-content", "projects"],
      }),
      sanityFetch({
        query: FILTERED_PROJECTS_COUNT_QUERY,
        params: {
          searchQuery: searchQuery || "",
          category: category === "all" ? "" : category || "",
        },
        tags: ["sanity-content", "projects"],
      }),
    ]);

    return {
      projects: projectsResult.data,
      total: totalResult.data,
    };
  }

  // Otherwise use the regular paginated query
  const [projectsResult, totalResult] = await Promise.all([
    sanityFetch({
      query: PAGINATED_PROJECTS_QUERY,
      params: { start, end },
      tags: ["sanity-content", "projects"],
    }),
    sanityFetch({
      query: PROJECTS_COUNT_QUERY,
      tags: ["sanity-content", "projects"],
    }),
  ]);

  return {
    projects: projectsResult.data,
    total: totalResult.data,
  };
};

export const getProjects = async (): Promise<PROJECT_CARD_QUERYResult> => {
  const { data } = await sanityFetch({
    query: PORTFOLIOS_QUERY,
    tags: ["sanity-content", "projects"],
  });
  return data;
};

export const getProjectsSlugs = async (): Promise<PORTFOLIOS_SLUGS_QUERYResult> => {
  const { data } = await sanityFetch({
    query: PORTFOLIOS_SLUGS_QUERY,
    tags: ["sanity-content", "projects"],
  });
  return data;
};

// Static version for generateStaticParams - doesn't use draftMode
export const getProjectsSlugsStatic = async (): Promise<PORTFOLIOS_SLUGS_QUERYResult> => {
  const data = await client.fetch(PORTFOLIOS_SLUGS_QUERY);
  return data;
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
  try {
    const { data: projects } = await sanityFetch({
      query: FILTERED_PROJECTS_QUERY,
      params: {
        searchQuery: searchQuery || "",
        category: category === "all" ? "" : category || "",
      },
      tags: ["sanity-content", "projects"],
    });

    return { projects };
  } catch (error) {
    console.error("Error fetching filtered projects:", error);
    throw new Error("Failed to fetch filtered projects");
  }
}

export async function getProjectBySlug(
  slug: string
): Promise<PROJECT_BY_SLUG_QUERYResult> {
  try {
    const { data: project } = await sanityFetch({
      query: PROJECT_BY_SLUG_QUERY,
      params: { slug },
      tags: ["sanity-content", "projects", slug],
    });

    return project;
  } catch (error) {
    console.error("Error fetching project by slug:", error);
    throw new Error("Failed to fetch project by slug");
  }
}

// Static version for generateMetadata - doesn't use draftMode
export async function getProjectBySlugStatic(
  slug: string
): Promise<PROJECT_BY_SLUG_QUERYResult> {
  try {
    const project = await client.fetch(PROJECT_BY_SLUG_QUERY, { slug });
    return project;
  } catch (error) {
    console.error("Error fetching project by slug:", error);
    throw new Error("Failed to fetch project by slug");
  }
}
