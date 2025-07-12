import { Suspense } from "react";

import { IconCollection } from "@/assets/icons";
import { SectionHeader } from "@/components/ui/section-header";
import { Separator } from "@/components/ui/separator";
import {
  getInsightCategories,
  getInsights,
} from "@/features/insights/actions/query";
import { InsightsList } from "@/features/insights/components/insights-list";
import { InsightsListSkeleton } from "@/features/insights/components/insights-list-skeleton";

export default async function InsightsContent() {
  const [allInsights, categories] = await Promise.all([
    getInsights(),
    getInsightCategories(),
  ]);

  return (
    <main className="container space-y-12 pt-4 sm:pt-9 md:pt-12">
      <section>
        <SectionHeader
          badge="Insights"
          title="All the Essentials to Begin Your Property Journey with Piptan"
          subtitle="Explore market trends, property tips, and investment updates to help you stay ahead in the real estate world with confidence."
          icon={<IconCollection className="size-3 sm:size-4" />}
          hasHighlight
          highlightText="Property Journey with Piptan"
        />
      </section>
      <Separator />
      <section className="mb-20">
        <Suspense fallback={<InsightsListSkeleton />}>
          <InsightsList categories={categories} initialInsights={allInsights} />
        </Suspense>
      </section>
    </main>
  );
}
