import { defineQuery } from "next-sanity";

export const EXPERTISE_QUERY =
  defineQuery(`*[_type == "expertise"] | order(orderRank) {
    _id,
    title,
    image,
    description,
    "slug": slug.current,
}`);
