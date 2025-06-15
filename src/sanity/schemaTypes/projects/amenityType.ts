import { defineField, defineType } from "sanity";

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
    defineField({
      name: "offset",
      type: "string",
      title: "CSS Offset",
      description: "CSS class for positioning (e.g., md:mt-[20em])",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
});
