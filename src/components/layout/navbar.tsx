import Link from "next/link";

import { MenuIcon } from "@sanity/icons";
import { ChevronDown } from "lucide-react";

import { IconPhone } from "@/app/assets/icons";
import { Logo } from "@/app/assets/logo";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { NAV_LINKS } from "@/constants";
import { SERVICES } from "@/constants/mock-data";

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
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-2 lg:flex">
          {NAV_LINKS.map((link) => {
            if (link.href === "/services") {
              return (
                <li
                  key={link.href}
                  className="font-jaguar text-lg tracking-wide"
                >
                  <HoverCard openDelay={100} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <button className="hover:text-primary font-jaguar flex items-center gap-1 px-3 py-2 text-lg tracking-wide transition-colors">
                        {link.title}
                        <ChevronDown className="size-4" />
                      </button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-[38rem] p-0" align="center">
                      <div className="p-2">
                        <div className="mb-2 px-2 py-1.5 text-sm font-semibold">
                          Our Services
                        </div>
                        <div className="grid grid-cols-3 gap-1">
                          {SERVICES.map((service) => (
                            <Link
                              key={service.id}
                              href={`/services#${service.title
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                              className="hover:bg-accent hover:text-accent-foreground rounded-sm px-2 py-2 text-sm transition-colors"
                            >
                              <div className="font-medium">{service.title}</div>
                              <div className="text-muted-foreground line-clamp-1 text-xs">
                                {service.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-2 border-t pt-2">
                          <Link
                            href="/services"
                            className="hover:bg-accent hover:text-accent-foreground block rounded-sm px-2 py-2 text-center text-sm font-medium transition-colors"
                          >
                            View All Services
                          </Link>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </li>
              );
            }
            return (
              <li key={link.href} className="font-jaguar text-lg tracking-wide">
                <Link
                  href={link.href}
                  className="hover:text-primary px-3 py-2 transition-colors"
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
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
