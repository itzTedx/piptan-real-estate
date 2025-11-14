import Link from "next/link";

import { MenuIcon } from "@sanity/icons";

import { IconPhone } from "@/app/assets/icons";
import { FullLogo } from "@/app/assets/logo";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { NAV_LINKS } from "@/constants";

import { AnimatedButton } from "../ui/animated-button";
import { Button } from "../ui/button";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-[999] flex h-20 items-center transition-all duration-300 ease-in-out">
      <div
        className="from-background/80 absolute top-0 z-10 h-full w-full bg-gradient-to-b to-transparent"
        aria-hidden="true"
      />
      <nav className="relative z-[999] container flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2">
          <FullLogo />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-2 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="font-jaguar text-lg tracking-wide">
              <Link
                href={link.href}
                className="hover:text-primary px-3 py-2 transition-colors"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="outline" size="icon">
            <IconPhone />
          </Button>
          <AnimatedButton
            href="/portfolio"
            text="Explore More"
            variant="primary"
          />
        </div>

        {/* Mobile Navigation Drawer */}
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline" size="icon" className="size-9 lg:hidden">
              <MenuIcon />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Menu</DrawerTitle>
            </DrawerHeader>
            <div className="px-4 pb-8">
              <ul className="flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <li
                    key={link.href}
                    className="font-jaguar text-xl tracking-wide"
                  >
                    <DrawerClose asChild>
                      <Link
                        href={link.href}
                        className="hover:text-primary block px-3 py-2 transition-colors"
                      >
                        {link.title}
                      </Link>
                    </DrawerClose>
                  </li>
                ))}
              </ul>
              <div className="mt-8 grid grid-cols-2 gap-2">
                <DrawerClose asChild>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full justify-center"
                  >
                    <IconPhone /> Call Us
                  </Button>
                </DrawerClose>
                <DrawerClose asChild>
                  <AnimatedButton
                    href="/portfolio"
                    className="h-12"
                    text="Explore Portfolio"
                    variant="primary"
                  />
                </DrawerClose>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
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
