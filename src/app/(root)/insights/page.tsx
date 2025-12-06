import { Suspense } from "react";

import { IconCollection } from "@/app/assets/icons";
import { SectionHeader } from "@/components/ui/section-header";
import { Separator } from "@/components/ui/separator";
import { getFilteredInsightsWithParams } from "@/features/insights/actions/query";
import { InsightsList } from "@/features/insights/components/insights-list";
import { InsightsListSkeleton } from "@/features/insights/components/insights-list-skeleton";

type SearchParams = Promise<{ q?: string; category?: string }>;

// Enable caching with revalidation every 5 minutes
export const revalidate = 300;
export const dynamic = "force-static";

export default function InsightsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
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
        <Suspense
          fallback={
            <div className="space-y-8">
              <InsightsListSkeleton />
              <div className="text-muted-foreground text-center">
                <p>Searching insights...</p>
              </div>
            </div>
          }
        >
          <Insights searchParams={searchParams} />
        </Suspense>
      </section>
    </main>
  );
}

export async function Insights({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const searchParam = await searchParams;

  const { insights, categories } =
    await getFilteredInsightsWithParams(searchParam);

  return <InsightsList categories={categories} initialInsights={insights} />;
}
