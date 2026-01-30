import Image from "next/image";

import { AnimatedGroup } from "@/components/animation/animated-group";
import { AnimatedButton } from "@/components/ui/animated-button";
import { SectionHeader } from "@/components/ui/section-header";
import { Separator } from "@/components/ui/separator";

import { SERVICES } from "@/constants/mock-data";

export default function ServicesPage() {
	return (
		<main className="relative py-4 sm:py-9 md:py-12">
			<section className="container relative pb-20">
				<SectionHeader
					action={
						<AnimatedButton
							href="/contact"
							text="Get consultation"
							variant="outline"
						/>
					}
					as="h1"
					subtitle="In addition to assisting with buying and selling property, our experts will take care of all your property-related tasks in-house."
					title={"Piptan Services,\nBuilt Around You"}
				/>
				<div className="relative mt-9 aspect-square overflow-hidden rounded-md md:aspect-16/6">
					<Image
						alt=""
						className="object-cover"
						fill
						src="/images/dubai-night.jpg"
					/>
				</div>
				<div className="mt-12 grid gap-12 md:grid-cols-12 md:gap-4">
					<ul className="grid grid-cols-2 gap-6 md:col-span-6 md:grid-cols-3">
						{[
							{
								stat: "360°",
								label: "service for all UAE real estate-related matters",
							},
							{
								stat: "87%",
								label:
									"of Piptan clients use at least one additional Piptan service",
							},
							{ stat: "15+", label: "companies within piptan group" },
							{ stat: "500+", label: "professionals" },
							{ stat: "4", label: "years on the market" },
							{ stat: "3,500+", label: "satisfied clients" },
						].map((milestone, index) => (
							<li key={index}>
								<h3 className="mb-2 font-medium text-4xl transition-transform duration-300 group-hover:scale-110">
									{milestone.stat}
								</h3>
								<p className="text-primary-foreground">{milestone.label}</p>
							</li>
						))}
					</ul>
					<p className="text-balance text-lg leading-relaxed sm:text-xl md:col-span-5 md:col-start-8">
						At Piptan, we go beyond property listings to offer end-to-end real
						estate solutions tailored to your goals. Whether you&apos;re buying
						your first home, expanding your investment portfolio, or marketing a
						development, our expert team is here to guide you every step of the
						way. From personalized consultations and market insights to property
						management and project marketing, our services are designed to make
						your real estate journey smooth, strategic, and successful.
					</p>
				</div>
			</section>
			<Separator />
			<section className="container my-20">
				<SectionHeader
					badge="Our Services"
					hasHighlight
					highlightText="Every Step"
					subtitle="Comprehensive real estate solutions for buying, selling, investing, and managing property with ease."
					title="Expert Services for Every Step"
				/>
				<AnimatedGroup
					className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
					preset="blur-slide"
				>
					{SERVICES.map(({ description, id, image, title }) => (
						<div className="group" key={id}>
							<div className="relative aspect-5/3 overflow-hidden rounded-sm bg-muted outline-foreground/50 group-hover:outline">
								<Image
									alt=""
									className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
									fill
									src={image}
								/>
							</div>
							<h3 className="mt-3 mb-2 font-medium text-3xl">{title}</h3>
							<p className="text-xl">{description}</p>
						</div>
					))}
				</AnimatedGroup>
			</section>
		</main>
	);
}
