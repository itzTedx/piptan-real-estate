import Image from "next/image";
import Link from "next/link";

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
import { LeadSection } from "@/features/forms/lead-form/section";
import { ProgressIndicator } from "@/features/home/components/progress-indicator";

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

export default function ProjectPage() {
  return (
    <main className="container pt-9">
      <section className="space-y-12 pb-20">
        <SectionHeader
          title="Nova Pearl Residences"
          titleClassName="font-jaguar"
          action={<AnimatedButton text="Get consultation" variant="outline" />}
          as="h1"
        />
        <div className="grid grid-cols-4 gap-9">
          <div className="relative col-span-3 aspect-video">
            <ul className="relative z-10 flex flex-wrap gap-1.5 p-6">
              {TAGS.map((tag) => (
                <li key={tag}>
                  <Badge>{tag}</Badge>
                </li>
              ))}
            </ul>
            <Image
              src="/images/luxury.jpg"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div>
            <Link href="/contact">Book a Private Viewing Today</Link>
          </div>
        </div>
        <div className="flex gap-16">
          <div>
            <h2 className="text-muted-foreground mb-3">Location</h2>
            <p className="text-2xl">Jumeirah Beach Residence</p>
          </div>
          <div>
            <h2 className="text-muted-foreground mb-3">Developer</h2>
            <p className="text-2xl">Emaar</p>
          </div>
        </div>
        <div className="grid gap-12 md:grid-cols-2 md:gap-4">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3">
            {[
              { stat: "42M", label: "Starting Price (AED)" },
              { stat: "14 000", label: "Starting area (ft2)" },
              { stat: "Q1 2029", label: "Handover" },
              { stat: "2", label: "Floors" },
              { stat: "8 - 9", label: "Bedrooms" },
              { stat: "80/20", label: "Payment plan" },
            ].map((milestone, index) => (
              <li key={index}>
                <h3 className="mb-2 text-4xl font-medium transition-transform duration-300 group-hover:scale-110">
                  {milestone.stat}
                </h3>
                <p className="text-muted-foreground">{milestone.label}</p>
              </li>
            ))}
          </ul>
          <div>
            <p className="mb-3 text-lg leading-relaxed text-balance sm:text-xl">
              Experience elevated living in this exquisitely designed 3-bedroom
              apartment at Palm View Towers. Nestled in the heart of Palm
              Jumeirah, this residence blends contemporary elegance with
              unmatched comfort, offering panoramic views of the Arabian Gulf
              and Dubai skyline.
            </p>
            <AnimatedButton
              text="Get Consultation"
              href="/contact"
              variant="outline"
            />
          </div>
        </div>
      </section>
      <Separator />
      <article className="py-20">
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-7">
            <h2 className="text-4xl">More Details</h2>
            <div className="mt-4 space-y-3 text-2xl leading-relaxed">
              <p>
                Discover your next chapter in one of Dubai&apos;s most iconic
                addresses. This 3 bedroom luxury apartment at Palm View Towers
                offers a harmonious blend of coastal tranquility and urban
                sophistication. Wake up to breathtaking views of the Arabian
                Gulf and unwind in spacious interiors adorned with modern
                finishes, smart home technology, and bespoke detailing.{" "}
              </p>
              <p>
                Crafted for discerning homeowners and savvy investors alike,
                this residence stands as a symbol of refined living, with
                private access to the beach and five-star amenities that cater
                to your every need.
              </p>
            </div>
          </div>
          <aside className="bg-muted col-span-5 h-fit p-9">
            <h2 className="text-4xl">Community Highlights</h2>

            <p className="mt-4 space-y-3 text-2xl leading-[1.6] text-balance">
              Located on Palm Jumeirah, this residence is surrounded by the best
              Dubai has to offer — luxury dining, upscale retail, and vibrant
              entertainment are just minutes away. The neighborhood is secure,
              family-friendly, and perfect for both permanent residents and
              holiday homeowners.
            </p>
          </aside>
        </div>

        <section className="py-20">
          <h3 className="mb-6 text-3xl">Key Features</h3>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
            {FEATURES.map((feature, index) => (
              <li
                key={index}
                className="hover:border-muted-foreground flex items-center gap-2 border-b py-3 text-2xl transition duration-300"
              >
                {feature}
              </li>
            ))}
          </ul>
        </section>
        <section className="pt-20">
          <h2 className="text-center text-6xl leading-snug">
            The amenities{" "}
            <span className="text-muted-foreground">
              speak <br />
              for themselves
            </span>
          </h2>
          <ul className="mt-12 grid grid-cols-2 gap-9 md:grid-cols-4">
            {[
              {
                image: "/images/blogs/5.jpg",
                title: "Landscaped Garden",
                offset: "",
              },
              {
                image: "/images/blogs/8.jpg",
                title: "Al Fresco Dining Area",
                offset: "md:mt-[90%]",
              },
              {
                image: "/images/blogs/7.jpg",
                title: "Private Spa & Sauna",
                offset: "md:mt-[45%]",
              },
              {
                image: "/images/dubai-night.jpg",
                title: "Outdoor Lounge & Fire Pit",
                offset: "md:mt-[15%]",
              },
              {
                image: "/images/investment.jpg",
                title: "Fully Equipped Home Gym",
                offset: "md:-mt-[20%]",
              },
              {
                image: "/images/home.png",
                title: "Kids Play Area",
                offset: "md:mt-[60%]",
              },
              {
                image: "/images/residential-tower.webp",
                title: "Private Cinema Room",
                offset: "md:mt-[20%]",
              },
              {
                image: "/images/luxury.jpg",
                title: "Smart Home System",
                offset: "md:-mt-[2%]",
              },
            ].map((amenity) => (
              <li
                key={amenity.title}
                className={`group relative aspect-square ${amenity.offset} bg-muted overflow-hidden rounded-md`}
              >
                <Image
                  src={amenity.image}
                  alt={amenity.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="from-black-900 absolute inset-0 flex items-end bg-gradient-to-t to-transparent p-6">
                  <h4 className="text-2xl leading-snug font-medium">
                    {amenity.title}
                  </h4>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section className="pt-20">
          <h2 className="text-4xl">Project Gallery</h2>
          <Carousel className="mt-4 w-full md:mt-6 lg:mt-9">
            <CarouselContent className="-ml-1">
              {[
                "/images/gallery/1.jpg",
                "/images/gallery/2.jpg",
                "/images/gallery/3.jpg",
                "/images/gallery/2.jpg",
                "/images/gallery/1.jpg",
                "/images/gallery/3.jpg",
              ].map((img, index) => (
                <CarouselItem key={index} className="pl-1 md:basis-1/2">
                  <div className="h-full p-1">
                    <div className="relative aspect-square overflow-hidden rounded-md">
                      <Image
                        src={img}
                        fill
                        alt=""
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-6 flex items-center gap-12">
              <p className="text-foreground/80 shrink-0 tracking-widest">
                <CarouselActiveIndex /> / 06
              </p>
              <ProgressIndicator totalItems={6} />
              <div className="relative flex gap-2">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </div>
          </Carousel>
        </section>
        <section className="py-20">
          <div className="grid grid-cols-12 gap-12 py-12">
            <h3 className="col-span-5 text-3xl">Project description</h3>
            <div className="col-span-7 text-xl leading-normal">
              <p>
                Palm Haven Residences is a premium beachfront development
                located in the serene neighborhood of Palm Jumeirah, Dubai.
                Designed for luxury living with a warm, family-centric touch,
                this project offers a selection of 2 to 5-bedroom apartments,
                villas, and penthouses, ranging in size from 120 to 550 square
                meters. Prices start at AED 6.8 million. Residences feature
                open-plan layouts, floor-to-ceiling windows, and expansive
                terraces with panoramic sea views. Interiors are finished with
                natural stone, soft wood tones, and warm lighting — perfect for
                cozy family evenings by the pool or under the stars.
              </p>
            </div>
          </div>
          <Separator />
          <div className="grid grid-cols-12 gap-12 py-12">
            <h3 className="col-span-5 text-3xl">
              Benefits of Palm Haven Residences by Emmar
            </h3>
            <div className="col-span-7 space-y-2 text-xl leading-normal">
              <p>
                Set against the iconic backdrop of the Palm Jumeirah, Palm Haven
                is a private retreat that blends resort-style amenities with
                homelike comfort. Residents enjoy exclusive access to beachfront
                pools, family cinema pods, private cabanas, wellness centers,
                gourmet restaurants, kids’ activity zones, and sunset-view
                lounges. It’s a destination where lasting memories are made —
                whether hosting movie nights by the pool or relaxing with your
                loved ones in complete privacy.{" "}
              </p>
              <p>
                The project’s location offers seamless access to Dubai’s most
                iconic attractions: Atlantis The Royal, Nakheel Mall, and Dubai
                Marina are all just 10–15 minutes away. Schools, healthcare, and
                daily essentials are also within close reach, making it a
                perfect address for growing families and discerning investors.
              </p>
            </div>
          </div>
          <Separator />
          <div className="grid grid-cols-12 gap-12 py-12">
            <h3 className="col-span-5 text-3xl">
              Investment Potential & Payment Plan
            </h3>
            <div className="col-span-7 text-xl leading-normal">
              <p>
                Palm Haven Residences offers strong ROI potential with expected
                annual returns of 6% to 8%, driven by its prime location and
                lifestyle-driven design. The development offers a flexible 70/30
                post-handover payment plan, making it easier for investors and
                homebuyers to secure a unit. Completion is expected by Q4 2028,
                and early buyers will benefit from launch-phase pricing and
                exclusive incentives. Partner with Piptan Investment to reserve
                your unit and unlock a new chapter of elevated family living in
                Dubai.
              </p>
            </div>
          </div>
          <Separator />
        </section>
        <LeadSection
          title={`Want to know\nmore details?`}
          subtitle="Feel free to contact with us"
          variant="default"
        />
      </article>
      {/* <ProjectsSection /> */}
    </main>
  );
}
