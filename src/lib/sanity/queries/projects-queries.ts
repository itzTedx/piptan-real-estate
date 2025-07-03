import { defineQuery } from "next-sanity";

export const PROJECT_CARD_QUERY = defineQuery(`*[_type == "project"][0...6]  {
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
    "price": projectDetails.price,
    tags
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
    "price": projectDetails.price,
    tags,
    _updatedAt,
    _createdAt
  }
`);

// export const PROJECTS_COUNT_QUERY = defineQuery(`
//   count(*[_type == "project"
//     && (!defined($searchQuery) || title match $searchQuery + "*" || location match $searchQuery + "*" || description match $searchQuery + "*")
//     && (!defined($category) || category->slug.current == $category)
//     && (!defined($tags) || count((tags[])[@ in $tags]) > 0)
//     && (!defined($minPrice) || float(projectDetails.price) >= $minPrice)
//     && (!defined($maxPrice) || float(projectDetails.price) <= $maxPrice)
//     && (!defined($isFeatured) || isFeatured == $isFeatured)
//   ])
// `);

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
