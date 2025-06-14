import Link from "next/link";

import { Logo, Piptan, WordMark } from "@/assets/logo";
import { FOOTER_LINKS } from "@/constants";

import { TextEffect } from "../animation/text-animation";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-black" role="contentinfo" aria-label="Website footer">
      <div className="container">
        <h2 className="font-jaguar text-primary py-3 text-center text-4xl md:text-6xl lg:text-[8rem]">
          <TextEffect text="Invest. Grow. Thrive." />
        </h2>
        <Separator />
        <section
          className="grid grid-cols-1 gap-6 py-8 md:grid-cols-2 md:py-12 lg:grid-cols-3 lg:py-16"
          aria-label="Footer content"
        >
          <div className="flex flex-col items-start justify-between gap-4">
            <div>
              <Link
                href="/"
                className="flex items-center"
                aria-label="Piptan Investment Home"
              >
                <Logo />
                <WordMark />
              </Link>
              <p className="text-primary-foreground mt-3 text-base text-balance md:text-lg">
                Piptan Investment is your trusted partner in premium real
                estate. From luxury residences to strategic investments, we help
                you make confident, future-ready property decisions in Dubai and
                beyond.
              </p>
            </div>
            <div className="w-full">
              <h3 className="mb-3 text-lg md:text-xl">Connect with us</h3>
              <ul
                className="flex flex-wrap items-center gap-2 md:gap-3"
                role="list"
                aria-label="Social media links"
              >
                <li>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 border-0 md:h-10 md:w-10"
                    aria-label="Follow us on Facebook"
                  >
                    H
                  </Button>
                </li>
                <li>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 border-0 md:h-10 md:w-10"
                    aria-label="Follow us on Twitter"
                  >
                    H
                  </Button>
                </li>
                <li>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 border-0 md:h-10 md:w-10"
                    aria-label="Follow us on Instagram"
                  >
                    H
                  </Button>
                </li>
                <li>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 border-0 md:h-10 md:w-10"
                    aria-label="Follow us on LinkedIn"
                  >
                    H
                  </Button>
                </li>
              </ul>
            </div>
          </div>
          <nav
            className="col-span-1 gap-8 max-sm:grid max-sm:grid-cols-2 md:col-span-2 md:flex md:flex-row md:gap-14 lg:col-span-2 lg:place-content-end"
            aria-label="Footer navigation"
          >
            {FOOTER_LINKS.map((nav) => (
              <ul key={nav.heading} role="list">
                <li>
                  <h3 className="text-muted-foreground text-base font-medium md:text-lg">
                    {nav.heading}
                  </h3>
                  <ul className="mt-4 space-y-2 md:space-y-3" role="list">
                    {nav.links.map((link) => (
                      <li key={link.title}>
                        <Link
                          href={link.href}
                          className="text-base font-medium md:text-lg"
                          aria-label={`Navigate to ${link.title}`}
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            ))}
          </nav>
        </section>
        <Separator />
        <div
          className="text-muted-foreground flex flex-col items-center justify-between gap-4 pt-6 pb-8 text-xs md:flex-row md:pt-9 md:pb-12 md:text-sm"
          role="contentinfo"
        >
          <p>© {new Date().getFullYear()}, Piptan Investment & Securities</p>
          <nav aria-label="Legal links">
            <div className="flex items-center gap-3">
              <Link href="/privacy" aria-label="Privacy Policy">
                Privacy policy
              </Link>
              <span
                className="bg-muted-foreground block size-1.5 rounded-full"
                aria-hidden="true"
              />
              <Link href="/privacy" aria-label="Terms and Conditions">
                Terms
              </Link>
            </div>
          </nav>
        </div>
      </div>
      <Piptan
        className="w-full translate-y-9 text-white/10"
        aria-hidden="true"
      />
    </footer>
  );
};
