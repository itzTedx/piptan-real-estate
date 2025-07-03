import type { Metadata } from "next";

import { Cta } from "@/components/layout/cta";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

const meta = {
  title: "Luxury Real Estate Investments in the UAE - Piptan Investment",
  description:
    "Discover luxury homes, commercial spaces, and investment opportunities in Dubai's most sought-after communities. Expert guidance and premium listings for confident real estate decisions.",
  keywords:
    "Dubai real estate, luxury homes, commercial property, real estate investment, property development, Dubai property market, luxury apartments, villas Dubai, real estate agents Dubai, property investment UAE",
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Cta />
      <Footer />
    </>
  );
}
