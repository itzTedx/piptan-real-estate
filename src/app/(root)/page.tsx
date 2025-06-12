import Image from "next/image";
import Link from "next/link";

import { BuildingOutline } from "@/assets/building-outline";
import { IconDiamond } from "@/assets/icons";
import MomentumLines from "@/components/animation/momentum-lines";
import SimpleMarquee from "@/components/animation/simple-marquee";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AnimatedTabs } from "@/features/home/components/animated-tabs";
import { ExpertiseSection } from "@/features/home/section/expertise";
import { PropertyCard } from "@/features/properties/components/property-card";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="-mt-20">
      <section className="relative h-[60vh] md:h-[70vh] lg:h-dvh">
        <div className="relative z-10 flex h-full flex-col justify-end py-4 sm:py-6 md:py-8 lg:py-12">
          <SimpleMarquee
            className="font-jaguar z-10 mb-4 w-full items-center gap-3 overflow-hidden text-6xl sm:mb-6 sm:gap-4 md:gap-6 lg:text-8xl xl:text-9xl"
            baseVelocity={4}
            repeat={4}
            draggable={true}
            scrollSpringConfig={{ damping: 50, stiffness: 400 }}
            slowDownFactor={0.1}
            slowdownOnHover
            slowDownSpringConfig={{ damping: 60, stiffness: 300 }}
            scrollAwareDirection={true}
            useScrollVelocity={true}
            direction="left"
          >
            <span>Luxury Homes</span>
            <div className="bg-foreground size-1.5 rounded-full sm:size-2 md:size-3 lg:size-4" />
            <span>Commercial Spaces</span>
            <div className="bg-foreground size-1.5 rounded-full sm:size-2 md:size-3 lg:size-4" />
            <span>Investment Opportunities</span>
            <div className="bg-foreground size-1.5 rounded-full sm:size-2 md:size-3 lg:size-4" />
          </SimpleMarquee>

          <div className="relative z-10 container space-y-3 sm:space-y-4 md:space-y-6">
            <Separator className="bg-white/80" />
            <div className="flex items-center justify-between gap-3">
              <h1 className="text-3xl lg:text-4xl">Opening More Doors</h1>
              <p className="text-sm font-light sm:text-xl md:text-2xl">
                Invest Smarter. Live Better. <br className="md:hidden" />
                Grow Faster.
              </p>
            </div>
          </div>
          <div className="from-background absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t to-transparent md:h-2/5" />
        </div>
        <Image
          src="/images/hero.webp"
          fill
          alt=""
          className="object-cover max-md:object-right"
        />
      </section>

      <section className="relative container grid grid-cols-1 gap-4 py-8 sm:grid-cols-6 sm:gap-6 sm:py-12 md:grid-cols-12 md:gap-8 md:py-16 lg:gap-12 lg:py-24">
        <div className="pointer-events-none z-10 space-y-2 sm:col-span-3 sm:space-y-3 md:col-span-5">
          <p className="pointer-events-none">Who we are?</p>
          <h2 className="pointer-events-none text-2xl font-medium sm:text-3xl md:text-4xl lg:text-5xl">
            Your Real Estate <br />
            <span className="text-primary-foreground">
              Partner in Every Step
            </span>
          </h2>
          <Link
            href="/about"
            className={cn(
              "font-inter group bg-foreground/10 pointer-events-auto relative flex h-9 w-fit cursor-pointer items-center justify-center overflow-hidden rounded-sm border border-current px-4 text-sm font-medium tracking-wide text-white sm:h-10 sm:px-5 sm:text-base md:h-11 md:px-6 md:text-lg",
              "transition-transform duration-700 ease-out will-change-transform hover:scale-x-[1.02] hover:ease-[cubic-bezier(.34,5.56,.64,1)]"
            )}
          >
            <span
              data-text={"About us"}
              className={cn(
                "relative block overflow-hidden",
                "after:text-primary after:absolute after:left-0 after:z-1 after:translate-y-full after:transform after:duration-700 after:ease-[cubic-bezier(.4,0,0,1)] after:will-change-transform after:content-[attr(data-text)] group-hover:after:translate-y-0"
              )}
            >
              <span className="inline-block duration-700 ease-[cubic-bezier(.4,0,0,1)] group-hover:-translate-y-full">
                About us
              </span>
            </span>

            <span className="absolute inset-0 translate-y-full rounded-[50%_50%_0_0] bg-white transition-all duration-500 ease-[cubic-bezier(.4,0,0,1)] group-hover:translate-y-0 group-hover:rounded-none"></span>
          </Link>
        </div>
        <p className="pointer-events-none z-10 text-lg leading-normal font-light text-balance sm:col-span-3 sm:text-xl md:col-span-7 md:text-2xl lg:text-4xl">
          Whether you&apos;re a seasoned investor or new to real estate, Piptan
          Investment delivers seamless capital{" "}
          <span className="font-medium">
            solutions, market-driven insights, and expert guidance
          </span>{" "}
          - Empowering you to invest with confidence.
        </p>
        <div className="absolute inset-x-0 inset-y-0">
          <MomentumLines />
        </div>
      </section>
      <section className="relative container py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="sticky top-[10vh] mb-32 px-2 sm:mb-48 md:mb-64 lg:mb-96">
          <p className="mb-2 sm:mb-3">Our Expertise</p>
          <div className="z-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3">
            <h2 className="text-2xl font-medium sm:col-span-2 sm:text-3xl md:text-4xl lg:text-5xl">
              Real Estate Wisdom. <br />
              Built Over Time.
            </h2>
            <p className="text-base font-light text-balance sm:text-lg md:text-xl">
              With deep market knowledge and strategic insights, we help you
              make the right move — every time.
            </p>
          </div>
        </div>
        <ExpertiseSection />
      </section>
      <section className="container py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="mb-6 sm:mb-8 md:mb-12">
          <p className="mb-2 inline-flex items-center gap-1 sm:mb-3 sm:gap-1.5">
            <IconDiamond className="h-3 w-3 sm:h-4 sm:w-4" />
            Projects
          </p>
          <div className="z-10 mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3">
            <h2 className="text-2xl font-medium sm:col-span-2 sm:text-3xl md:text-4xl lg:text-5xl">
              More Than Properties, <br />
              We Build Possibilities.
            </h2>
            <p className="text-primary-foreground text-base font-light text-balance sm:text-lg md:text-xl">
              Discover signature developments in Dubai&apos;s most sought-after
              communities.
            </p>
          </div>
          <Link
            href="/about"
            className={cn(
              "font-inter group bg-foreground/10 pointer-events-auto relative flex h-9 w-fit cursor-pointer items-center justify-center overflow-hidden rounded-sm border border-current px-4 text-sm font-medium tracking-wide text-white sm:h-10 sm:px-5 sm:text-base md:h-11 md:px-6 md:text-lg",
              "transition-transform duration-700 ease-out will-change-transform hover:scale-x-[1.02] hover:ease-[cubic-bezier(.34,5.56,.64,1)]"
            )}
          >
            <span
              data-text={"View all projects"}
              className={cn(
                "relative block overflow-hidden",
                "after:text-primary after:absolute after:left-0 after:z-1 after:translate-y-full after:transform after:duration-700 after:ease-[cubic-bezier(.4,0,0,1)] after:will-change-transform after:content-[attr(data-text)] group-hover:after:translate-y-0"
              )}
            >
              <span className="inline-block duration-700 ease-[cubic-bezier(.4,0,0,1)] group-hover:-translate-y-full">
                View all projects
              </span>
            </span>

            <span className="absolute inset-0 translate-y-full rounded-[50%_50%_0_0] bg-white transition-all duration-500 ease-[cubic-bezier(.4,0,0,1)] group-hover:translate-y-0 group-hover:rounded-none"></span>
          </Link>
        </div>
        <ul className="grid grid-cols-1 max-sm:divide-y sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <PropertyCard key={i} className="max-sm:py-6 first:sm:col-span-2" />
          ))}
        </ul>
      </section>
      <section className="bg-primary relative overflow-hidden">
        <div className="container py-8 sm:py-12 md:py-16 lg:py-24">
          <p className="mb-2 inline-flex items-center gap-1 sm:mb-3 sm:gap-1.5">
            <IconDiamond className="h-3 w-3 sm:h-4 sm:w-4" />
            Why choose us?
          </p>
          <div className="z-10 mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            <h2 className="text-2xl font-medium sm:text-3xl md:text-4xl lg:text-5xl">
              Where Real Estate <br />
              <span className="text-primary-foreground">
                Meets Real Potential
              </span>
            </h2>
            <p className="text-primary-foreground text-base font-light sm:text-lg md:text-xl">
              At Piptan Investment, we offer more than properties - we offer
              peace of mind. With expert guidance and premium listings, we help
              you make confident, future-ready real estate decisions.
            </p>
          </div>
        </div>
        <div className="relative z-10 container grid grid-cols-1 gap-4 pb-8 sm:grid-cols-2 sm:gap-6 sm:pb-12 md:pb-16 lg:pb-24">
          <div className="absolute top-0 -left-[10vw] hidden aspect-5/3 w-2/3 sm:block">
            <Image
              src="/images/isolated-home.webp"
              fill
              alt=""
              className="object-cover"
            />
          </div>
          <AnimatedTabs className="sm:col-start-2" />
        </div>
        <BuildingOutline className="absolute top-0 -right-12 hidden sm:block" />
      </section>
      <section className="container py-8 sm:py-12 md:py-16 lg:py-20">
        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
          Where ambition meets opportunity.
        </h3>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-6 sm:grid-cols-2 sm:gap-6 md:mt-8 lg:mt-10">
          <p className="text-primary-foreground text-xl leading-snug sm:text-2xl md:text-3xl lg:text-5xl">
            Choose from our premium real estate options — crafted to match your
            lifestyle, goals, and investment vision. With Piptan, finding the
            perfect property is effortless.
          </p>
          <div className="self-end">
            <p className="text-muted-foreground mb-3 sm:mb-4">
              Each Piptan residence is crafted <br /> with consistent care and
              quality.
            </p>
            <ul className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3">
              {[
                "Sustainable",
                "Smart",
                "Luxury",
                "Premium",
                "High ROI",
                "Growing Market",
                "Prime Location",
                "Private & Secure",
              ].map((badge) => (
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
          </div>
        </div>
      </section>
    </main>
  );
}
