"use client";

import Link from "next/link";

import { ArrowTopRightIcon, MenuIcon } from "@sanity/icons";

import { IconPhone } from "@/assets/icons";
import { Logo, WordMark } from "@/assets/logo";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { NAV_LINKS } from "@/constants";
import { cn } from "@/lib/utils";

import { Button } from "../ui/button";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 flex h-20 items-center transition-all duration-300 ease-in-out">
      <div
        className="from-background/60 to-background/0 absolute top-0 z-10 h-full w-full bg-gradient-to-b"
        aria-hidden="true"
      />
      <nav className="relative z-50 container flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
          <WordMark />
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
          <Link
            href="/contact"
            className={cn(
              "font-inter group bg-primary text-primary-foreground border-background/20 inset-shadow-foreground/20 pointer-events-auto relative flex h-9 w-fit cursor-pointer items-center justify-center overflow-hidden rounded-sm border-2 text-sm font-medium tracking-wide inset-shadow-sm sm:h-10 sm:px-3 sm:text-base md:h-11 md:px-4 md:text-lg",
              "transition-transform duration-700 ease-out will-change-transform hover:scale-x-[1.02] hover:ease-[cubic-bezier(.34,5.56,.64,1)]"
            )}
          >
            <span
              data-text={"Explore More"}
              className={cn(
                "relative block overflow-hidden",
                "after:text-secondary after:absolute after:left-0 after:z-1 after:translate-y-full after:transform after:duration-700 after:ease-[cubic-bezier(.4,0,0,1)] after:will-change-transform after:content-[attr(data-text)] group-hover:after:translate-y-0"
              )}
            >
              <span className="inline-block duration-700 ease-[cubic-bezier(.4,0,0,1)] group-hover:-translate-y-full">
                Explore More
              </span>
            </span>

            <span className="bg-secondary-foreground absolute inset-0 translate-y-full rounded-[50%_50%_0_0] transition-all duration-500 ease-[cubic-bezier(.4,0,0,1)] group-hover:translate-y-0 group-hover:rounded-none"></span>
          </Link>
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
                  <Button className="border-background/20 inset-shadow-foreground/20 w-full justify-center border-4 inset-shadow-sm">
                    Explore More <ArrowTopRightIcon />
                  </Button>
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
