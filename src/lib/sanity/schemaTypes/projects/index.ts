import { defineField, defineType } from "sanity";

import { IconHouse } from "@/app/assets/icons";

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

			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "link",
			type: "url",
			group: "hero",
			description:
				"Enter the URL of the project. Example: 'https://oasis.piptan.ae'. This will be used in the page URL.",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "mainImage",
			type: "image",
			group: "hero",
			title: "Hero Image",

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

		// Overview Section
		defineField({
			name: "location",
			type: "string",
			group: "overview",
		}),
		defineField({
			name: "developer",
			type: "reference",
			group: "overview",

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
		}),

		defineField({
			name: "category",
			type: "reference",
			group: "overview",

			to: { type: "category" },
			validation: (Rule) => Rule.required(),
		}),

		defineField({
			name: "shortDescription",
			type: "text",
			group: "overview",
			description:
				"A brief summary to display next to key stats. Example: 'Luxury beachfront apartments with stunning views.'",
		}),

		defineField({
			name: "gallery",
			type: "array",
			group: "content",
			title: "Project Gallery",
			description:
				"Recommended size: 1920x1080px. These images will appear in a gallery on the project page.",
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
