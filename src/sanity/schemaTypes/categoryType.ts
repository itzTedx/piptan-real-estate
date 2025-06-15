import { orderRankField } from "@sanity/orderable-document-list";
import { defineField, defineType } from "sanity";

import { IconCollection } from "@/assets/icons";

export const categoryType = defineType({
  name: "category",
  title: "Category",
  type: "document",

  icon: IconCollection,
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
      },
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "image",
      type: "image",
      description: "Size must be 1280x720",
    }),
    orderRankField({ type: "category" }),
  ],
});
