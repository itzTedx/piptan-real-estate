"use client";

import { useState } from "react";

import { IconCollection } from "@/assets/icons";
import { SectionHeader } from "@/components/ui/section-header";
import { Separator } from "@/components/ui/separator";
import { INSIGHTS } from "@/constants/mock-data";
import { InsightFilters } from "@/features/insights/components/insight-filters";
import { InsightCard } from "@/features/insights/components/insights-card";
import { cn } from "@/lib/utils";

export default function Insights() {
  const [insights, setInsights] = useState(INSIGHTS);

  const handleSearch = (query: string) => {
    const filtered = INSIGHTS.filter(
      (insight) =>
        insight.title.toLowerCase().includes(query.toLowerCase()) ||
        insight.description.toLowerCase().includes(query.toLowerCase())
    );
    setInsights(filtered);
  };

  const handleTagChange = (tag: string) => {
    if (tag === "all") {
      setInsights(INSIGHTS);
    } else {
      const filtered = INSIGHTS.filter((insight) => insight.tag === tag);
      setInsights(filtered);
    }
  };

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
        <InsightFilters
          onSearch={handleSearch}
          onTagChange={handleTagChange}
          className="bg-muted/40 sticky top-[8%] z-50 mb-8 backdrop-blur-2xl"
        />
        <div
          className={cn(
            "grid gap-6",

            "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          )}
        >
          {insights.map((data) => (
            <div className="h-full p-1" key={data.title}>
              <InsightCard data={data} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
