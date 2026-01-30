import MomentumLines from "@/components/animation/momentum-lines";
import { Badge } from "@/components/ui/badge";

interface ProjectOverviewProps {
	overview: {
		title?: string;
		description?: string;
		tags?: Array<string>;
	} | null;
	projectName: string | null;
}

export const ProjectOverview = ({
	overview,
	projectName,
}: ProjectOverviewProps) => {
	return (
		overview && (
			<section
				aria-label="Project Lifestyle Overview"
				className="relative pb-20"
			>
				<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
					{overview.title ?? "Unlock Your Dream Lifestyle."}
				</h2>
				<div className="pointer-events-none relative z-10 mt-4 grid grid-cols-1 gap-4 sm:mt-6 sm:grid-cols-2 sm:gap-6 md:mt-8 lg:mt-10">
					<p className="text-pretty text-primary-foreground text-xl leading-snug sm:text-2xl md:text-4xl">
						{overview.description}
					</p>
					<aside className="self-end md:pl-14">
						<p className="mb-3 text-muted-foreground sm:mb-4">
							{projectName} embodies the essence <br /> of refined living,
							offering a luxurious lifestyle.
						</p>

						{overview.tags && (
							<ul
								aria-label="Lifestyle Tags"
								className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3"
							>
								{overview.tags.map((tag) => (
									<li key={tag}>
										<Badge
											className="text-sm sm:text-base md:text-lg lg:text-2xl"
											variant="outline"
										>
											{tag}
										</Badge>
									</li>
								))}
							</ul>
						)}
					</aside>
				</div>
				<div className="absolute inset-x-0 inset-y-0 hidden md:block">
					<MomentumLines />
				</div>
			</section>
		)
	);
};
