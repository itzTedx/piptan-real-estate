import Link from "next/link";

import { MenuIcon } from "@sanity/icons";
import { ChevronDown } from "lucide-react";

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

import { IconPhone } from "@/app/assets/icons";
import { Logo } from "@/app/assets/logo";
import { NAV_LINKS } from "@/constants";
import { SERVICES } from "@/constants/mock-data";

import { AnimatedButton } from "../ui/animated-button";
import { Button } from "../ui/button";

export const Navbar = () => {
	return (
		<header className="sticky top-0 z-999 flex h-20 items-center transition-all duration-300 ease-in-out">
			<div
				aria-hidden="true"
				className="absolute top-0 z-10 h-full w-full bg-linear-to-b from-background/80 to-transparent"
			/>
			<nav className="container relative z-999 flex items-center justify-between gap-4">
				<Link className="flex items-center gap-2" href="/">
					<Logo />
				</Link>

				{/* Desktop Navigation */}
				<ul className="hidden items-center gap-2 lg:flex">
					{NAV_LINKS.map((link) => {
						if (link.href === "/services") {
							return (
								<li
									className="relative z-9999 font-jaguar text-lg tracking-wide"
									key={link.href}
								>
									<HoverCard closeDelay={100} openDelay={100}>
										<HoverCardTrigger asChild>
											<button className="flex items-center gap-1 px-3 py-2 font-jaguar text-lg tracking-wide transition-colors hover:text-primary">
												{link.title}
												<ChevronDown className="size-4" />
											</button>
										</HoverCardTrigger>
										<HoverCardContent
											align="center"
											className="z-99999 w-3xl p-0"
										>
											<div className="p-2">
												<div className="mb-2 px-2 py-1.5 font-semibold text-sm">
													Our Services
												</div>
												<div className="grid grid-cols-3 gap-1">
													{SERVICES.map((service) => (
														<Link
															className="rounded-sm px-2 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
															href={`/services#${service.title
																.toLowerCase()
																.replace(/\s+/g, "-")}`}
															key={service.id}
														>
															<div className="font-medium">{service.title}</div>
															<div className="line-clamp-2 text-muted-foreground text-xs">
																{service.description}
															</div>
														</Link>
													))}
												</div>
												<div className="mt-2 border-t pt-2">
													<Link
														className="block rounded-sm px-2 py-2 text-center font-medium text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
														href="/services"
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
							<li className="font-jaguar text-lg tracking-wide" key={link.href}>
								<Link
									className="px-3 py-2 transition-colors hover:text-primary"
									href={link.href}
								>
									{link.title}
								</Link>
							</li>
						);
					})}
				</ul>

				{/* Desktop Buttons */}
				<div className="hidden items-center gap-2 lg:flex">
					<Button size="icon" variant="outline">
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
						<Button className="size-9 lg:hidden" size="icon" variant="outline">
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
										className="font-jaguar text-xl tracking-wide"
										key={link.href}
									>
										<DrawerClose asChild>
											<Link
												className="block px-3 py-2 transition-colors hover:text-primary"
												href={link.href}
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
										className="w-full justify-center"
										size="lg"
										variant="outline"
									>
										<IconPhone /> Call Us
									</Button>
								</DrawerClose>
								<DrawerClose asChild>
									<AnimatedButton
										className="h-12"
										href="/portfolio"
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
				<div />
				<div />
				<div />
				<div />
				<div />
				<div />
			</div>
		</header>
	);
};
