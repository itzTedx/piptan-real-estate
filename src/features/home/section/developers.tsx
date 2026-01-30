import Image from "next/image";

import { InfiniteSlider } from "@/components/ui/infinite-slider";

import { urlFor } from "@/lib/sanity/image";

import { getDevelopers } from "../actions";

export const Developers = async () => {
	const developers = await getDevelopers();
	return (
		<section className="container py-8 sm:py-12 md:py-16 lg:py-20">
			<div className="z-10 mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
				<h2 className="font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
					<span className="text-primary-foreground">Trusted Developers</span>
					<br />
					Behind Every Opportunity
				</h2>
				<p className="font-light text-base text-primary-foreground sm:text-lg md:text-xl">
					Partnering with Dubai’s most reputable developers to deliver secure,
					high-growth investments.
				</p>
			</div>
			<div className="relative mt-6 md:mt-9">
				<div className="absolute top-0 left-0 z-10 h-full w-1/6 bg-gradient-to-r from-background to-transparent" />
				<div className="absolute top-0 right-0 z-10 h-full w-1/6 bg-gradient-to-l from-background to-transparent" />
				<InfiniteSlider>
					{developers.map((developer) => (
						<div
							className="flex aspect-16/6 w-48 items-center justify-center rounded-lg border bg-white/80 p-3"
							key={developer._id}
						>
							<Image
								alt={developer.name ?? ""}
								className="max-w-full object-contain"
								height={40}
								src={urlFor(developer?.logo ?? "").url()}
								width={100}
							/>
						</div>
					))}
				</InfiniteSlider>
			</div>
		</section>
	);
};
