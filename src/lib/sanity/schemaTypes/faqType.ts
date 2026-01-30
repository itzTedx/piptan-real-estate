import { orderRankField } from "@sanity/orderable-document-list";
import { defineField, defineType } from "sanity";

import { IconCollection } from "@/app/assets/icons";

export const faqType = defineType({
	name: "faq",
	title: "Faq",
	type: "document",

	icon: IconCollection,
	fields: [
		defineField({
			name: "question",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),

		defineField({
			name: "answer",
			type: "text",
			validation: (Rule) => Rule.required(),
		}),

		orderRankField({ type: "expertise" }),
	],
});
