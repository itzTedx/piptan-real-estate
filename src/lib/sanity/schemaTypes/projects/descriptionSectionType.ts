import { defineField, defineType } from "sanity";

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
