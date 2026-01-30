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
import { ProgressIndicator } from "@/features/home/components/progress-indicator";
import { PropertyCard } from "@/features/properties/components/property-card";

import { PORTFOLIO_CARD_QUERY_RESULT } from "../../../../sanity.types";

interface RelatedProjectsProps {
	projects: PORTFOLIO_CARD_QUERY_RESULT;
}

export const RelatedProjects = ({ projects }: RelatedProjectsProps) => {
	return (
		<section className="pt-20">
			<SectionHeader
				action={
					<AnimatedButton
						href="/portfolio"
						text="View all portfolios"
						variant="outline"
					/>
				}
				badge="Other projects you might like"
				hasHighlight
				highlightText="Chosen with You"
				icon={<IconHouse className="size-3 md:size-4" />}
				title="Portfolios Chosen with You in Mind"
			/>
			<Carousel className="mt-4 w-full md:mt-6 lg:mt-9">
				<CarouselContent className="-ml-1">
					{projects.map((data) => (
						<CarouselItem className="pl-1 md:basis-1/2" key={data._id}>
							<div className="h-full p-1">
								<PropertyCard data={data} />
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<div className="mt-6 flex items-center gap-12">
					<p className="shrink-0 text-foreground/80 tracking-widest">
						<CarouselActiveIndex /> /{" "}
						{projects.length.toString().padStart(2, "0")}
					</p>
					<ProgressIndicator totalItems={projects.length} />
					<div className="relative flex gap-2">
						<CarouselPrevious className="static translate-y-0" />
						<CarouselNext className="static translate-y-0" />
					</div>
				</div>
			</Carousel>
		</section>
	);
};
