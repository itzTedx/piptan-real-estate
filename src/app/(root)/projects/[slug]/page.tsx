import { Metadata } from "next";

import { Separator } from "@/components/ui/separator";
import { PROPERTIES } from "@/constants/mock-data";
import { LeadSection } from "@/features/forms/lead-form/section";
import { ProjectAmenities } from "@/features/projects/components/project-amenities";
import { ProjectDescription } from "@/features/projects/components/project-description";
import { ProjectDetails } from "@/features/projects/components/project-details";
import { ProjectFeatures } from "@/features/projects/components/project-features";
import { ProjectGallery } from "@/features/projects/components/project-gallery";
import { ProjectHero } from "@/features/projects/components/project-hero";
import { ProjectOverview } from "@/features/projects/components/project-overview";
import { ProjectStats } from "@/features/projects/components/project-stats";
import { RelatedProjects } from "@/features/projects/components/related-projects";

const TAGS = ["Waterfront", "Private Beach", "Pool", "Garden", "Smart Home"];

const FEATURES = [
  "Expansive sunset-facing pool with integrated jacuzzi",
  "Open-Plan Living & Dining Area with Ocean Views",
  "Grand double-height living room with full glass facades",
  "Private Balcony Overlooking the Sea & Skyline",
  "Walk-in Closet and Premium Wardrobe Systems",
  "Smart Climate & Lighting Controls",
  "Secure Underground Parking",
  "Full Title Deed Ownership",
];

const STATS = [
  { stat: "42M", label: "Starting Price (AED)" },
  { stat: "14 000", label: "Starting area (ft2)" },
  { stat: "Q1 2029", label: "Handover" },
  { stat: "2", label: "Floors" },
  { stat: "8 - 9", label: "Bedrooms" },
  { stat: "80/20", label: "Payment plan" },
];

const AMENITIES = [
  {
    image: "/images/blogs/5.jpg",
    title: "Landscaped Garden",
    offset: "",
  },
  {
    title: "Al Fresco Dining Area",
    offset: "md:mt-[20em]",
  },
  {
    image: "/images/blogs/7.jpg",
    title: "Private Spa & Sauna",
    offset: "md:mt-[10em]",
  },
  {
    image: "/images/dubai-night.jpg",
    title: "Outdoor Lounge & Fire Pit",
    offset: "md:mt-[14em]",
  },
  {
    image: "/images/investment.jpg",
    title: "Fully Equipped Home Gym",
    offset: "md:-mt-[2em]",
  },
  {
    image: "/images/blogs/7.jpg",
    title: "Kids Play Area",
    offset: "md:mt-[20em]",
  },
  {
    title: "Private Cinema Room",
    offset: "md:mt-[10em]",
  },
  {
    image: "/images/luxury.jpg",
    title: "Smart Home System",
    offset: "md:mt-[14em]",
  },
];

const GALLERY_IMAGES = [
  "/images/gallery/1.jpg",
  "/images/gallery/2.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/2.jpg",
  "/images/gallery/1.jpg",
  "/images/gallery/3.jpg",
];

const DESCRIPTION_SECTIONS = [
  {
    title: "Project description",
    content:
      "Nova Pearl Residences is a premium beachfront development located in the prestigious neighborhood of Jumeirah Beach Residence, Dubai. Designed for luxury living with a warm, family-centric touch, this project offers a selection of 2 to 5-bedroom apartments, ranging in size from 120 to 550 square meters. Prices start at AED 42 million. Residences feature open-plan layouts, floor-to-ceiling windows, and expansive terraces with panoramic sea views. Interiors are finished with natural stone, soft wood tones, and warm lighting — perfect for cozy family evenings by the pool or under the stars.",
  },
  {
    title: "Benefits of Nova Pearl Residences by Emaar",
    content:
      "Set against the iconic backdrop of Jumeirah Beach Residence, Nova Pearl is a private retreat that blends resort-style amenities with homelike comfort. Residents enjoy exclusive access to beachfront pools, family cinema pods, private cabanas, wellness centers, gourmet restaurants, kids' activity zones, and sunset-view lounges. It's a destination where lasting memories are made — whether hosting movie nights by the pool or relaxing with your loved ones in complete privacy. The project's location offers seamless access to Dubai's most iconic attractions: The Dubai Mall, Burj Khalifa, and Dubai Marina are all just 10–15 minutes away. Schools, healthcare, and daily essentials are also within close reach, making it a perfect address for growing families and discerning investors.",
  },
  {
    title: "Investment Potential & Payment Plan",
    content:
      "Nova Pearl Residences offers strong ROI potential with expected annual returns of 6% to 8%, driven by its prime location and lifestyle-driven design. The development offers a flexible 80/20 payment plan, making it easier for investors and homebuyers to secure a unit. Completion is expected by Q1 2029, and early buyers will benefit from launch-phase pricing and exclusive incentives. Partner with Piptan Investment to reserve your unit and unlock a new chapter of elevated family living in Dubai.",
  },
];

const PROJECT_NAME = "Nova Pearl Residences";

export const metadata: Metadata = {
  title: `${PROJECT_NAME} | Luxury Beachfront Living in Dubai`,
  description:
    "Discover Nova Pearl Residences, a premium beachfront development in Jumeirah Beach Residence, Dubai. Featuring luxury apartments with panoramic sea views, smart home technology, and exclusive amenities.",
  keywords:
    "Nova Pearl Residences, Dubai real estate, luxury apartments, beachfront property, Jumeirah Beach Residence, Emaar properties",
  openGraph: {
    title: `${PROJECT_NAME} | Luxury Beachfront Living in Dubai`,
    description:
      "Discover Nova Pearl Residences, a premium beachfront development in Jumeirah Beach Residence, Dubai. Featuring luxury apartments with panoramic sea views, smart home technology, and exclusive amenities.",
    images: ["/images/luxury.jpg"],
  },
};

export default function ProjectPage() {
  return (
    <main className="container pt-4 sm:pt-9">
      <ProjectHero
        title={PROJECT_NAME}
        tags={TAGS}
        image="/images/luxury.jpg"
        location="Jumeirah Beach Residence"
        developer="Emaar"
      />
      <ProjectStats
        stats={STATS}
        description="Experience elevated living in this exquisitely designed 3-bedroom apartment at Nova Pearl Residences. Nestled in the heart of Jumeirah Beach Residence, this residence blends contemporary elegance with unmatched comfort, offering panoramic views of the Arabian Gulf and Dubai skyline."
      />
      <Separator />
      <article className="py-20">
        <ProjectOverview tags={TAGS} />
        <Separator />
        <ProjectDetails image="/images/gallery/1.jpg" />
        <ProjectFeatures features={FEATURES} />
        <ProjectAmenities amenities={AMENITIES} projectName={PROJECT_NAME} />
        <ProjectGallery images={GALLERY_IMAGES} projectName={PROJECT_NAME} />
        <ProjectDescription sections={DESCRIPTION_SECTIONS} />
        <LeadSection
          title={`Want to know\nmore details?`}
          subtitle="Feel free to contact with us"
          variant="default"
        />
        <RelatedProjects properties={PROPERTIES} />
      </article>
    </main>
  );
}
