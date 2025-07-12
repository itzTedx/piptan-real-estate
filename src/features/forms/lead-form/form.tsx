"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { AnimatedButton } from "@/components/ui/animated-button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import { LeadFormData, leadSchema } from "./schema";

interface Props {
  className?: string;
}

export function LeadForm({ className }: Props) {
  const form = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: "",
      phone: "",
    },
  });

  function onSubmit(values: LeadFormData) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn(
          "bg-foreground flex w-full flex-col gap-4 rounded-md p-9 md:flex-row",
          className
        )}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="sr-only">Name</FormLabel>
              <FormControl>
                <div className="group relative">
                  <FormLabel
                    className="origin-start text-input group-focus-within:text-background has-[+input:not(:placeholder-shown)]:text-background absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-base transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium"
                    htmlFor="name"
                  >
                    <span className="bg-foreground inline-flex px-1">Name</span>
                  </FormLabel>
                  <Input
                    placeholder=""
                    className="text-background"
                    {...field}
                    id="name"
                  />
                </div>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="sr-only">Phone Number</FormLabel>
              <FormControl>
                <div className="group relative">
                  <FormLabel
                    className="origin-start text-input group-focus-within:text-background has-[+input:not(:placeholder-shown)]:text-background absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-base transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium"
                    htmlFor="phone"
                  >
                    <span className="bg-foreground inline-flex px-1">
                      Phone number
                    </span>
                  </FormLabel>
                  <Input
                    placeholder=""
                    className="text-background"
                    type="tel"
                    {...field}
                    id="phone"
                  />
                </div>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <AnimatedButton
          text="Get Consultation"
          type="submit"
          className="w-full"
        />
      </form>
    </Form>
  );
}
