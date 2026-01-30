import { FileText } from "lucide-react";
import { defineField, defineType } from "sanity";

// --- Insight Category Schema ---
export const insightCategoryType = defineType({
	name: "insightCategory",
	title: "Insight Category",
	type: "document",
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
	],
});

export const insightsType = defineType({
	name: "insights",
	title: "Insights",
	type: "document",
	icon: FileText,
	groups: [
		{
			name: "content",
			title: "Content",
		},
		{
			name: "seo",
			title: "SEO",
		},
		{
			name: "settings",
			title: "Settings",
		},
	],
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
			group: "content",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			group: "settings",
			options: {
				source: "title",
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "excerpt",
			title: "Excerpt",
			type: "text",
			group: "content",
		}),

		defineField({
			name: "image",
			title: "Image",
			type: "image",
			group: "settings",
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
		defineField({
			name: "categories",
			title: "Categories",
			type: "reference",
			group: "settings",
			to: { type: "insightCategory" },
		}),
		defineField({
			name: "author",
			title: "Author",
			type: "reference",
			to: [{ type: "author" }],
			group: "settings",
		}),
		defineField({
			name: "body",
			title: "Body",
			type: "blockContent",
			group: "content",
		}),
		defineField({
			name: "seo",
			type: "object",
			group: "seo",
			description: "Search engine optimization settings for better visibility",
			fields: [
				defineField({
					name: "meta_title",
					title: "Meta Title",
					type: "string",
				}),
				defineField({
					name: "meta_description",
					title: "Meta Description",
					type: "text",
				}),
				defineField({
					name: "meta_keywords",
					title: "Meta Keywords",
					description: "Separate Keywords using comma",
					type: "text",
				}),

				defineField({
					name: "ogImage",
					title: "Open Graph Image - [1200x630]",
					type: "image",
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
