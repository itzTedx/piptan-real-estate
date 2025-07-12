"use server";

import { sanityFetch } from "@/lib/sanity/lib/live";
import {
  FILTERED_PROJECTS_QUERY,
  PAGINATED_PROJECTS_QUERY,
  PORTFOLIOS_QUERY,
  PROJECTS_COUNT_QUERY,
  PROJECT_BY_SLUG_QUERY,
  PROJECT_CARD_QUERY,
} from "@/lib/sanity/queries/projects-queries";

import {
  FILTERED_PROJECTS_QUERYResult,
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
  pageSize: number = 9
): Promise<{ projects: PROJECT_CARD_QUERYResult; total: number }> => {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;

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
