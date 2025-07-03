import { sanityFetch } from "@/lib/sanity/lib/live";
import { EXPERTISE_QUERY } from "@/lib/sanity/queries/site-queries";

import { EXPERTISE_QUERYResult } from "../../../../sanity.types";

export const getExpertise = async (): Promise<EXPERTISE_QUERYResult> => {
  const { data } = await sanityFetch({
    query: EXPERTISE_QUERY,
    tags: ["sanity-content", "expertise"],
  });
  return data;
};
