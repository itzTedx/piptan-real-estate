import { defineQuery } from "next-sanity";

export const CATEGORIES_QUERY =
  defineQuery(`*[_type == "category"] | order(orderRank) {
    _id,
    title,
    image,
    "slug": slug.current,
    description,
    _updatedAt,
}`);
