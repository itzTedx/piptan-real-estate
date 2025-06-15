import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import type { StructureResolver } from "sanity/structure";

import { IconCollection } from "@/assets/icons";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S, context) =>
  S.list()
    .title("Projects")
    .items([
      S.documentTypeListItem("project").title("Projects"),
      orderableDocumentListDeskItem({
        type: "category",
        title: "Categories",
        S,
        context,
        icon: IconCollection,
      }),

      S.documentTypeListItem("author").title("Authors"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !["project", "category", "author"].includes(item.getId()!)
      ),
    ]);
