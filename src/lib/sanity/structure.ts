import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S, context) =>
  S.list()
    .title("Manage")
    .items([
      S.listItem()
        .title("Listings")
        .child(
          S.list()
            .title("Manage Listings")
            .items([
              S.listItem()
                .title("Projects")
                .schemaType("project")
                .child(
                  S.documentTypeList("project")
                    .title("Project")
                    .defaultOrdering([
                      { field: "_createdAt", direction: "desc" },
                    ]) // Default ordering
                ),
              orderableDocumentListDeskItem({
                type: "category",
                title: "Categories",
                S,
                context,
              }),
            ])
        ),

      S.documentTypeListItem("author").title("Authors"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !["project", "category", "author"].includes(item.getId()!)
      ),
    ]);

export const structureTest: StructureResolver = (S, context) =>
  S.list()
    .title("Manage")
    .items([
      S.listItem()
        .title("Listings")
        .child(
          S.list()
            .title("Manage Listings")
            .items([
              S.listItem()
                .title("Projects")
                .schemaType("project")
                .child(
                  S.documentTypeList("project")
                    .title("Project")
                    .defaultOrdering([
                      { field: "_createdAt", direction: "desc" },
                    ]) // Default ordering
                ),
              orderableDocumentListDeskItem({
                type: "category",
                title: "Categories",
                S,
                context,
              }),
            ])
        ),

      S.listItem()
        .title("Projects")
        .child(
          S.list()
            .title("Manage Projects")
            .items([
              orderableDocumentListDeskItem({
                type: "projectsCarousel",
                title: "Carousel",
                S,
                context,
              }),
              orderableDocumentListDeskItem({
                type: "projects",
                title: "Projects",
                S,
                context,
              }),
            ])
        ),

      S.listItem()
        .title("Certifications")
        .schemaType("certifications")
        .child(
          S.documentTypeList("certifications")
            .title("Certification")
            .defaultOrdering([{ field: "_createdAt", direction: "desc" }]) // Default ordering
        ),

      orderableDocumentListDeskItem({
        type: "gallery",
        title: "Gallery",
        S,
        context,
      }),
      S.divider(),
      S.listItem()
        .title("Posts")
        .schemaType("posts")
        .child(
          S.documentTypeList("posts")
            .title("Post")
            .defaultOrdering([{ field: "_createdAt", direction: "desc" }]) // Default ordering
        ),
      S.listItem()
        .title("Faqs")
        .schemaType("helpArticle")
        .child(
          S.documentTypeList("helpArticle")
            .title("Frequently Asked Quetions")
            .defaultOrdering([{ field: "_createdAt", direction: "desc" }]) // Default ordering
        ),
    ]);
