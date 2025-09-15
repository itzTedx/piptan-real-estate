import { defineField, defineType } from "sanity";

import { IconHouse } from "@/app/assets/icons";
import { slugify } from "@/lib/utils";

import { client } from "../lib/client";

async function asyncSlugify(input: string): Promise<string> {
  const slug = slugify(input);
  const query = 'count(*[_type=="developer" && slug.current == $slug]{_id})';
  const params = { slug: slug };
  const count = await client.fetch(query, params);

  if (count === 0) {
    return slug;
  }

  return `${slug}-${count + 1}`;
}

export const developerType = defineType({
  name: "developer",
  title: "Developers",
  type: "document",
  icon: IconHouse,
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Developer Name",
      description: "Enter the name of the developer or development company.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      description:
        "Click 'Generate' to create a URL-friendly version of the developer name.",
      options: {
        source: "name",
        slugify: asyncSlugify,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "logo",
      type: "image",
      title: "Developer Logo",
      description: "Upload the developer's logo. Recommended size: 300x200px.",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Describe the logo for accessibility and SEO.",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "logo",
    },
  },
});
