import { AnimatedButton } from "@/components/ui/animated-button";
import {
	Carousel,
	CarouselActiveIndex,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { SectionHeader } from "@/components/ui/section-header";

import { IconHouse } from "@/app/assets/icons";
import { getProjectsCardData } from "@/features/projects/actions/projects-actions";
import { PropertyCard } from "@/features/properties/components/property-card";

import { ProgressIndicator } from "../components/progress-indicator";

export const PortfolioSection = async () => {
	const projects = await getProjectsCardData();
	const totalItems = projects.length;
	return (
		<section
			aria-label="Portfolios section"
			className="container py-8 sm:py-12 md:py-16 lg:py-24"
		>
			<div className="mb-6 sm:mb-8 md:mb-12">
				<SectionHeader
					action={
						<AnimatedButton
							href="/portfolio"
							text="View all Portfolios"
							variant="outline"
						/>
					}
					badge="Portfolios"
					hasHighlight
					highlightText="We Build Possibilities."
					icon={<IconHouse className="size-3 sm:size-4" />}
					subtitle="Discover signature developments in Dubai's most sought-after
            communities."
					title={" More Than Portfolios,\nWe Build Possibilities."}
				/>
			</div>
			<Carousel autoplay className="mt-4 w-full md:mt-6 lg:mt-9">
				<CarouselContent className="-ml-1">
					{projects.map((project) => (
						<CarouselItem
							className="pl-1 md:basis-1/2 lg:basis-1/3"
							key={project._id}
						>
							<div className="h-full p-1">
								<PropertyCard
									className="pb-1 pl-1 md:basis-1/2 md:pl-4 lg:basis-1/3"
									data={project}
								/>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<div className="mt-6 flex items-center gap-12">
					<p className="shrink-0 text-foreground/80 tracking-widest">
						<CarouselActiveIndex /> / {totalItems.toString().padStart(2, "0")}
					</p>
					<ProgressIndicator totalItems={totalItems} />
					<div className="relative flex gap-2">
						<CarouselPrevious className="static translate-y-0" />
						<CarouselNext className="static translate-y-0" />
					</div>
				</div>
			</Carousel>
		</section>
	);
};
