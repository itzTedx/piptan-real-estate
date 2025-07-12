import { defineQuery } from "next-sanity";

export const INSIGHTS_QUERY = defineQuery(`*[_type == "insights"]  {
    _id,
    title,
    image{
      asset->{
        _id,
        url,
        metadata {
          lqip,
          dimensions {
            width,
            height
          }
        }
      },
      alt
    },
    "slug": slug.current,
    excerpt,
    categories -> ,
    author,
    body,
    seo,
    'createdAt': _createdAt
}`);

export const INSIGHT_BY_SLUG_QUERY =
  defineQuery(`*[_type == "insights" && slug.current == $slug][0] {
    _id,
    title,
    image{
      asset->{
        _id,
        url,
        metadata {
          lqip,
          dimensions {
            width,
            height
          }
        }
      },
      alt
    },
    "slug": slug.current,
    excerpt,
    categories -> {
      _id,
      title,
      "slug": slug.current
    },
    author -> {
      _id,
      name,
      image,
      bio
    },
    body,
    seo,
    'createdAt': _createdAt,
    'updatedAt': _updatedAt
}`);
