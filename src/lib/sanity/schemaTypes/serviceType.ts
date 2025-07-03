import { orderRankField } from "@sanity/orderable-document-list";
import { Star } from "lucide-react";
import { defineField, defineType } from "sanity";

export const serviceType = defineType({
  name: "services",
  title: "Services",
  icon: Star,
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    orderRankField({ type: "services" }),
  ],
});
