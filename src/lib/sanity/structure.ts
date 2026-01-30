import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S, context) =>
	S.list()
		.title("Manage")
		.items([
			S.listItem()
				.title("Portfolios")
				.child(
					S.documentTypeList("project")
						.title("Portfolio")
						.defaultOrdering([{ field: "_createdAt", direction: "desc" }])
				),
			orderableDocumentListDeskItem({
				type: "category",
				title: "Categories",
				S,
				context,
			}),
			S.documentTypeListItem("developer").title("Developers"),
			// orderableDocumentListDeskItem({
			//   type: "services",
			//   title: "Services",
			//   icon: Star,
			//   S,
			//   context,
			// }),
			S.divider(),
			S.documentTypeListItem("insights").title("Insights"),
			// S.documentTypeListItem("author").title("Authors"),
			S.divider(),
			orderableDocumentListDeskItem({
				type: "faq",
				title: "Faqs",
				S,
				context,
			}),
		]);
