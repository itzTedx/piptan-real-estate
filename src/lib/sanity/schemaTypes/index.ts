import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blocks/blockContentType";
import { categoryType } from "./categoryType";
import { developerType } from "./developerType";
import { faqType } from "./faqType";
import { insightCategoryType, insightsType } from "./insightsType";
import { projectType } from "./projects";
import { serviceType } from "./serviceType";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		blockContentType,
		categoryType,
		developerType,
		projectType,
		faqType,
		insightsType,
		insightCategoryType,
		serviceType,
	],
};
