import { defineField, defineType } from "sanity";

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
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        slugify: asyncSlugify,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      type: "string",
    }),
    defineField({
      name: "developer",
      type: "string",
    }),

    defineField({
      name: "mainImage",
      type: "image",
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
    defineField({
      name: "categories",
      type: "reference",
      to: { type: "category" },
    }),

    defineField({
      name: "stats",
      type: "array",
      title: "Stats",
      of: [
        {
          type: "object",
          name: "pair",
          fields: [
            {
              name: "label",
              type: "string",
              title: "Label",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "value",
              type: "string",
              title: "Value",
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              label: "label",
              value: "value",
            },
            prepare({ label, value }) {
              return {
                title: `${label}: ${value}`,
              };
            },
          },
        },
      ],
    }),

    defineField({
      name: "description",
      type: "text",
    }),

    defineField({
      name: "overview",
      type: "text",
    }),

    defineField({
      name: "tags",
      type: "array",
      of: [{ type: "string", name: "tag" }],
    }),

    // Project Details Section
    defineField({
      name: "projectDetails",
      title: "Project Details",
      type: "object",
      fields: [
        defineField({
          name: "price",
          title: "Price",
          type: "string",
        }),
        defineField({
          name: "bedrooms",
          title: "Number of Bedrooms",
          type: "number",
        }),
        defineField({
          name: "bathrooms",
          title: "Number of Bathrooms",
          type: "number",
        }),
        defineField({
          name: "area",
          title: "Area (sq ft)",
          type: "number",
        }),
        defineField({
          name: "completionDate",
          title: "Expected Completion Date",
          type: "date",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      developer: "developer",
      media: "mainImage",
    },
    prepare(selection) {
      const { developer } = selection;
      return { ...selection, subtitle: developer && `by ${developer}` };
    },
  },
});
