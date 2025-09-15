import { orderRankField } from "@sanity/orderable-document-list";
import { defineField, defineType } from "sanity";

import { IconCollection } from "@/app/assets/icons";

export const categoryType = defineType({
  name: "category",
  title: "Category",
  type: "document",

  icon: IconCollection,
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      type: "image",
      description: "Size must be 1280x720",
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
          description: "Important for SEO and accessibility.",
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
    orderRankField({ type: "category" }),
  ],
});
