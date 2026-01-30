import Image from "next/image";
import Link from "next/link";

import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { AnimatedButton } from "@/components/ui/animated-button";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/ui/section-header";

import { urlFor } from "@/lib/sanity/image";

interface ProjectHeroProps {
	title: string;
	tags?: string[] | null;
	image: SanityImageSource | null;
	location: string | null;
	developer: {
		logo: SanityImageSource | null;
		name: string | null;
	} | null;
}

export const ProjectHero = ({
	title,
	tags,
	image,
	location,
	developer,
}: ProjectHeroProps) => {
	return (
		<header
			aria-label="Project Overview"
			className="space-y-6 pb-10 md:space-y-12 md:pb-20"
		>
			<SectionHeader
				action={<AnimatedButton text="Get consultation" variant="outline" />}
				as="h1"
				title={title}
				titleClassName="font-jaguar"
			/>
			<figure className="grid grid-cols-1 gap-4 md:grid-cols-4">
				<div className="relative aspect-video overflow-hidden rounded-sm border shadow-2xl md:col-span-3">
					<nav
						aria-label="Property features"
						className="relative z-10 hidden flex-wrap gap-1.5 p-4 sm:flex md:p-6"
					>
						{tags &&
							tags.map((tag) => (
								<Badge className="text-sm md:text-base" key={tag}>
									{tag}
								</Badge>
							))}
					</nav>
					{image && (
						<Image
							alt={`${title} - Luxury Property in ${location}`}
							blurDataURL={urlFor(image).width(10).quality(20).blur(10).url()}
							className="object-cover transition-transform duration-300 hover:scale-105"
							fill
							placeholder={"blur"}
							priority
							quality={100}
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
							src={urlFor(image).url()}
							title={title ?? ""}
						/>
					)}
				</div>

				<Link
					aria-label="Book a private viewing"
					className="group place-content-center-safe relative grid aspect-[4/1] overflow-hidden rounded-sm border md:aspect-auto"
					href="/contact"
				>
					<p className="relative z-10 px-4 text-center font-medium text-xl md:text-3xl lg:text-4xl">
						Book a Private <br />
						Viewing Today
					</p>
					<picture>
						<source
							media="(max-width: 768px)"
							srcSet="/images/side-cta-wide.webp"
						/>
						<Image
							alt="Book a private viewing"
							className="object-cover transition-[scale_rotate_filter] duration-700 ease-out group-hover:scale-125 group-hover:brightness-110 md:group-hover:-rotate-8"
							fill
							sizes="(max-width: 768px) 100vw, 25vw"
							src="/images/side-cta.webp"
						/>
					</picture>
				</Link>
			</figure>
			<address className="flex flex-col gap-6 not-italic md:flex-row md:gap-16">
				{location && (
					<div>
						<h2 className="mb-2 text-muted-foreground text-sm md:mb-3 md:text-base">
							Location
						</h2>
						<p className="text-xl md:text-2xl">{location}</p>
					</div>
				)}
				{developer && (
					<div>
						<h2 className="mb-2 text-muted-foreground text-sm md:mb-3 md:text-base">
							Developer
						</h2>
						<p className="text-xl md:text-2xl">{developer.name}</p>
					</div>
				)}
			</address>
		</header>
	);
};
