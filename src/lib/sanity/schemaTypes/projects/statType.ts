import { defineField, defineType } from "sanity";

export const statType = defineType({
	name: "stat",
	title: "Stat",
	type: "object",
	fields: [
		defineField({
			name: "label",
			type: "string",
			title: "Stat Label",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "stat",
			type: "string",
			title: "Stat Value",
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
				title: `${label} - ${stat}`,
			};
		},
	},
});
