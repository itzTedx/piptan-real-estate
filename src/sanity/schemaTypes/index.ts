import { type SchemaTypeDefinition } from "sanity";

import { amenityType } from "./amenityType";
import { authorType } from "./authorType";
import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { descriptionSectionType } from "./descriptionSectionType";
import { projectType } from "./projectType";
import { statType } from "./statType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    projectType,
    authorType,
    statType,
    amenityType,
    descriptionSectionType,
  ],
};
