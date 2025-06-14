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
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn(
          "bg-muted col-span-2 flex w-full flex-col gap-4 rounded-md p-9"
        )}
      >
        <FloatingLabelInput control={form.control} name="name" label="Name" />

        <FloatingLabelInput
          control={form.control}
          name="email"
          label="Email"
          type="email"
        />

        <FloatingLabelInput
          control={form.control}
          name="phone"
          label="Phone number"
          type="tel"
        />

        <FloatingLabelInput
          control={form.control}
          name="message"
          label="Message"
          isTextarea
        />

        <AnimatedButton text="Send Message" type="submit" className="w-full" />
      </form>
    </Form>
  );
}
