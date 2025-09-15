import { defineArrayMember, defineField, defineType } from "sanity";

import { IconHouse } from "@/app/assets/icons";
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
  title: "Portfolios",
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
        "Enter the main name of the project. Example: 'Nova Pearl Residences'. This will be shown as the headline.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      group: "hero",
      description:
        "Click 'Generate' to create a URL-friendly version of the title. This will be used in the page URL.",
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
      title: "Hero Image",
      description:
        "Upload the main image representing the project. Recommended size: 1920x1080px. This image appears at the top of the project page.",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
          description:
            "Describe the image for accessibility and SEO. Example: 'Front view of Nova Pearl Residences'.",
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
        "Specify the project's location. Example: 'Jumeirah Beach Residence, Dubai'.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "developer",
      type: "reference",
      group: "overview",
      description:
        "Select the developer or development company behind this project.",
      to: { type: "developer" },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "status",
      type: "string",
      group: "overview",
      description:
        "Select the current sales status of the project (e.g., Available, Sold Out, Coming Soon).",
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
      description:
        "Enable this to highlight the project as a featured property on the website.",
      initialValue: false,
    }),
    defineField({
      name: "category",
      type: "reference",
      group: "overview",
      description:
        "Select the main category for this project. Example: 'Luxury', 'Waterfront', etc.",
      to: { type: "category" },
      validation: (Rule) => Rule.required(),
    }),

    // Property Details Section
    defineField({
      name: "stats",
      title: "Property Details",
      type: "object",
      group: "details",
      description:
        "Enter the main specifications and statistics for the property (e.g., price, bedrooms, area, etc.).",
      fields: [
        defineField({
          name: "price",
          title: "Price",
          type: "string",
          description:
            "Enter the starting price of the property. Example: '1,200,000'.",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "bedrooms",
          title: "Number of Bedrooms",
          type: "string",
          description:
            "Specify the number of bedrooms. Example: '2-5' or '8-9'.",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "furnished",
          title: "Furnished",
          type: "boolean",
          description: "Is the property furnished? Enable if yes.",
          initialValue: false,
        }),
        defineField({
          name: "area",
          title: "Area (sq ft)",
          type: "number",
          description:
            "Total area of the property in square feet. Example: 2500.",
        }),
        defineField({
          name: "completionDate",
          title: "Expected Completion Date",
          type: "string",
          description:
            "When is the property expected to be completed? Example: 'Q1 2029'.",
        }),
        defineField({
          name: "paymentPlan",
          title: "Payment Plan",
          type: "string",
          description:
            "Payment structure and schedule for the property. Example: '10/40/50'.",
        }),

        defineField({
          name: "otherStats",
          type: "array",
          title: "Other Key Stats",
          description:
            "Add any additional statistics about the project (e.g., 'Parking Spaces: 2').",
          of: [{ type: "stat" }],
        }),
      ],
    }),
    defineField({
      name: "shortDescription",
      type: "text",
      group: "overview",
      description:
        "A brief summary to display next to key stats. Example: 'Luxury beachfront apartments with stunning views.'",
    }),
    defineField({
      name: "overview",
      title: "Property Overview",
      type: "object",
      group: "details",
      description:
        "Write a short overview of the property, including its main selling points.",
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
          description:
            "Section heading for the overview. Example: 'Unlock your dream lifestyle'.",
          initialValue: "Unlock your dream lifestyle",
        }),
        defineField({
          name: "description",
          type: "text",
          description: "A concise summary or introduction to the project.",
        }),
        defineField({
          name: "tags",
          type: "array",
          description:
            "Add keywords to help categorize and filter the project. Example: ['Luxury', 'Beachfront', 'Family'].",
          of: [{ type: "string", name: "tag" }],
        }),
      ],
    }),
    defineField({
      name: "propertyFeatures",
      title: "Property Features",
      type: "object",
      group: "content",
      description: "Describe the main features and amenities of the property.",

      fields: [
        defineField({
          name: "description",
          type: "array",
          description:
            "Write a detailed, formatted description of the project. You can use rich text formatting.",
          of: [
            defineArrayMember({
              type: "block",
              styles: [{ title: "Normal", value: "normal" }],
              lists: [],
            }),
          ],
        }),
        defineField({
          name: "image",
          type: "image",
          title: "Image",
          description:
            "Upload an image that illustrates the property's features.",
        }),
        defineField({
          name: "features",
          type: "array",
          title: "Key Features",
          description:
            "List the main features of the project. Example: 'Waterfront', 'Private Beach', 'Smart Home'.",
          of: [{ type: "string", initialValue: "" }],
        }),
        defineField({
          name: "amenities",
          type: "array",
          title: "Amenities",
          description:
            "List all amenities and facilities available in the project. Example: 'Gym', 'Swimming Pool', 'Children's Play Area'.",
          of: [{ type: "amenity" }],
        }),
      ],
    }),

    defineField({
      name: "gallery",
      type: "array",
      group: "content",
      title: "Project Gallery",
      description:
        "Upload a collection of images that showcase the project. Recommended size: 1920x1080px. These images will appear in a gallery on the project page.",
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
              description:
                "Describe the image for accessibility and SEO. Example: 'Aerial view of the project site'.",
            },
          ],
        },
      ],
      options: {
        sortable: true,
        layout: "grid",
        modal: { type: "popover" },
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "descriptionSections",
      type: "array",
      group: "content",
      title: "Description Sections",
      description:
        "Add detailed sections about the project, such as Description, Benefits, or Investment Potential. Each section can have a title and content.",
      of: [{ type: "descriptionSection" }],
      validation: (Rule) => Rule.required(),
    }),

    // SEO Section
    defineField({
      name: "seo",
      type: "object",
      group: "seo",
      description:
        "Set up SEO settings to improve the project's visibility in search engines.",
      fields: [
        defineField({
          name: "title",
          type: "string",
          title: "SEO Title",
          description:
            "Custom title tag for search engines. If left empty, the project title will be used.",
        }),
        defineField({
          name: "description",
          type: "text",
          title: "SEO Description",
          description:
            "Meta description for search engines. If left empty, the project overview will be used.",
        }),
        defineField({
          name: "keywords",
          type: "array",
          title: "SEO Keywords",
          description:
            "Add keywords to help search engines find this project. Example: ['Dubai', 'Luxury', 'Apartments'].",
          of: [{ type: "string" }],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      developer: "developer.name",
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
