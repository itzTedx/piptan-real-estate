// Query TypeMap
import "@sanity/client";

/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type Services = {
  _id: string;
  _type: "services";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  description?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  orderRank?: string;
};

export type Insights = {
  _id: string;
  _type: "insights";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  excerpt?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  categories?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "insightCategory";
  };
  author?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "author";
  };
  body?: Array<
    | {
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: "span";
          _key: string;
        }>;
        style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
        listItem?: "bullet" | "number";
        markDefs?: Array<{
          href?: string;
          _type: "link";
          _key: string;
        }>;
        level?: number;
        _type: "block";
        _key: string;
      }
    | {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        media?: unknown;
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        alt?: string;
        _type: "image";
        _key: string;
      }
  >;
  seo?: {
    meta_title?: string;
    meta_description?: string;
    meta_keywords?: string;
    ogImage?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      media?: unknown;
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    };
  };
};

export type InsightCategory = {
  _id: string;
  _type: "insightCategory";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
};

export type Expertise = {
  _id: string;
  _type: "expertise";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  description?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  orderRank?: string;
};

export type DescriptionSection = {
  _type: "descriptionSection";
  title?: string;
  content?: string;
};

export type Amenity = {
  _type: "amenity";
  title?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
};

export type Stat = {
  _type: "stat";
  label?: string;
  stat?: string;
};

export type Author = {
  _id: string;
  _type: "author";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  bio?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal";
    listItem?: never;
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type Project = {
  _id: string;
  _type: "project";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  mainImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  location?: string;
  developer?: string;
  status?: "available" | "sold" | "coming-soon";
  isFeatured?: boolean;
  category?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "category";
  };
  stats?: {
    price?: string;
    bedrooms?: string;
    furnished?: boolean;
    area?: number;
    completionDate?: string;
    otherStats?: Array<
      {
        _key: string;
      } & Stat
    >;
  };
  shortDescription?: string;
  overview?: {
    title?: string;
    description?: string;
    tags?: Array<string>;
  };
  propertyFeatures?: {
    description?: Array<{
      children?: Array<{
        marks?: Array<string>;
        text?: string;
        _type: "span";
        _key: string;
      }>;
      style?: "normal";
      listItem?: never;
      markDefs?: Array<{
        href?: string;
        _type: "link";
        _key: string;
      }>;
      level?: number;
      _type: "block";
      _key: string;
    }>;
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      media?: unknown;
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    };
    features?: Array<string>;
    amenities?: Array<
      {
        _key: string;
      } & Amenity
    >;
  };
  gallery?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }>;
  descriptionSections?: Array<
    {
      _key: string;
    } & DescriptionSection
  >;
  seo?: {
    title?: string;
    description?: string;
    keywords?: Array<string>;
  };
};

export type Category = {
  _id: string;
  _type: "category";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  description?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  orderRank?: string;
};

export type BlockContent = Array<
  | {
      children?: Array<{
        marks?: Array<string>;
        text?: string;
        _type: "span";
        _key: string;
      }>;
      style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
      listItem?: "bullet" | "number";
      markDefs?: Array<{
        href?: string;
        _type: "link";
        _key: string;
      }>;
      level?: number;
      _type: "block";
      _key: string;
    }
  | {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      media?: unknown;
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
      _key: string;
    }
>;

export type MediaTag = {
  _id: string;
  _type: "media.tag";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: Slug;
};

export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type AllSanitySchemaTypes =
  | Services
  | Insights
  | InsightCategory
  | Expertise
  | DescriptionSection
  | Amenity
  | Stat
  | Author
  | Project
  | Category
  | BlockContent
  | MediaTag
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | SanityImageHotspot
  | SanityImageCrop
  | SanityFileAsset
  | SanityImageAsset
  | SanityImageMetadata
  | Geopoint
  | Slug
  | SanityAssetSourceData;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./src/lib/sanity/queries/categories-queries.ts
// Variable: CATEGORIES_QUERY
// Query: *[_type == "category"] | order(orderRank) {    _id,    title,    image,    "slug": slug.current,    description}
export type CATEGORIES_QUERYResult = Array<{
  _id: string;
  title: string | null;
  image: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  } | null;
  slug: string | null;
  description: string | null;
}>;

// Source: ./src/lib/sanity/queries/projects-queries.ts
// Variable: PROJECT_CARD_QUERY
// Query: *[_type == "project"][0...6]  {    _id,    title,    mainImage{      asset->{        _id,        url,        metadata {          lqip,          dimensions {            width,            height          }        }      },      alt    },    "slug": slug.current,    location,    isFeatured,    "category": category->{      title,      "slug": slug.current    },    "price": stats.price,    "tags": overview.tags}
export type PROJECT_CARD_QUERYResult = Array<{
  _id: string;
  title: string | null;
  mainImage: {
    asset: {
      _id: string;
      url: string | null;
      metadata: {
        lqip: string | null;
        dimensions: {
          width: number | null;
          height: number | null;
        } | null;
      } | null;
    } | null;
    alt: string | null;
  } | null;
  slug: string | null;
  location: string | null;
  isFeatured: boolean | null;
  category: {
    title: string | null;
    slug: string | null;
  } | null;
  price: string | null;
  tags: Array<string> | null;
}>;
// Variable: FILTERED_PROJECTS_QUERY
// Query: *[_type == "project"     && (!defined($searchQuery) || title match $searchQuery + "*" || location match $searchQuery + "*" || developer match $searchQuery + "*" || description match $searchQuery + "*")     && (!defined($category) || category->slug.current == $category)   ]  {    _id,    title,    mainImage{      asset->{        _id,        url,        metadata {          lqip,          dimensions {            width,            height          }        }      },      alt    },    "slug": slug.current,    location,    developer,    isFeatured,    "category": category->{      title,      "slug": slug.current    },    "price": stats.price,    tags,    _updatedAt,    _createdAt  }
export type FILTERED_PROJECTS_QUERYResult = Array<{
  _id: string;
  title: string | null;
  mainImage: {
    asset: {
      _id: string;
      url: string | null;
      metadata: {
        lqip: string | null;
        dimensions: {
          width: number | null;
          height: number | null;
        } | null;
      } | null;
    } | null;
    alt: string | null;
  } | null;
  slug: string | null;
  location: string | null;
  developer: string | null;
  isFeatured: boolean | null;
  category: {
    title: string | null;
    slug: string | null;
  } | null;
  price: string | null;
  tags: null;
  _updatedAt: string;
  _createdAt: string;
}>;
// Variable: PROJECT_BY_SLUG_QUERY
// Query: *[_type == "project" && slug.current == $slug][0] {    _id,    title,    "slug": slug.current,    mainImage{      asset->{        _id,        url,        metadata {          lqip,          dimensions {            width,            height          }        }      },      alt    },    location,    developer,    status,    "category": category->{      title,      "slug": slug.current    },    stats,    shortDescription,    overview,    propertyFeatures,    gallery,    descriptionSections,    seo,    _updatedAt,    _createdAt,  }
export type PROJECT_BY_SLUG_QUERYResult = {
  _id: string;
  title: string | null;
  slug: string | null;
  mainImage: {
    asset: {
      _id: string;
      url: string | null;
      metadata: {
        lqip: string | null;
        dimensions: {
          width: number | null;
          height: number | null;
        } | null;
      } | null;
    } | null;
    alt: string | null;
  } | null;
  location: string | null;
  developer: string | null;
  status: "available" | "coming-soon" | "sold" | null;
  category: {
    title: string | null;
    slug: string | null;
  } | null;
  stats: {
    price?: string;
    bedrooms?: string;
    furnished?: boolean;
    area?: number;
    completionDate?: string;
    otherStats?: Array<
      {
        _key: string;
      } & Stat
    >;
  } | null;
  shortDescription: string | null;
  overview: {
    title?: string;
    description?: string;
    tags?: Array<string>;
  } | null;
  propertyFeatures: {
    description?: Array<{
      children?: Array<{
        marks?: Array<string>;
        text?: string;
        _type: "span";
        _key: string;
      }>;
      style?: "normal";
      listItem?: never;
      markDefs?: Array<{
        href?: string;
        _type: "link";
        _key: string;
      }>;
      level?: number;
      _type: "block";
      _key: string;
    }>;
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      media?: unknown;
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    };
    features?: Array<string>;
    amenities?: Array<
      {
        _key: string;
      } & Amenity
    >;
  } | null;
  gallery: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
    _key: string;
  }> | null;
  descriptionSections: Array<
    {
      _key: string;
    } & DescriptionSection
  > | null;
  seo: {
    title?: string;
    description?: string;
    keywords?: Array<string>;
  } | null;
  _updatedAt: string;
  _createdAt: string;
} | null;

// Source: ./src/lib/sanity/queries/site-queries.ts
// Variable: EXPERTISE_QUERY
// Query: *[_type == "expertise"] | order(orderRank) {    _id,    title,    image,    description,    "slug": slug.current,}
export type EXPERTISE_QUERYResult = Array<{
  _id: string;
  title: string | null;
  image: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  } | null;
  description: string | null;
  slug: string | null;
}>;

declare module "@sanity/client" {
  interface SanityQueries {
    '*[_type == "category"] | order(orderRank) {\n    _id,\n    title,\n    image,\n    "slug": slug.current,\n    description\n}': CATEGORIES_QUERYResult;
    '*[_type == "project"][0...6]  {\n    _id,\n    title,\n    mainImage{\n      asset->{\n        _id,\n        url,\n        metadata {\n          lqip,\n          dimensions {\n            width,\n            height\n          }\n        }\n      },\n      alt\n    },\n    "slug": slug.current,\n    location,\n    isFeatured,\n    "category": category->{\n      title,\n      "slug": slug.current\n    },\n    "price": stats.price,\n    "tags": overview.tags\n}': PROJECT_CARD_QUERYResult;
    '\n  *[_type == "project" \n    && (!defined($searchQuery) || title match $searchQuery + "*" || location match $searchQuery + "*" || developer match $searchQuery + "*" || description match $searchQuery + "*") \n    && (!defined($category) || category->slug.current == $category)   ]  {\n    _id,\n    title,\n    mainImage{\n      asset->{\n        _id,\n        url,\n        metadata {\n          lqip,\n          dimensions {\n            width,\n            height\n          }\n        }\n      },\n      alt\n    },\n    "slug": slug.current,\n    location,\n    developer,\n    isFeatured,\n    "category": category->{\n      title,\n      "slug": slug.current\n    },\n    "price": stats.price,\n    tags,\n    _updatedAt,\n    _createdAt\n  }\n': FILTERED_PROJECTS_QUERYResult;
    '\n  *[_type == "project" && slug.current == $slug][0] {\n    _id,\n    title,\n    "slug": slug.current,\n    mainImage{\n      asset->{\n        _id,\n        url,\n        metadata {\n          lqip,\n          dimensions {\n            width,\n            height\n          }\n        }\n      },\n      alt\n    },\n    location,\n    developer,\n    status,\n    "category": category->{\n      title,\n      "slug": slug.current\n    },\n\n    stats,\n    shortDescription,\n    overview,\n    propertyFeatures,\n    gallery,\n    descriptionSections,\n    seo,\n    _updatedAt,\n    _createdAt,\n  }\n': PROJECT_BY_SLUG_QUERYResult;
    '*[_type == "expertise"] | order(orderRank) {\n    _id,\n    title,\n    image,\n    description,\n    "slug": slug.current,\n}': EXPERTISE_QUERYResult;
  }
}
