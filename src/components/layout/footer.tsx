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
			aria-label="Website footer"
			className="overflow-hidden bg-black"
			role="contentinfo"
		>
			<div className="container">
				<section
					aria-label="Footer content"
					className="grid grid-cols-1 gap-6 py-8 md:grid-cols-2 md:py-12 lg:grid-cols-3 lg:py-16"
				>
					<div className="flex flex-col items-start justify-between gap-4">
						<div>
							<Link
								aria-label="Piptan Investment Home"
								className="flex items-center"
								href="/"
							>
								<Logo />
							</Link>

							<p className="mt-2 text-balance text-base text-primary-foreground">
								Piptan Investment is your trusted partner in premium real
								estate. From luxury residences to strategic investments, we help
								you make confident, future-ready property decisions in Dubai and
								beyond.
							</p>
						</div>
						<div className="w-full">
							<h3 className="mb-3 text-lg md:text-xl">Connect with us</h3>
							<ul
								aria-label="Social media links"
								className="flex flex-wrap items-center gap-2 md:gap-3"
								role="list"
							>
								<li>
									<Button
										aria-label="Follow us on Facebook"
										className="h-8 w-8 border-0 fill-foreground md:h-10 md:w-10"
										size="icon"
										variant="outline"
									>
										<IconBrandFacebook className="size-5" />
									</Button>
								</li>
								<li>
									<Button
										aria-label="Follow us on Instagram"
										className="h-8 w-8 border-0 fill-foreground md:h-10 md:w-10"
										size="icon"
										variant="outline"
									>
										<IconBrandInstagram className="size-5" />
									</Button>
								</li>
								<li>
									<Button
										aria-label="Follow us on LinkedIn"
										className="h-8 w-8 border-0 fill-foreground md:h-10 md:w-10"
										size="icon"
										variant="outline"
									>
										<IconBrandLinkedin className="size-5" />
									</Button>
								</li>
								<li>
									<Button
										aria-label="Follow us on LinkedIn"
										className="h-8 w-8 border-0 fill-foreground md:h-10 md:w-10"
										size="icon"
										variant="outline"
									>
										<IconBrandTelegram className="size-5" />
									</Button>
								</li>
							</ul>
						</div>
					</div>
					<nav
						aria-label="Footer navigation"
						className="col-span-1 gap-8 max-sm:grid max-sm:grid-cols-2 md:col-span-2 md:flex md:flex-row md:gap-14 lg:col-span-2 lg:place-content-end"
					>
						<div>
							<h3 className="font-medium text-base text-muted-foreground md:text-lg">
								Quick Links
							</h3>
							<ul className="mt-4 space-y-2 md:space-y-3" role="list">
								{NAV_LINKS.map((nav) => (
									<li key={nav.href}>
										<Link
											aria-label={`Navigate to ${nav.title}`}
											className="font-medium text-base md:text-lg"
											href={nav.href}
										>
											{nav.title}
										</Link>
									</li>
								))}
							</ul>
						</div>
						<div>
							<h3 className="font-medium text-base text-muted-foreground md:text-lg">
								Portfolios
							</h3>
							<ul className="mt-4 space-y-2 md:space-y-3" role="list">
								{portfolios.map((data) => (
									<li key={data._id}>
										<Link
											aria-label={`Navigate to ${data.title}`}
											className="font-medium text-base md:text-lg"
											href={`/portfolio/${data.slug || ""}`}
										>
											{data.title}
										</Link>
									</li>
								))}
							</ul>
						</div>
						<div>
							<h3 className="font-medium text-base text-muted-foreground md:text-lg">
								Contact
							</h3>
							<ul className="mt-4 space-y-2 md:space-y-3" role="list">
								{CONTACT.map((nav) => (
									<li key={nav.title}>
										<Link
											aria-label={`Navigate to ${nav.title}`}
											className="font-medium text-base md:text-lg"
											href={nav.href}
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
					className="flex flex-col items-center justify-between gap-4 pt-6 pb-8 text-muted-foreground text-xs md:flex-row md:pt-9 md:pb-12 md:text-sm"
					role="contentinfo"
				>
					<div className="max-w-3xl">
						<p>© {new Date().getFullYear()}, Piptan Capital L.L.C</p>
						<div className="mt-2 flex items-center justify-between gap-2">
							<div className="mb-1">
								<p className="mt-3 flex items-center gap-2 font-semibold">
									Reg. No.: 2699641
									<span
										aria-hidden="true"
										className="block size-1.5 rounded-full bg-muted-foreground"
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
									alt="Licence QR Code"
									height={72}
									src="/images/licence-qrcode.jpg"
									width={72}
								/>
							</div>
						</div>
					</div>
					<nav aria-label="Legal links" className="shrink-0">
						<div className="flex items-center gap-3">
							<Link aria-label="Terms   " href="/legal/terms-of-service">
								Terms of Service
							</Link>
							<span
								aria-hidden="true"
								className="block size-1.5 rounded-full bg-muted-foreground"
							/>
							<Link aria-label="Privacy Policy" href="/legal/privacy">
								Privacy policy
							</Link>
						</div>
					</nav>
				</div>
			</div>
			<Piptan
				aria-hidden="true"
				className="h-auto w-full translate-y-1/3 text-primary md:translate-y-9"
			/>
		</footer>
	);
};
