import Image from "next/image";

import StackingCards, {
	StackingCardItem,
} from "@/components/animation/stacking-cards";
import { AnimatedButton } from "@/components/ui/animated-button";
import { SectionHeader } from "@/components/ui/section-header";

import { IconCollection } from "@/app/assets/icons";
import { urlFor } from "@/lib/sanity/image";
import { cn } from "@/lib/utils";

import { getCategories } from "../actions";

export const ExpertiseSection = async () => {
	const categories = await getCategories();

	return (
		<section
			aria-label="Expertise section"
			className="container relative py-8 sm:py-12 md:py-16 lg:py-24"
		>
			<div className="sticky top-[10vh] mb-32 px-2 sm:mb-48 md:mb-64 lg:mb-96">
				<SectionHeader
					badge="Our Expertise"
					hasHighlight
					highlightText="Investment Eminence."
					icon={<IconCollection className="size-3 sm:size-4" />}
					subtitle="We turn insight into opportunity - delivering consistent income and high-growth potential for smart investors."
					title={"Estate Experience meets\nInvestment Eminence."}
				/>
			</div>
			<div className="relative mt-[-15vh] min-h-screen md:mt-[-70vh] lg:mt-[-80vh] xl:mt-[-45vh]">
				<StackingCards totalCards={categories.length}>
					{categories?.map(({ description, image, title, _id, slug }, i) => {
						return (
							<StackingCardItem
								className="top-[30vh] h-[500px] md:top-[20vh] md:h-[550px] lg:top-[25vh] lg:h-[620px]"
								index={i}
								key={_id}
							>
								<div
									className={cn(
										"relative mx-auto grid h-fit w-full grid-cols-1 flex-col gap-6 rounded-xl border bg-background/50 p-6 backdrop-blur-2xl md:p-8 lg:grid-cols-2 lg:gap-8 lg:p-12"
									)}
								>
									<div className="grid grid-cols-8 gap-3">
										<p className="text-muted text-sm md:text-base">0{i + 1}</p>
										<div className="col-span-7 flex-1">
											<div>
												<h3 className="mb-2 font-bold font-jaguar text-2xl md:text-3xl lg:text-4xl">
													{title}
												</h3>
												<p className="mb-4 text-primary-foreground text-sm md:text-base">
													{description}
												</p>
												<AnimatedButton
													href={`/portfolio?category=${slug}`}
													text={"Explore more"}
													variant="secondary"
												/>
											</div>
										</div>
									</div>

									{image && (
										<div className="relative aspect-4/3 w-full overflow-hidden rounded-md md:aspect-video">
											<Image
												alt={title ?? ""}
												className="object-cover"
												fill
												sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
												src={urlFor(image).url()}
											/>
										</div>
									)}
								</div>
							</StackingCardItem>
						);
					})}
				</StackingCards>
			</div>
		</section>
	);
};
