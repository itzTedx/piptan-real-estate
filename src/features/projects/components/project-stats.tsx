import { Check } from "lucide-react";

import { AnimatedButton } from "@/components/ui/animated-button";

import { formatPrice } from "@/lib/utils";

import { Stat } from "../../../../sanity.types";

interface Stats {
	price?: string;
	bedrooms?: string;
	furnished?: boolean;
	area?: number;
	completionDate?: string;
	otherStats?: Array<
		{
			_key: string;
		} & Stat
	>;
}

interface ProjectStatsProps {
	stats: Stats | null;
	description: string | null;
}

export const ProjectStats = ({ stats, description }: ProjectStatsProps) => {
	const price = stats?.price
		? Number.parseFloat(stats.price.replace(/[^0-9.]/g, ""))
		: 0;
	return (
		<section
			aria-label="Project Statistics Section"
			className="mb-20 grid gap-12 md:grid-cols-2 md:gap-4"
		>
			{stats && (
				<div>
					<h2 className="sr-only">Project Statistics</h2>
					<dl
						aria-label="Project Key Statistics"
						className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3"
					>
						<div>
							<dd
								aria-label={`Starting Price: ${stats.price} AED`}
								className="mb-2 font-medium text-4xl text-primary transition-transform duration-300 group-hover:scale-110"
								title={`Starting Price: ${stats.price} AED`}
							>
								{formatPrice(price)}
							</dd>
							<dt className="text-muted-foreground">Starting Price</dt>
						</div>
						<div>
							<dd
								aria-label={`Bedrooms: ${stats.bedrooms}`}
								className="mb-2 font-medium text-4xl transition-transform duration-300 group-hover:scale-110"
								title={`${stats.bedrooms} bedrooms`}
							>
								{stats.bedrooms}
							</dd>
							<dt className="text-muted-foreground">Bedrooms</dt>
						</div>

						{stats.area && (
							<div>
								<dd
									aria-label={`Starting Area: ${stats.area} square feet`}
									className="mb-2 font-medium text-4xl transition-transform duration-300 group-hover:scale-110"
									title={`${stats.area} ft2`}
								>
									{stats.area}
								</dd>
								<dt className="text-muted-foreground">Starting area (ft²)</dt>
							</div>
						)}
						{stats.furnished && (
							<div>
								<dd
									aria-label={stats.furnished ? "furnished" : "unfurnished"}
									className="mb-2 font-medium text-4xl transition-transform duration-300 group-hover:scale-110"
									title={stats.furnished ? "furnished" : "unfurnished"}
								>
									<Check className="size-10" />
								</dd>
								<dt className="text-muted-foreground">Furnished</dt>
							</div>
						)}
						{stats.completionDate && (
							<div>
								<dd
									aria-label={`Handover: ${stats.completionDate}`}
									className="mb-2 font-medium text-4xl transition-transform duration-300 group-hover:scale-110"
									title={`Handover: ${stats.completionDate}`}
								>
									{stats.completionDate}
								</dd>
								<dt className="text-muted-foreground">Handover</dt>
							</div>
						)}
						{stats.otherStats &&
							stats.otherStats.map((stat) => (
								<div key={stat._key}>
									<dd
										aria-label={`${stat.label}: ${stat.stat}`}
										className="mb-2 font-medium text-4xl transition-transform duration-300 group-hover:scale-110"
										title={stat.stat}
									>
										{stat.stat}
									</dd>
									<dt className="text-muted-foreground">{stat.label}</dt>
								</div>
							))}
					</dl>
				</div>
			)}
			{description && (
				<div className="space-y-3">
					<h2 className="sr-only">Project Description & Consultation</h2>
					<p className="mb-3 text-balance text-lg leading-relaxed sm:text-xl">
						{description}
					</p>

					<AnimatedButton
						aria-label="Get a free consultation about this property"
						href="/contact"
						text="Get a Free Consultation"
						variant="outline"
					/>
				</div>
			)}
		</section>
	);
};
