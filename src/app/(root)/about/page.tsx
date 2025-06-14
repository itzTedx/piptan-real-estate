import { AnimatedButton } from "@/components/ui/animated-button";
import { SectionHeader } from "@/components/ui/section-header";
import { Separator } from "@/components/ui/separator";
import { AboutHeroVideo } from "@/features/about/components/video";

export default function AboutPage() {
  return (
    <main className="container py-4 sm:py-9 md:py-12">
      {/* Hero Section */}
      <section className="relative space-y-12 pb-20">
        <SectionHeader
          title={`More Than Properties. We Build Possibilities.`}
          titleClassName="font-jaguar"
          subtitle="Piptan is redefining real estate in the UAE with a full-service, client-first approach. From exclusive listings to seamless relocation services, we guide buyers, investors, and families through every step of their journey with expertise, integrity, and vision."
          hasHighlight
          highlightText="We Build Possibilities."
          containerClassName="md:grid-cols-1 sm:gap-2"
          action={
            <AnimatedButton
              href="/contact"
              text="Get consultation"
              variant="outline"
            />
          }
        />
        <AboutHeroVideo />
        <div className="grid gap-12 md:grid-cols-12 md:gap-4">
          <ul className="grid grid-cols-2 gap-6 md:col-span-6 md:grid-cols-3">
            {[
              { stat: "150+", label: "Properties Sold" },
              { stat: "20+", label: "Projects Represented" },
              { stat: "AED 100M+", label: "in Managed Real Estate" },
              { stat: "300+", label: "Happy Clients and Counting" },
              { stat: "5+", label: "Markets Served Globally" },
            ].map((milestone, index) => (
              <li key={index}>
                <h3 className="mb-2 text-4xl font-medium transition-transform duration-300 group-hover:scale-110">
                  {milestone.stat}
                </h3>
                <p className="text-primary-foreground">{milestone.label}</p>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-balance sm:text-xl md:col-span-5 md:col-start-8">
            Piptan is your all-in-one partner for real estate and investment in
            the UAE. From buying and reselling high-value properties to
            maximizing returns through short-term rentals and enhancing spaces
            with expert renovations, we provide seamless solutions tailored to
            your goals. At every step, Piptan delivers with precision, care, and
            a deep understanding of the market.
          </p>
        </div>
      </section>
      <Separator />
      {/* Our Story Section */}
      <section className="my-20">
        <SectionHeader
          badge="Our Story"
          title="From Vision to Reality"
          subtitle="From a passion for real estate to a powerhouse of smart property solutions, Piptan was born with a clear vision — to create a seamless and trusted ecosystem for local and international buyers."
          hasHighlight
          highlightText="From Vision to Reality"
        />
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <p className="text-primary-foreground text-lg leading-relaxed font-light sm:text-xl">
            Our journey began with a few exclusive listings and has now grown
            into a full-scale operation offering everything from property
            acquisition to investment consultation and lifestyle relocation
            services.
          </p>
          <p className="text-primary-foreground text-lg leading-relaxed font-light sm:text-xl">
            With a network of experts and a growing client base, we are proud to
            be shaping a new era of real estate in the region.
          </p>
        </div>
      </section>
      {/* What We Offer Section */}
      <section className="mb-16 md:mb-24">
        <SectionHeader
          badge="What We Offer"
          title="Comprehensive Real Estate Solutions"
          subtitle="Discover our range of services designed to meet your every real estate need."
          hasHighlight
          highlightText="Real Estate Solutions"
        />
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: "🏡",
              title: "Residential Property Sales",
              description:
                "Find dream homes and secure living spaces in top-tier communities across the UAE and beyond.",
            },
            {
              icon: "💼",
              title: "Investment Advisory & Portfolio Management",
              description:
                "We help investors unlock strong returns through smart property strategies, market analysis, and ongoing support.",
            },
            {
              icon: "🛋️",
              title: "Renovation & Interior Styling",
              description:
                "Transform spaces with our design partners to enhance both lifestyle comfort and resale value.",
            },
            {
              icon: "🌍",
              title: "Relocation & Residency Assistance",
              description:
                "Smooth your move with our visa advisory, documentation support, and legal facilitation services.",
            },
            {
              icon: "🏢",
              title: "Commercial Real Estate Solutions",
              description:
                "From office spaces to mixed-use developments, Piptan connects businesses with high-potential properties.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="group bg-muted/50 hover:bg-muted rounded-lg p-6 transition-colors duration-300"
            >
              <span className="mb-4 block text-4xl">{service.icon}</span>
              <h3 className="mb-2 text-xl font-medium">{service.title}</h3>
              <p className="text-primary-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Our Principles Section */}
      <section className="mb-16 md:mb-24">
        <SectionHeader
          badge="Our Principles"
          title="The Foundation of Our Success"
          subtitle="Our core values guide every decision we make and every service we provide."
          hasHighlight
          highlightText="Foundation of Our Success"
        />
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Client-First Mindset",
              description:
                "Your success is our priority. We listen, adapt, and act in your best interest every step of the way.",
            },
            {
              title: "Curated Quality",
              description:
                "We handpick every property with a strict focus on location, value, design, and growth potential.",
            },
            {
              title: "Transparent Communication",
              description:
                "No jargon, no surprises. We communicate openly to ensure you feel informed and empowered.",
            },
            {
              title: "Future-Focused Strategy",
              description:
                "We align our services with long-term market trends to help you make future-proof decisions.",
            },
          ].map((principle, index) => (
            <div
              key={index}
              className="group hover:border-primary/50 rounded-lg border p-6 transition-colors duration-300"
            >
              <div className="bg-primary/10 group-hover:bg-primary/20 mb-4 flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-300">
                <span className="text-primary text-xl">🔹</span>
              </div>
              <h3 className="mb-2 text-xl font-medium">{principle.title}</h3>
              <p className="text-primary-foreground">{principle.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Why Piptan Section */}
      <section className="mb-16 md:mb-24">
        <SectionHeader
          badge="Why Piptan?"
          title="Your Trusted Real Estate Partner"
          subtitle="Experience the difference of working with a team that puts your success first."
          hasHighlight
          highlightText="Trusted Real Estate Partner"
        />
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "End-to-End Service — From search to keys in hand, we handle every detail.",
            "Expert Advisors — Work with professionals who understand both local and global markets.",
            "Tailored Solutions — We don&apos;t just sell property — we find what&apos;s right for you.",
            "Growing Portfolio — Access an expanding selection of top-performing real estate projects.",
            "Secure & Compliant — We ensure every transaction meets the highest standards of legal and financial safety.",
          ].map((point, index) => (
            <div key={index} className="group flex items-start gap-3">
              <span className="text-primary text-xl transition-transform duration-300 group-hover:scale-110">
                ✅
              </span>
              <p className="text-primary-foreground">{point}</p>
            </div>
          ))}
        </div>
      </section>
      {/* The Piptan Journey Section */}
      <section className="mb-16 md:mb-24">
        <SectionHeader
          badge="The Piptan Journey"
          title="Your Path to Success"
          subtitle="A seamless, transparent process designed to make your real estate journey effortless."
          hasHighlight
          highlightText="Path to Success"
        />
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Free Consultation – Understand your goals and budget",
            "Property Selection – Choose from a curated set of listings",
            "Site Visit or Virtual Tour",
            "Legal & Documentation Support",
            "Purchase & Payment Plans",
            "Handover & After-Sale Assistance",
            "Furnishing / Rental Support (if applicable)",
            "Ongoing Advisory & Support",
          ].map((step, index) => (
            <div
              key={index}
              className="group bg-muted/50 hover:bg-muted rounded-lg p-6 transition-colors duration-300"
            >
              <span className="text-primary mb-2 block text-xl transition-transform duration-300 group-hover:scale-110">
                {index + 1}
              </span>
              <p className="text-primary-foreground">{step}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
