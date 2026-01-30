import { ChevronDownIcon } from "@sanity/icons";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedButton } from "@/components/ui/animated-button";

import { IconFaq } from "@/app/assets/icons";

import { getFaqs } from "../actions";

export const FaqSection = async () => {
	const faqs = await getFaqs();
	return (
		<section className="my-10 border-t bg-muted md:my-20">
			<div className="grid grid-cols-1 gap-6 md:container lg:grid-cols-4 lg:gap-0">
				<aside className="flex flex-col justify-between px-6 py-8 lg:py-12 lg:pr-12">
					<div>
						<p className="mb-2 inline-flex items-center gap-1 sm:mb-3 sm:gap-1.5">
							<IconFaq className="size-4" />
							FAQs
						</p>
						<h2 className="text-3xl sm:text-4xl lg:text-5xl">
							Need Help? We&apos;ve Got You.
						</h2>
					</div>
					<div className="mt-6 lg:mt-0">
						<p className="mb-3 text-lg sm:text-xl">Having another question?</p>
						<AnimatedButton href="/contact" text="Send a message" />
					</div>
				</aside>
				<div className="border-x bg-background px-4 sm:px-6 lg:col-span-3 lg:px-9">
					<Accordion
						className="flex w-full flex-col divide-y"
						transition={{ duration: 0.2, ease: "easeInOut" }}
					>
						{faqs.map(({ _id, answer, question }, id) => (
							<AccordionItem className="py-4 sm:py-6" key={_id} value={_id}>
								<AccordionTrigger className="w-full text-left">
									<div className="flex items-center justify-between">
										<div className="flex items-center gap-4 sm:gap-9">
											<span className="text-muted text-sm sm:text-base">
												0{id + 1}
											</span>
											<h3 className="pl-0.5 text-lg sm:text-xl lg:text-2xl">
												{question}
											</h3>
										</div>
										<ChevronDownIcon className="size-4 transition-transform duration-200 group-data-expanded:-rotate-180" />
									</div>
								</AccordionTrigger>
								<AccordionContent className="pt-2 pl-8 sm:pl-14">
									<summary className="list-none text-balance font-light text-base leading-relaxed sm:text-lg lg:text-xl">
										{answer}
									</summary>
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</section>
	);
};
