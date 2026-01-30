import { defineQuery } from "next-sanity";

export const PORTFOLIO_CARD_QUERY =
	defineQuery(`*[_type == "project"] | order(_createdAt desc)[0..5]  {
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
    qrCode{
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
    },
    link,
    location,
    isFeatured,
    "category": category->{
      title,
      "slug": slug.current,
    },
    "price": stats.price,
    "tags": overview.tags,
    "bedrooms": stats.bedrooms,
    "developer": developer->{
      name,
      logo,
      "slug": slug.current,
    },
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
    qrCode{
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
    },
    link,
    location,
    isFeatured,
    "category": category->{
      title,
      "slug": slug.current
    },
    "price": stats.price,
    "tags": overview.tags,
    "bedrooms": stats.bedrooms,
    "developer": developer->{
      name,
      logo,
      "slug": slug.current
    },
    "payments": stats.paymentPlan

}`);

export const PORTFOLIOS_LINKS_QUERY =
	defineQuery(`*[_type == "project" && defined(link.current) &&  link.current != null]    {
    _id,
    link,
}`);

export const FILTERED_PROJECTS_QUERY = defineQuery(`
  *[_type == "project" 
    && (!defined($searchQuery) || $searchQuery == "" || title match $searchQuery + "*" || location match $searchQuery + "*" || developer->name match $searchQuery + "*" || description match $searchQuery + "*") 
    && (!defined($category) || $category == "" || category->link.current == $category)   ]  {
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
    qrCode{
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
    },
    link,
    location,
    "developer": developer->{
      name,
      logo,
      "slug": slug.current
    },
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

export const FILTERED_PAGINATED_PROJECTS_QUERY = defineQuery(`
  *[_type == "project" 
    && (!defined($searchQuery) || $searchQuery == "" || title match $searchQuery + "*" || location match $searchQuery + "*" || developer->name match $searchQuery + "*" || shortDescription match $searchQuery + "*") 
    && (!defined($category) || $category == "" || category->link.current == $category)   ] | order(_createdAt desc)[$start..$end]  {
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
    qrCode{
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
    },
    link,
    location,
    isFeatured,
    "category": category->{
      title,
      "slug": slug.current
    },
    "price": stats.price,
    "tags": overview.tags,
    "bedrooms": stats.bedrooms,
    "developer": developer->{
      name,
      logo,
      "slug": slug.current
    },
    "payments": stats.paymentPlan
  }
`);

export const FILTERED_PROJECTS_COUNT_QUERY = defineQuery(`
  count(*[_type == "project" 
    && (!defined($searchQuery) || $searchQuery == "" || title match $searchQuery + "*" || location match $searchQuery + "*" || developer->name match $searchQuery + "*" || shortDescription match $searchQuery + "*") 
    && (!defined($category) || $category == "" || category->link.current == $category)])
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
    qrCode{
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
    },
    link,
    location,
    isFeatured,
    "category": category->{
      title,
      "slug": slug.current
    },
    "price": stats.price,
    "tags": overview.tags,
    "bedrooms": stats.bedrooms,
    "developer": developer->{
      name,
      logo,
      "slug": slug.current
    },
    "payments": stats.paymentPlan

}`);

export const PROJECT_BY_LINK_QUERY = defineQuery(`
  *[_type == "project" && link.current == $link][0] {
    _id,
    title,
    "link": link.current,
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
     qrCode{
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
    },
    location,
    "developer": developer->{
      name,
      logo,
      "link": link.current,
      description,
      website,
      contactInfo
    },
    status,
    "category": category->{
      title,
      "link": link.current
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
