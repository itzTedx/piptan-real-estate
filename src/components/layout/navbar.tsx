import Link from "next/link";

import { ArrowTopRightIcon, PinIcon } from "@sanity/icons";

import { Logo, WordMark } from "@/assets/logo";
import { NAV_LINKS } from "@/constants/nav";

import { Button } from "../ui/button";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 flex h-16 items-center transition-all duration-300 ease-in-out">
      <div
        className="from-background/60 to-background/0 absolute top-0 z-10 h-full w-full bg-gradient-to-b"
        aria-hidden="true"
      />
      <nav className="relative z-50 container flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
          <WordMark />
        </Link>

        <ul className="flex items-center gap-2">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="px-3 py-2">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <PinIcon />
          </Button>
          <Button className="border-background/20 inset-shadow-foreground/20 border-4 inset-shadow-sm">
            Explore More <ArrowTopRightIcon />
          </Button>
        </div>
      </nav>
      <div className="gradient-blur">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
};
