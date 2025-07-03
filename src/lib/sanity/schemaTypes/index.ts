import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blocks/blockContentType";
import { categoryType } from "./categoryType";
import { expertiseType } from "./expertiseType";
import { projectType } from "./projects";
import { amenityType } from "./projects/amenityType";
import { authorType } from "./projects/authorType";
import { descriptionSectionType } from "./projects/descriptionSectionType";
import { statType } from "./projects/statType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    projectType,
    authorType,
    statType,
    amenityType,
    descriptionSectionType,
    expertiseType,
  ],
};
