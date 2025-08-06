import type { Metadata } from "next";

import { AboutSection } from "@/features/home/section/about";
import { ExpertiseSection } from "@/features/home/section/expertise";
import { FaqSection } from "@/features/home/section/faq";
import { FeaturesSection } from "@/features/home/section/features";
import { InsightsSection } from "@/features/home/section/insights";
import { ProjectsSection } from "@/features/home/section/projects";
import { Testimonials } from "@/features/home/section/testimonials";
import { WhyUsSection } from "@/features/home/section/why-us";

const meta = {
  title: "Luxury Real Estate Investments in the UAE - Piptan Investment",
  description:
    "Discover luxury homes, commercial spaces, and investment opportunities in Dubai's most sought-after communities. Expert guidance and premium listings for confident real estate decisions.",
  keywords:
    "Dubai real estate, luxury homes, commercial property, real estate investment, property development, Dubai property market, luxury apartments, villas Dubai, real estate agents Dubai, property investment UAE",
};

// Enable caching with revalidation every 10 minutes
export const revalidate = 600;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: meta.keywords,
  authors: [{ name: "Piptan Investment" }],
  creator: "Piptan Investment",
  publisher: "Piptan Investment",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    title: meta.title,
    description: meta.description,
    url: "https://www.piptan.ae",
    siteName: "Piptan Investment",
    locale: "en_US",
    images: [
      {
        url: "/images/hero.webp",
        width: 1200,
        height: 630,
        alt: "Piptan Investment Luxury Real Estate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
    images: ["/images/hero.webp"],
    creator: "@piptan",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://www.piptan.ae",
  },
  metadataBase: new URL("https://www.piptan.ae"),
};

export default function Home() {
  return (
    <main className="-mt-20 divide-y">
      {/* <Hero /> */}

      <AboutSection />
      <ExpertiseSection />
      <ProjectsSection />
      <WhyUsSection />
      <FeaturesSection />
      <Testimonials />
      <InsightsSection />
      <FaqSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            name: "Piptan Investment",
            description:
              "Premium real estate investment and development company in Dubai",
            areaServed: "Dubai",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Dubai",
              addressCountry: "UAE",
            },
            offers: {
              "@type": "AggregateOffer",
              itemOffered: {
                "@type": "Residence",
                name: "Luxury Homes and Commercial Spaces",
                description:
                  "Premium real estate properties in Dubai's most sought-after communities",
              },
            },
          }),
        }}
      />
    </main>
  );
}
