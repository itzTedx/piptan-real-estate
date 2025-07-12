import { defineQuery } from "next-sanity";

export const PROJECT_CARD_QUERY =
  defineQuery(`*[_type == "project"] | order(_createdAt desc)[0..8]  {
    _id,
    title,
    mainImage{
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
    location,
    isFeatured,
    "category": category->{
      title,
      "slug": slug.current
    },
    "price": stats.price,
    "tags": overview.tags,
    "bedrooms": stats.bedrooms,
    developer,
    "payments": stats.paymentPlan

}`);

export const PORTFOLIOS_QUERY =
  defineQuery(`*[_type == "project"] | order(_createdAt desc)  {
    _id,
    title,
    mainImage{
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
    location,
    isFeatured,
    "category": category->{
      title,
      "slug": slug.current
    },
    "price": stats.price,
    "tags": overview.tags,
    "bedrooms": stats.bedrooms,
    developer,
    "payments": stats.paymentPlan

}`);

export const FILTERED_PROJECTS_QUERY = defineQuery(`
  *[_type == "project" 
    && (!defined($searchQuery) || title match $searchQuery + "*" || location match $searchQuery + "*" || developer match $searchQuery + "*" || description match $searchQuery + "*") 
    && (!defined($category) || category->slug.current == $category)   ]  {
    _id,
    title,
    mainImage{
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
    location,
    developer,
    isFeatured,
    "category": category->{
      title,
      "slug": slug.current
    },
    "price": stats.price,
    tags,
    _updatedAt,
    _createdAt
  }
`);

export const PROJECTS_COUNT_QUERY = defineQuery(`
  count(*[_type == "project"])
`);

export const PAGINATED_PROJECTS_QUERY =
  defineQuery(`*[_type == "project"] | order(_createdAt desc)[$start..$end]  {
    _id,
    title,
    mainImage{
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
    location,
    isFeatured,
    "category": category->{
      title,
      "slug": slug.current
    },
    "price": stats.price,
    "tags": overview.tags,
    "bedrooms": stats.bedrooms,
    developer,
    "payments": stats.paymentPlan

}`);

export const PROJECT_BY_SLUG_QUERY = defineQuery(`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    mainImage{
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
    location,
    developer,
    status,
    "category": category->{
      title,
      "slug": slug.current
    },

    stats,
    shortDescription,
    overview,
    propertyFeatures,
    gallery,
    descriptionSections,
    seo,
    _updatedAt,
    _createdAt,
  }
`);
