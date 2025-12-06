import Image from "next/image";
import Link from "next/link";

import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTelegram,
} from "@/app/assets/icons";
import { Logo, Piptan } from "@/app/assets/logo";
import { CONTACT, NAV_LINKS } from "@/constants";
import { getProjectsCardData } from "@/features/projects/actions/projects-actions";

import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export const Footer = async () => {
  const portfolios = await getProjectsCardData();
  return (
    <footer
      className="overflow-hidden bg-black"
      role="contentinfo"
      aria-label="Website footer"
    >
      <div className="container">
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
              </Link>

              <p className="text-primary-foreground mt-2 text-base text-balance">
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
                    className="fill-foreground h-8 w-8 border-0 md:h-10 md:w-10"
                    aria-label="Follow us on Facebook"
                  >
                    <IconBrandFacebook className="size-5" />
                  </Button>
                </li>
                <li>
                  <Button
                    variant="outline"
                    size="icon"
                    className="fill-foreground h-8 w-8 border-0 md:h-10 md:w-10"
                    aria-label="Follow us on Instagram"
                  >
                    <IconBrandInstagram className="size-5" />
                  </Button>
                </li>
                <li>
                  <Button
                    variant="outline"
                    size="icon"
                    className="fill-foreground h-8 w-8 border-0 md:h-10 md:w-10"
                    aria-label="Follow us on LinkedIn"
                  >
                    <IconBrandLinkedin className="size-5" />
                  </Button>
                </li>
                <li>
                  <Button
                    variant="outline"
                    size="icon"
                    className="fill-foreground h-8 w-8 border-0 md:h-10 md:w-10"
                    aria-label="Follow us on LinkedIn"
                  >
                    <IconBrandTelegram className="size-5" />
                  </Button>
                </li>
              </ul>
            </div>
          </div>
          <nav
            className="col-span-1 gap-8 max-sm:grid max-sm:grid-cols-2 md:col-span-2 md:flex md:flex-row md:gap-14 lg:col-span-2 lg:place-content-end"
            aria-label="Footer navigation"
          >
            <div>
              <h3 className="text-muted-foreground text-base font-medium md:text-lg">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-2 md:space-y-3" role="list">
                {NAV_LINKS.map((nav) => (
                  <li key={nav.href}>
                    <Link
                      href={nav.href}
                      className="text-base font-medium md:text-lg"
                      aria-label={`Navigate to ${nav.title}`}
                    >
                      {nav.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-muted-foreground text-base font-medium md:text-lg">
                Portfolios
              </h3>
              <ul className="mt-4 space-y-2 md:space-y-3" role="list">
                {portfolios.map((data) => (
                  <li key={data._id}>
                    <Link
                      href={`/portfolio/${data.slug || ""}`}
                      className="text-base font-medium md:text-lg"
                      aria-label={`Navigate to ${data.title}`}
                    >
                      {data.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-muted-foreground text-base font-medium md:text-lg">
                Contact
              </h3>
              <ul className="mt-4 space-y-2 md:space-y-3" role="list">
                {CONTACT.map((nav) => (
                  <li key={nav.title}>
                    <Link
                      href={nav.href}
                      className="text-base font-medium md:text-lg"
                      aria-label={`Navigate to ${nav.title}`}
                    >
                      {nav.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </section>
        <Separator />
        <div
          className="text-muted-foreground flex flex-col items-center justify-between gap-4 pt-6 pb-8 text-xs md:flex-row md:pt-9 md:pb-12 md:text-sm"
          role="contentinfo"
        >
          <div className="max-w-3xl">
            <p>© {new Date().getFullYear()}, Piptan Capital L.L.C</p>
            <div className="mt-2 flex items-center justify-between gap-2">
              <div className="mb-1">
                <p className="mt-3 flex items-center gap-2 font-semibold">
                  Reg. No.: 2699641
                  <span
                    className="bg-muted-foreground block size-1.5 rounded-full"
                    aria-hidden="true"
                  />
                  Lic. No.: 1551118
                </p>
                <p>
                  Piptan Capital L.L.C operates in accordance with the laws and
                  regulations of the United Arab Emirates, We uphold the highest
                  ethical and regulatory standards in all our activities,
                  ensuring that our practices reflect both local and
                  international best practices.
                </p>
              </div>
              <div className="shrink-0 rounded-md border bg-white p-1.5">
                <Image
                  src="/images/licence-qrcode.jpg"
                  alt="Licence QR Code"
                  width={72}
                  height={72}
                />
              </div>
            </div>
          </div>
          <nav aria-label="Legal links" className="shrink-0">
            <div className="flex items-center gap-3">
              <Link href="/legal/terms-of-service" aria-label="Terms   ">
                Terms of Service
              </Link>
              <span
                className="bg-muted-foreground block size-1.5 rounded-full"
                aria-hidden="true"
              />
              <Link href="/legal/privacy" aria-label="Privacy Policy">
                Privacy policy
              </Link>
            </div>
          </nav>
        </div>
      </div>
      <Piptan
        className="h-auto w-full translate-y-1/3 text-white/10 md:translate-y-9"
        aria-hidden="true"
      />
    </footer>
  );
};
