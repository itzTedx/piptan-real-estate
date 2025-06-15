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
