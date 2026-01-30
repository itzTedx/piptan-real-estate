"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import { IconBrandWhatsappFilled } from "@/app/assets/icons";

interface Props {
	message: string;
}

export const WhatsappButton = ({ message }: Props) => {
	const encodedMessage = encodeURIComponent(message);
	const whatsappUrl = `https://wa.me/971525560345?text=${encodedMessage}`;

	const router = useRouter();
	return (
		<Button
			className="relative z-50 w-full"
			onClick={(e) => {
				e.preventDefault();
				router.push(whatsappUrl);
			}}
			size="sm"
			variant="secondary"
		>
			<IconBrandWhatsappFilled className="size-6" />
			Whatsapp
		</Button>
	);
};
