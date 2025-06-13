import type { Metadata } from "next";

import { AboutSection } from "@/features/home/section/about";
import { ExpertiseSection } from "@/features/home/section/expertise";
import { FaqSection } from "@/features/home/section/faq";
import { FeaturesSection } from "@/features/home/section/features";
import { Hero } from "@/features/home/section/hero";
import { InsightsSection } from "@/features/home/section/insights";
import { ProjectsSection } from "@/features/home/section/projects";
import { Testimonials } from "@/features/home/section/testimonials";
import { WhyUsSection } from "@/features/home/section/why-us";

export const metadata: Metadata = {
  title: "Piptan Investment | Premium Real Estate in Dubai",
  description:
    "Discover luxury homes, commercial spaces, and investment opportunities in Dubai's most sought-after communities. Expert guidance and premium listings for confident real estate decisions.",
  keywords:
    "Dubai real estate, luxury homes, commercial property, real estate investment, property development, Dubai property market",
  openGraph: {
    title: "Piptan Investment | Premium Real Estate in Dubai",
    description:
      "Discover luxury homes, commercial spaces, and investment opportunities in Dubai's most sought-after communities.",
    images: [
      {
        url: "/images/hero.webp",
        width: 1200,
        height: 630,
        alt: "Piptan Investment Luxury Real Estate",
      },
    ],
  },
  metadataBase: new URL("https://www.piptan.com"),
};

export default function Home() {
  return (
    <main className="-mt-20 divide-y">
      <Hero />

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
