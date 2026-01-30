import Link from "next/link";

import { SectionHeader } from "@/components/ui/section-header";

import { CONTACT } from "@/constants";
import { ContactForm } from "@/features/forms/contact-form/form";
import { FaqSection } from "@/features/home/section/faq";

export default function ContactPage() {
	return (
		<main className="py-4 sm:py-9 md:py-12">
			<section className="container relative pb-12 sm:pb-16 md:pb-20">
				<SectionHeader
					as="h1"
					hasHighlight
					highlightText="Conversation"
					subtitle=" Have questions about our properties or services? We're here to
          help. Fill out the form below and our team will get back to you
          shortly."
					title={`Let's Start\na Conversation`}
				/>
				<div className="mt-8 grid grid-cols-1 gap-6 sm:mt-12 lg:grid-cols-3 lg:gap-8">
					<ContactForm />
					<aside className="lg:col-span-1">
						<h2 className="font-jaguar text-2xl sm:text-3xl lg:text-4xl">
							Other Ways to Reach Us
						</h2>
						<div className="mt-4 grid grid-cols-1 gap-4 sm:gap-6">
							{CONTACT.map((info) => (
								<Link
									className="group rounded-lg border p-4 transition-colors duration-300 hover:border-primary/50 sm:p-6"
									href={info.href}
									key={info.title}
								>
									<h3 className="mb-2 font-medium text-lg sm:text-xl">
										{info.label}
									</h3>
									<p className="text-primary-foreground text-sm sm:text-base">
										{info.title}
									</p>
								</Link>
							))}
						</div>
					</aside>
				</div>
			</section>
			<FaqSection />
		</main>
	);
}
