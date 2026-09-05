import type { Metadata } from "next";

import { Cta } from "@/components/layout/cta";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { PaymentNoticePopup } from "@/components/payment-notice-popup";

const meta = {
	title: "Legacy Infra Investments | Piptan Capital Middle-East",
	description:
		"Explore expertly curated UAE real estate opportunities designed to deliver rental income, high ROI, and long-term capital appreciation.",
	keywords:
		"Dubai real estate, luxury homes, commercial property, real estate investment, property development, Dubai property market, luxury apartments, villas Dubai, real estate agents Dubai, property investment UAE",
};

export const metadata: Metadata = {
	title: meta.title,
	description: meta.description,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Navbar />
			{children}
			<Cta />
			<Footer />
			<PaymentNoticePopup />
		</>
	);
}
