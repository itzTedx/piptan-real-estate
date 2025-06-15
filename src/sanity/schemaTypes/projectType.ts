import { defineArrayMember, defineField, defineType } from "sanity";

import { IconHouse } from "@/assets/icons";
import { slugify } from "@/lib/utils";

import { client } from "../lib/client";

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
    defineField({
      name: "title",
      type: "string",
      group: "hero",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      group: "hero",
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      type: "string",
      group: "overview",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "developer",
      type: "string",
      group: "overview",
    }),
    defineField({
      name: "status",
      type: "string",
      group: "overview",
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
      initialValue: false,
    }),
    defineField({
      name: "categories",
      type: "reference",
      group: "overview",
      to: { type: "category" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tags",
      type: "array",
      group: "overview",
      of: [{ type: "string", name: "tag" }],
    }),
    defineField({
      name: "features",
      type: "array",
      group: "overview",
      title: "Features",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "stats",
      type: "array",
      group: "overview",
      title: "Key Stats",
      of: [{ type: "stat" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      type: "array",
      group: "overview",
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
      group: "overview",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "projectDetails",
      title: "Property Details",
      type: "object",
      group: "details",
      fields: [
        defineField({
          name: "price",
          title: "Price",
          type: "string",
        }),
        defineField({
          name: "bedrooms",
          title: "Number of Bedrooms",
          type: "string",
        }),
        defineField({
          name: "bathrooms",
          title: "Number of Bathrooms",
          type: "string",
        }),
        defineField({
          name: "area",
          title: "Area (sq ft)",
          type: "number",
        }),
        defineField({
          name: "completionDate",
          title: "Expected Completion Date",
          type: "string",
        }),
        defineField({
          name: "propertyType",
          title: "Property Type",
          type: "string",
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
    defineField({
      name: "amenities",
      type: "array",
      group: "content",
      title: "Amenities",
      of: [{ type: "amenity" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "gallery",
      type: "array",
      group: "content",
      title: "Project Gallery",
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
      of: [{ type: "descriptionSection" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "seo",
      type: "object",
      group: "seo",
      fields: [
        defineField({
          name: "title",
          type: "string",
          title: "SEO Title",
        }),
        defineField({
          name: "description",
          type: "text",
          title: "SEO Description",
        }),
        defineField({
          name: "keywords",
          type: "array",
          title: "SEO Keywords",
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
