"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { AnimatedButton } from "@/components/ui/animated-button";
import { Form } from "@/components/ui/form";

import { cn } from "@/lib/utils";

import { FloatingLabelInput } from "./floating-label-input";
import { ContactFormData, contactSchema } from "./schema";

export function ContactForm() {
	const form = useForm<ContactFormData>({
		resolver: zodResolver(contactSchema),
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			message: "",
		},
	});

	function onSubmit(values: ContactFormData) {
		console.log(values);
		// TODO: Implement form submission
	}

	return (
		<Form {...form}>
			<form
				className={cn(
					"flex w-full flex-col gap-4 rounded-md bg-muted p-4 sm:p-6 md:p-8 lg:col-span-2 lg:p-9"
				)}
				onSubmit={form.handleSubmit(onSubmit)}
			>
				<FloatingLabelInput control={form.control} label="Name" name="name" />

				<FloatingLabelInput
					control={form.control}
					label="Email"
					name="email"
					type="email"
				/>

				<FloatingLabelInput
					control={form.control}
					label="Phone number"
					name="phone"
					type="tel"
				/>

				<FloatingLabelInput
					control={form.control}
					isTextarea
					label="Message"
					name="message"
				/>

				<AnimatedButton className="w-full" text="Send Message" type="submit" />
			</form>
		</Form>
	);
}
