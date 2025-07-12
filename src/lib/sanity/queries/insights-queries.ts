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

export const FILTERED_INSIGHTS_QUERY = defineQuery(`
  *[_type == "insights" 
    && (!defined($searchQuery) || title match $searchQuery + "*" || excerpt match $searchQuery + "*" || categories->title match $searchQuery + "*") 
    && (!defined($category) || categories->slug.current == $category)   ] | order(_createdAt desc) {
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
    author,
    body,
    seo,
    'createdAt': _createdAt
  }
`);

export const PAGINATED_INSIGHTS_QUERY =
  defineQuery(`*[_type == "insights"] | order(_createdAt desc)[$start..$end]  {
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
    author,
    body,
    seo,
    'createdAt': _createdAt
}`);

export const INSIGHTS_COUNT_QUERY = defineQuery(`
  count(*[_type == "insights"])
`);

export const INSIGHT_CATEGORIES_QUERY = defineQuery(`
  *[_type == "insightCategory"] | order(title asc) {
    _id,
    title,
    "slug": slug.current
  }
`);

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
