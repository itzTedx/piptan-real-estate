import Image from "next/image";

import { IconHouse } from "@/assets/icons";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselActiveIndex,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SectionHeader } from "@/components/ui/section-header";
import { Separator } from "@/components/ui/separator";
import { PROPERTIES } from "@/constants/mock-data";
import { LeadSection } from "@/features/forms/lead-form/section";
import { ProgressIndicator } from "@/features/home/components/progress-indicator";
import { ProjectAmenities } from "@/features/projects/components/project-amenities";
import { ProjectDescription } from "@/features/projects/components/project-description";
import { ProjectFeatures } from "@/features/projects/components/project-features";
import { ProjectGallery } from "@/features/projects/components/project-gallery";
import { ProjectHero } from "@/features/projects/components/project-hero";
import { ProjectStats } from "@/features/projects/components/project-stats";
import { PropertyCard } from "@/features/properties/components/property-card";

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

export default function ProjectPage() {
  return (
    <main className="container pt-9">
      <ProjectHero
        title="Nova Pearl Residences"
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
        <div className="pb-20">
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
            Unlock Your Dream Lifestyle.
          </h3>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-6 sm:grid-cols-2 sm:gap-6 md:mt-8 lg:mt-10">
            <p className="text-primary-foreground text-xl leading-snug sm:text-2xl md:text-4xl">
              Located in Jumeirah Beach Residence, this residence is surrounded
              by the best Dubai has to offer — luxury dining, upscale retail,
              and vibrant entertainment are just minutes away. The neighborhood
              is secure, family-friendly, and perfect for both permanent
              residents and holiday homeowners.
            </p>
            <aside className="self-end md:pl-14">
              <p className="text-muted-foreground mb-3 sm:mb-4">
                Nova Pearl Residences embodies the essence <br /> of refined
                living, offering a luxurious lifestyle.
              </p>
              <ul className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3">
                {TAGS.map((badge) => (
                  <li key={badge}>
                    <Badge
                      variant="outline"
                      className="text-sm sm:text-base md:text-lg lg:text-2xl"
                    >
                      {badge}
                    </Badge>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
        <Separator />
        <div className="grid grid-cols-12 gap-12 pt-20">
          <div className="col-span-5">
            <h2 className="mb-6 text-4xl">
              More Details about Nova Pearl Residences
            </h2>
            <div className="space-y-3 text-xl leading-relaxed">
              <p>
                Discover your next chapter in one of Dubai&apos;s most iconic
                addresses. This 3-bedroom luxury apartment at Nova Pearl
                Residences offers a harmonious blend of coastal tranquility and
                urban sophistication. Wake up to breathtaking views of the
                Arabian Gulf and unwind in spacious interiors adorned with
                modern finishes, smart home technology, and bespoke
                detailing.{" "}
              </p>
              <p>
                Crafted for discerning homeowners and savvy investors alike,
                this residence stands as a symbol of refined living, with
                private access to the beach and five-star amenities that cater
                to your every need.
              </p>
            </div>
          </div>
          <div className="bg-muted relative col-span-7 h-full w-full overflow-hidden rounded-sm border">
            <Image
              src="/images/gallery/1.jpg"
              fill
              alt=""
              className="object-cover"
            />
          </div>
        </div>

        <ProjectFeatures features={FEATURES} />
        <ProjectAmenities amenities={AMENITIES} />
        <ProjectGallery images={GALLERY_IMAGES} />
        <ProjectDescription sections={DESCRIPTION_SECTIONS} />
        <LeadSection
          title={`Want to know\nmore details?`}
          subtitle="Feel free to contact with us"
          variant="default"
        />
        <section className="pt-20">
          <SectionHeader
            badge="Other projects you might like"
            icon={<IconHouse className="size-3 md:size-4" />}
            title="Residences Chosen with You in Mind"
            hasHighlight
            highlightText="Chosen with You"
            action={
              <AnimatedButton
                text="View all projects"
                href="/projects"
                variant="outline"
              />
            }
          />
        </section>
        <Carousel className="mt-4 w-full md:mt-6 lg:mt-9">
          <CarouselContent className="-ml-1">
            {PROPERTIES.map((data, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="h-full p-1">
                  <PropertyCard data={data} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-6 flex items-center gap-12">
            <p className="text-foreground/80 shrink-0 tracking-widest">
              <CarouselActiveIndex /> /{" "}
              {PROPERTIES.length.toString().padStart(2, "0")}
            </p>
            <ProgressIndicator totalItems={PROPERTIES.length} />
            <div className="relative flex gap-2">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </div>
        </Carousel>
      </article>
    </main>
  );
}
