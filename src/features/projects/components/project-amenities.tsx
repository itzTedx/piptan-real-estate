import Image from "next/image";

import { ProgressiveBlur } from "@/components/ui/progressive-blur";

import { urlFor } from "@/lib/sanity/image";
import { cn } from "@/lib/utils";

import { Amenity } from "../../../../sanity.types";

interface ProjectAmenitiesProps {
	amenities?: Amenity[];
}

export const ProjectAmenities = ({ amenities }: ProjectAmenitiesProps) => {
	return (
		amenities && (
			<section
				aria-label="Project Amenities"
				className="relative pt-10 md:pt-16 lg:pt-20"
			>
				<h2 className="sticky top-[25vh] py-10 text-center text-4xl leading-snug md:py-16 md:text-5xl lg:py-20 lg:text-6xl">
					The amenities{" "}
					<span className="text-muted-foreground">
						speak <br />
						for themselves
					</span>
				</h2>
				<ul
					className="mt-8 grid grid-cols-2 gap-4 md:mt-10 md:grid-cols-3 md:gap-6 lg:mt-12 lg:grid-cols-4"
					role="list"
				>
					{amenities.map((amenity) => (
						<li
							className={cn(
								"group place-content-center-safe relative grid aspect-4/5 overflow-hidden rounded-sm bg-primary-foreground/15 backdrop-blur-xl md:aspect-square",
								"not-first:odd:mt-[-3em] even:mt-[14em]",
								"md:even:mt-[8em] md:not-first:odd:mt-[-2em]",
								"lg:even:mt-[14em] lg:not-first:odd:mt-[-3em]"
							)}
							key={amenity.title}
						>
							{amenity.title &&
								(amenity.image ? (
									<>
										<Image
											alt={amenity.image.alt ?? amenity.title}
											blurDataURL={urlFor(amenity.image)
												.width(10)
												.quality(20)
												.blur(10)
												.url()}
											className="object-cover transition duration-300 group-hover:scale-105"
											fill
											loading="lazy"
											placeholder={"blur"}
											quality={100}
											sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
											src={urlFor(amenity.image).url()}
											title={amenity.image.alt ?? amenity.title}
										/>

										<div className="absolute inset-0 z-10 flex items-end bg-linear-to-t from-black/70 to-50% to-transparent p-4">
											<AmenityTitle title={amenity.title} />
										</div>
										<ProgressiveBlur
											blurIntensity={0.5}
											blurLayers={8}
											className="pointer-events-none absolute bottom-0 left-0 h-[40%] w-full"
										/>
									</>
								) : (
									<AmenityTitle title={amenity.title} />
								))}
						</li>
					))}
				</ul>
			</section>
		)
	);
};

export const AmenityTitle = ({ title }: { title: string }) => {
	return (
		<h3 className="px-4 font-medium text-lg text-primary-foreground leading-snug md:text-xl lg:text-2xl">
			{title}
		</h3>
	);
};
