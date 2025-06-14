import Link from "next/link";

import { IconBrandTelegram, IconBrandWhatsapp } from "@/assets/icons";

import { LeadForm } from "./form";

export const LeadSection = () => {
  return (
    <section className="bg-muted mt-20">
      <div className="container py-20">
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl lg:text-6xl">
            “Let the experts help you <br />
            make{" "}
            <span className="text-primary-foreground font-medium">
              the right investment
            </span>
            ”
          </h3>
          <p className="text-foreground/70 mt-2 mb-6 text-lg md:mt-4 md:text-xl lg:text-2xl">
            Feel free to contact with us
          </p>
        </div>
        <div className="mb-6 flex w-fit items-center gap-6 max-md:mx-auto md:gap-12">
          <Link
            href="/whatsapp"
            className="group flex items-center gap-3 outline-0 focus-visible:ring-0"
          >
            <div className="text-background bg-foreground grid size-9 place-content-center-safe rounded-sm">
              <IconBrandWhatsapp />
            </div>
            <span className="group-hover:text-primary-foreground group-focus-visible:text-primary-foreground underline-offset-2 group-focus-visible:underline">
              Whatsapp
            </span>
          </Link>
          <Link
            href="/telegram"
            className="group flex items-center gap-3 outline-0 focus-visible:ring-0"
          >
            <div className="text-background bg-foreground grid size-9 place-content-center-safe rounded-sm">
              <IconBrandTelegram />
            </div>
            <span className="group-hover:text-primary-foreground group-focus-visible:text-primary-foreground underline-offset-2 group-focus-visible:underline">
              Whatsapp
            </span>
          </Link>
        </div>
        <LeadForm />
        <p className="text-muted-foreground mt-4 text-center text-sm md:text-base">
          By submitting this form, you agree to our{" "}
          <Link
            href="/privacy"
            className="hover:text-primary-foreground underline underline-offset-2 transition-colors"
          >
            privacy policy
          </Link>
        </p>
      </div>
    </section>
  );
};
