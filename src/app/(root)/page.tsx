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
      <section className="relative h-dvh">
        <div className="relative z-10 flex h-full flex-col justify-end py-12">
          <SimpleMarquee
            className="font-jaguar z-10 mb-6 w-full items-center gap-6 overflow-hidden text-9xl"
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
            <div className="bg-foreground size-4 rounded-full" />
            <span>Commercial Spaces</span>
            <div className="bg-foreground size-4 rounded-full" />
            <span>Investment Opportunities</span>
            <div className="bg-foreground size-4 rounded-full" />
          </SimpleMarquee>

          <div className="relative z-10 container space-y-6">
            <Separator className="bg-white/80" />
            <div className="flex items-center justify-between gap-3">
              <h1 className="text-4xl">Opening More Doors</h1>
              <p className="text-2xl font-light">
                Invest Smarter. Live Better. Grow Faster.
              </p>
            </div>
          </div>
          <div className="from-background absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t to-transparent" />
        </div>
        <Image src="/images/hero.webp" fill alt="" className="object-cover" />
      </section>
      <section className="relative container grid grid-cols-12 gap-12 py-24">
        <div className="pointer-events-none z-10 col-span-5 space-y-3">
          <p className="pointer-events-none">Who we are?</p>
          <h2 className="pointer-events-none text-5xl font-medium">
            Your Real Estate <br />
            <span className="text-primary-foreground">
              Partner in Every Step
            </span>
          </h2>
          <Link
            href="/about"
            className={cn(
              // Base styles
              "font-inter group bg-foreground/10 pointer-events-auto relative flex h-11 w-fit cursor-pointer items-center justify-center overflow-hidden rounded-sm border border-current px-6 text-lg font-medium tracking-wide text-white",
              // Effect styles
              "transition-transform duration-700 ease-out will-change-transform hover:scale-x-[1.02] hover:ease-[cubic-bezier(.34,5.56,.64,1)]"
            )}
          >
            <span
              data-text={"About us"}
              className={cn(
                "relative block overflow-hidden",
                // After child
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
        <p className="pointer-events-none z-10 col-span-7 text-4xl leading-normal font-light text-balance">
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
      <section className="relative container py-24">
        <div className="sticky top-[10vh] mb-96">
          <p className="mb-3">Our Expertise</p>
          <div className="z-10 grid grid-cols-3 gap-6">
            <h2 className="col-span-2 text-5xl font-medium">
              Real Estate Wisdom. <br />
              Built Over Time.
            </h2>
            <p className="text-xl font-light text-balance">
              With deep market knowledge and strategic insights, we help you
              make the right move — every time.
            </p>
          </div>
        </div>
        <ExpertiseSection />
      </section>
      <section className="container py-24">
        <div className="mb-12">
          <p className="mb-3 inline-flex items-center gap-1.5">
            <IconDiamond />
            Projects
          </p>
          <div className="z-10 mb-4 grid grid-cols-3 gap-6">
            <h2 className="col-span-2 text-5xl font-medium">
              More Than Properties, <br />
              We Build Possibilities.
            </h2>
            <p className="text-primary-foreground text-xl font-light text-balance">
              Discover signature developments in Dubai&apos;s most sought-after
              communities.
            </p>
          </div>
          <Link
            href="/about"
            className={cn(
              // Base styles
              "font-inter group bg-foreground/10 pointer-events-auto relative flex h-11 w-fit cursor-pointer items-center justify-center overflow-hidden rounded-sm border border-current px-6 text-lg font-medium tracking-wide text-white",
              // Effect styles
              "transition-transform duration-700 ease-out will-change-transform hover:scale-x-[1.02] hover:ease-[cubic-bezier(.34,5.56,.64,1)]"
            )}
          >
            <span
              data-text={"View all projects"}
              className={cn(
                "relative block overflow-hidden",
                // After child
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
        <ul className="grid grid-cols-3 gap-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <PropertyCard key={i} className="first:col-span-2" />
          ))}
        </ul>
      </section>
      <section className="bg-primary relative overflow-hidden">
        <div className="container py-24">
          <p className="mb-3 inline-flex items-center gap-1.5">
            <IconDiamond />
            Why choose us?
          </p>
          <div className="z-10 mb-4 grid grid-cols-2 gap-6">
            <h2 className="text-5xl font-medium">
              Where Real Estate <br />
              <span className="text-primary-foreground">
                Meets Real Potential
              </span>
            </h2>
            <p className="text-primary-foreground text-xl font-light">
              At Piptan Investment, we offer more than properties - we offer
              peace of mind. With expert guidance and premium listings, we help
              you make confident, future-ready real estate decisions.
            </p>
          </div>
        </div>
        <div className="relative z-10 container grid grid-cols-2 gap-6 pb-24">
          <div className="absolute top-0 -left-[10vw] aspect-5/3 w-2/3">
            <Image
              src="/images/isolated-home.webp"
              fill
              alt=""
              className="object-cover"
            />
          </div>
          <AnimatedTabs className="col-start-2" />
        </div>
        <BuildingOutline className="absolute top-0 -right-12" />
      </section>
      <section className="container py-20">
        <h3 className="text-7xl">Where ambition meets opportunity.</h3>
        <div className="mt-10 grid grid-cols-2 gap-6">
          <p className="text-primary-foreground text-5xl leading-snug">
            Choose from our premium real estate options — crafted to match your
            lifestyle, goals, and investment vision. With Piptan, finding the
            perfect property is effortless.
          </p>
          <div className="self-end">
            <p className="text-muted-foreground mb-4">
              Each Piptan residence is crafted <br /> with consistent care and
              quality.
            </p>
            <ul className="flex flex-wrap gap-3">
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
                  <Badge variant="outline" className="text-2xl">
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
