import { Badge } from "@/components/ui/badge";

export const FeaturesSection = () => {
	return (
		<section
			aria-label="Features section"
			className="container py-8 sm:py-12 md:py-16 lg:py-20"
		>
			<h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
				Where ambition meets opportunity.
			</h3>
			<div className="mt-4 grid grid-cols-1 gap-4 sm:mt-6 sm:grid-cols-2 sm:gap-6 md:mt-8 lg:mt-10">
				<p className="text-primary-foreground text-xl leading-snug sm:text-2xl md:text-3xl lg:text-5xl">
					Choose from our premium real estate options — crafted to match your
					lifestyle, goals, and investment vision. With Piptan, finding the
					perfect property is effortless.
				</p>
				<div className="self-end md:pl-14">
					<p className="mb-3 text-muted-foreground sm:mb-4">
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
									className="text-sm sm:text-base md:text-lg lg:text-2xl"
									variant="outline"
								>
									{badge}
								</Badge>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};
