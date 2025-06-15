import { defineArrayMember, defineField, defineType } from "sanity";

import { IconHouse } from "@/assets/icons";
import { slugify } from "@/lib/utils";

import { client } from "../../lib/client";

async function asyncSlugify(input: string): Promise<string> {
  const slug = slugify(input);
  const query = 'count(*[_type=="projects" && slug.current == $slug]{_id})';
  const params = { slug: slug };
  const count = await client.fetch(query, params);

  if (count === 0) {
    return slug;
  }

  return `${slug}-${count + 1}`;
}

// Feature Schema
export const featureType = defineType({
  name: "feature",
  title: "Feature",
  type: "string",
});

// Stat Schema
export const statType = defineType({
  name: "stat",
  title: "Stat",
  type: "object",
  fields: [
    defineField({
      name: "stat",
      type: "string",
      title: "Stat Value",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "label",
      type: "string",
      title: "Stat Label",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      stat: "stat",
      label: "label",
    },
    prepare({ stat, label }) {
      return {
        title: `${stat} - ${label}`,
      };
    },
  },
});

// Amenity Schema
export const amenityType = defineType({
  name: "amenity",
  title: "Amenity",
  type: "object",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
});

// Description Section Schema
export const descriptionSectionType = defineType({
  name: "descriptionSection",
  title: "Description Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Section Title",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "content",
      type: "text",
      title: "Content",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});

// Main Project Schema
export const projectType = defineType({
  name: "project",
  title: "Projects",
  type: "document",
  icon: IconHouse,
  groups: [
    {
      name: "hero",
      title: "Hero",
    },
    {
      name: "overview",
      title: "Overview",
    },
    {
      name: "details",
      title: "Property Details",
    },
    {
      name: "content",
      title: "Content",
    },
    {
      name: "seo",
      title: "SEO",
    },
  ],
  fields: [
    // Hero Section
    defineField({
      name: "title",
      type: "string",
      group: "hero",
      description:
        "The main title of the project (e.g., 'Nova Pearl Residences')",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      group: "hero",
      description:
        "Click the 'Generate' button to automatically create a URL-friendly version of the title.",
      options: {
        source: "title",
        slugify: asyncSlugify,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mainImage",
      type: "image",
      group: "hero",
      description:
        "The main hero image that represents the project (recommended size: 1920x1080px)",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Description of the image for accessibility and SEO",
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),

    // Overview Section
    defineField({
      name: "location",
      type: "string",
      group: "overview",
      description:
        "The project's location (e.g., 'Jumeirah Beach Residence, Dubai')",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "developer",
      type: "string",
      group: "overview",
      description:
        "The name of the project developer (e.g., 'Emaar Properties')",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "status",
      type: "string",
      group: "overview",
      description: "Current availability status of the project",
      options: {
        list: [
          { title: "Available", value: "available" },
          { title: "Sold Out", value: "sold" },
          { title: "Coming Soon", value: "coming-soon" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "isFeatured",
      type: "boolean",
      group: "overview",
      title: "Featured Project",
      description: "Toggle to highlight this project as a featured property",
      initialValue: false,
    }),
    defineField({
      name: "categories",
      type: "reference",
      group: "overview",
      description:
        "The main category this project belongs to (e.g., 'Luxury', 'Waterfront')",
      to: { type: "category" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tags",
      type: "array",
      group: "overview",
      description: "Keywords that help categorize and filter the project",
      of: [{ type: "string", name: "tag" }],
    }),
    defineField({
      name: "features",
      type: "array",
      group: "overview",
      title: "Features",
      description:
        "Key features of the project (e.g., 'Waterfront', 'Private Beach', 'Smart Home')",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "stats",
      type: "array",
      group: "overview",
      title: "Key Stats",
      description:
        "Important statistics about the project (e.g., price, area, completion date)",
      of: [{ type: "stat" }],
      validation: (Rule) => Rule.required(),
    }),

    // Property Details Section
    defineField({
      name: "projectDetails",
      title: "Property Details",
      type: "object",
      group: "details",
      description: "Detailed specifications of the property",
      fields: [
        defineField({
          name: "price",
          title: "Price",
          type: "string",
          description: "Starting price of the property (e.g., 'AED 42M')",
        }),
        defineField({
          name: "bedrooms",
          title: "Number of Bedrooms",
          type: "string",
          description: "Number of bedrooms (e.g., '2-5' or '8-9')",
        }),
        defineField({
          name: "bathrooms",
          title: "Number of Bathrooms",
          type: "string",
          description: "Number of bathrooms (e.g., '2-3' or '8-9')",
        }),
        defineField({
          name: "area",
          title: "Area (sq ft)",
          type: "number",
          description: "Total area of the property in square feet",
        }),
        defineField({
          name: "completionDate",
          title: "Expected Completion Date",
          type: "string",
          description: "Expected completion date (e.g., 'Q1 2029')",
        }),
        defineField({
          name: "propertyType",
          title: "Property Type",
          type: "string",
          description: "The type of property (e.g., Apartment, Villa, etc.)",
          options: {
            list: [
              { title: "Apartment", value: "apartment" },
              { title: "Villa", value: "villa" },
              { title: "Townhouse", value: "townhouse" },
              { title: "Penthouse", value: "penthouse" },
            ],
          },
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    // Content Section
    defineField({
      name: "description",
      type: "array",
      group: "content",
      description:
        "Rich text description of the project with formatting options",
      of: [
        defineArrayMember({
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "overview",
      type: "text",
      group: "content",
      description: "A brief overview or summary of the project",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "amenities",
      type: "array",
      group: "content",
      title: "Amenities",
      description: "List of amenities and facilities available in the project",
      of: [{ type: "amenity" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "gallery",
      type: "array",
      group: "content",
      title: "Project Gallery",
      description:
        "Collection of images showcasing the project (recommended size: 1920x1080px)",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
              description: "Description of the image for accessibility and SEO",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "descriptionSections",
      type: "array",
      group: "content",
      title: "Description Sections",
      description:
        "Detailed sections about the project (e.g., Description, Benefits, Investment Potential)",
      of: [{ type: "descriptionSection" }],
      validation: (Rule) => Rule.required(),
    }),

    // SEO Section
    defineField({
      name: "seo",
      type: "object",
      group: "seo",
      description: "Search engine optimization settings for better visibility",
      fields: [
        defineField({
          name: "title",
          type: "string",
          title: "SEO Title",
          description:
            "Title tag for search engines (if empty, project title will be used)",
        }),
        defineField({
          name: "description",
          type: "text",
          title: "SEO Description",
          description:
            "Meta description for search engines (if empty, project overview will be used)",
        }),
        defineField({
          name: "keywords",
          type: "array",
          title: "SEO Keywords",
          description: "Keywords for search engine optimization",
          of: [{ type: "string" }],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      developer: "developer",
      status: "status",
      media: "mainImage",
    },
    prepare(selection) {
      const { developer, status } = selection;
      return {
        ...selection,
        subtitle: `${developer ? `by ${developer}` : ""} ${status ? `• ${status}` : ""}`,
      };
    },
  },
});
