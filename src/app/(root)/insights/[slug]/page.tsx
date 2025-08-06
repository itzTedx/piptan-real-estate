import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { HeroHeader } from "@/components/hero-header";
import {
  getInsightBySlug,
  getInsightBySlugStatic,
  getInsightsStatic,
} from "@/features/insights/actions/query";
import { InsightContent } from "@/features/insights/components/insight-content";
import { urlFor } from "@/lib/sanity/image";

interface Params {
  slug: string;
}

// Enable caching with revalidation every 5 minutes
export const revalidate = 300;

// Generate static params for all insights
export async function generateStaticParams() {
  try {
    const insights = await getInsightsStatic();

    return insights
      .filter((insight: { slug: string | null }) => insight.slug) // Only include insights with slugs
      .map((insight: { slug: string | null }) => ({
        slug: insight.slug!,
      }));
  } catch (error) {
    console.error("Error generating static params for insights:", error);
    return [];
  }
}

// Generate metadata for the page
export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const insight = await getInsightBySlugStatic(slug);

  if (!insight) {
    return {
      title: "Insight Not Found | Maxline Global",
      description: "The requested insight could not be found.",
    };
  }

  return {
    title: insight.seo?.meta_title || `${insight.title} | Maxline Global`,
    description:
      insight.seo?.meta_description ||
      insight.excerpt ||
      "Expert insights from Maxline Global on international logistics.",
    openGraph: {
      title: insight.seo?.meta_title || `${insight.title} | Maxline Global`,
      description:
        insight.seo?.meta_description ||
        insight.excerpt ||
        "Expert insights from Maxline Global on international logistics.",
      images: insight.seo?.ogImage
        ? [
            {
              url: urlFor(insight.seo.ogImage).url(),
              width: 1200,
              height: 630,
              alt: insight.title || "Insight image",
            },
          ]
        : insight.image?.asset?.url
          ? [
              {
                url: insight.image.asset.url,
                width: insight.image.asset.metadata?.dimensions?.width || 1200,
                height: insight.image.asset.metadata?.dimensions?.height || 630,
                alt: insight.image.alt || insight.title || "Insight image",
              },
            ]
          : [
              {
                url: "/images/blogs/transport-logistics-products.jpg",
                width: 1200,
                height: 630,
                alt: "Transport and logistics products",
              },
            ],
    },
    twitter: {
      card: "summary_large_image",
      title: insight.seo?.meta_title || `${insight.title} | Maxline Global`,
      description:
        insight.seo?.meta_description ||
        insight.excerpt ||
        "Expert insights from Maxline Global on international logistics.",
      images: insight.seo?.ogImage
        ? [urlFor(insight.seo.ogImage).url()]
        : insight.image?.asset?.url
          ? [insight.image.asset.url]
          : ["/images/blogs/transport-logistics-products.jpg"],
    },
  };
}

// Structured data for the article
const generateArticleStructuredData = (insight: {
  title: string | null;
  excerpt: string | null;
  image: {
    asset: {
      url: string | null;
    } | null;
  } | null;
  author: {
    name: string | null;
  } | null;
  createdAt: string;
  updatedAt?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: insight.title,
  description:
    insight.excerpt ||
    "Expert insights from Maxline Global on international logistics.",
  image:
    insight.image?.asset?.url ||
    "/images/blogs/transport-logistics-products.jpg",
  author: insight.author
    ? {
        "@type": "Person",
        name: insight.author.name,
      }
    : {
        "@type": "Organization",
        name: "Maxline Global",
      },
  publisher: {
    "@type": "Organization",
    name: "Maxline Global",
    logo: {
      "@type": "ImageObject",
      url: "/images/logo.png",
    },
  },
  datePublished: insight.createdAt,
  dateModified: insight.updatedAt || insight.createdAt,
});

export default async function InsightsSlugPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const insight = await getInsightBySlug(slug);

  if (!insight) {
    notFound();
  }

  const articleStructuredData = generateArticleStructuredData(insight);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />
      <main className="bg-background relative z-10 container rounded-b-3xl pb-20 shadow-xl">
        <HeroHeader
          className="mx-auto max-w-6xl"
          subtitle="Insights & News"
          title={insight.title || "Insight"}
          titleClassName="lg:text-6xl text-balance"
          description={
            insight.excerpt ||
            "Expert insights from Maxline Global on international logistics."
          }
          descriptionClassName="text-lg"
        />

        {insight.image && (
          <figure className="relative container -mt-12 mb-20 aspect-video max-w-7xl overflow-hidden rounded-3xl">
            <Image
              src={
                insight.image.asset?.url ||
                "/images/blogs/transport-logistics-products.jpg"
              }
              fill
              alt={insight.image.alt || insight.title || "Insight image"}
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
          </figure>
        )}

        <InsightContent data={insight} />
      </main>
    </>
  );
}
