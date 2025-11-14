"use client";

import { useState } from "react";

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

  if (!isOpen) return null;

  return (
    <Card className="bg-card/80 fixed right-3 bottom-3 z-[999999] w-lg gap-1 py-3.5 backdrop-blur-lg">
      <CardHeader className="px-3.5">
        <CardTitle>Payment Security Notice</CardTitle>
      </CardHeader>
      <CardContent className="space-y-1 px-3.5">
        <p className="text-xs">
          Piptan Capital Inc. maintains the highest standards of financial
          integrity and client security. Please note that the company does not
          accept cash payments in any form. No employee, associate, or
          representative is authorized to collect, request, or accept cash or
          payment through personal accounts, messaging platforms, or third-party
          channels.
        </p>
        <p className="text-xs">
          All transactions and payments must be made directly to Piptan Capital
          Inc. through our official and verified banking or digital payment
          channels only. This measure ensures transparency, safety, and full
          compliance with UAE financial regulations.
        </p>
      </CardContent>
      <CardFooter className="mt-2 px-3.5">
        <Button size="sm" onClick={() => setIsOpen(false)} className="text-sm">
          Ok, I Understand
        </Button>
      </CardFooter>
    </Card>
  );
};
