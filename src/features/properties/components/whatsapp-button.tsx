"use client";

import { useRouter } from "next/navigation";

import { IconBrandWhatsappFilled } from "@/assets/icons";
import { Button } from "@/components/ui/button";

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
      size="sm"
      variant="secondary"
      onClick={(e) => {
        e.preventDefault();
        router.push(whatsappUrl);
      }}
    >
      <IconBrandWhatsappFilled className="size-6" />
      Whatsapp
    </Button>
  );
};
