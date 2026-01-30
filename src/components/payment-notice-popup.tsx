"use client";

import { useEffect, useState } from "react";

import { Button } from "./ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./ui/card";

export const PaymentNoticePopup = () => {
	const [isOpen, setIsOpen] = useState(true);

	useEffect(() => {
		// Check if user has dismissed the popup within the last week
		const checkPopupStatus = () => {
			const dismissedAt = localStorage.getItem("payment-notice-dismissed");

			if (dismissedAt) {
				const dismissedTime = Number.parseInt(dismissedAt, 10);
				const oneWeekInMs = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
				const currentTime = Date.now();

				// If it's been less than a week, keep the popup closed
				if (currentTime - dismissedTime < oneWeekInMs) {
					setIsOpen(false);
				} else {
					// More than a week has passed, clear the stored value and show popup again
					localStorage.removeItem("payment-notice-dismissed");
					setIsOpen(true);
				}
			}
		};

		checkPopupStatus();
	}, []);

	const handleDismiss = () => {
		// Store the current timestamp when user dismisses the popup
		localStorage.setItem("payment-notice-dismissed", Date.now().toString());
		setIsOpen(false);
	};

	if (!isOpen) return null;

	return (
		<Card className="fixed right-0 bottom-0 z-999 max-w-lg gap-1 rounded-none bg-card/80 py-2.5 backdrop-blur-lg md:right-3 md:bottom-3 md:rounded-lg md:py-3.5">
			<CardHeader className="px-2.5 md:px-3.5">
				<CardTitle>Payment Security Notice</CardTitle>
			</CardHeader>
			<CardContent className="space-y-1 px-2.5 md:px-3.5">
				<p className="text-[10px] md:text-xs">
					Piptan Capital Inc. maintains the highest standards of financial
					integrity and client security. Please note that the company does not
					accept cash payments in any form. No employee, associate, or
					representative is authorized to collect, request, or accept cash or
					payment through personal accounts, messaging platforms, or third-party
					channels.
				</p>
				<p className="text-[10px] md:text-xs">
					All transactions and payments must be made directly to Piptan Capital
					Inc. through our official and verified banking or digital payment
					channels only. This measure ensures transparency, safety, and full
					compliance with UAE financial regulations.
				</p>
			</CardContent>
			<CardFooter className="mt-1.5 px-2.5 md:mt-2 md:px-3.5">
				<Button className="text-sm" onClick={handleDismiss} size="sm">
					Ok, I Understand
				</Button>
			</CardFooter>
		</Card>
	);
};
