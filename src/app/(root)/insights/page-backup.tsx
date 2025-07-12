"use client";

import { Suspense } from "react";

import { useQueryState } from "nuqs";

import { IconCollection } from "@/assets/icons";
import { SectionHeader } from "@/components/ui/section-header";
import { Separator } from "@/components/ui/separator";
import { INSIGHTS } from "@/constants/mock-data";
import { InsightFilters } from "@/features/insights/components/insight-filters";
import { InsightCard } from "@/features/insights/components/insights-card";
import { cn } from "@/lib/utils";

function InsightsContent() {
  const [searchQuery, setSearchQuery] = useQueryState("q");
  const [activeTag, setActiveTag] = useQueryState("tag");

  const filteredInsights = INSIGHTS.filter((insight) => {
    const matchesSearch =
      !searchQuery ||
      insight.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      insight.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTag =
      !activeTag || activeTag === "all" || insight.tag === activeTag;

    return matchesSearch && matchesTag;
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query || null);
  };

  const handleTagChange = (tag: string) => {
    setActiveTag(tag === "all" ? null : tag);
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
          className="bg-muted/40 mb-8 backdrop-blur-2xl"
          initialSearch={searchQuery || ""}
          initialTag={activeTag || "all"}
        />
        <div
          className={cn(
            "grid gap-6",
            "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          )}
        >
          {filteredInsights.map((data) => (
            <div className="h-full p-1" key={data.title}>
              <InsightCard data={data} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default function Insights() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InsightsContent />
    </Suspense>
  );
}
