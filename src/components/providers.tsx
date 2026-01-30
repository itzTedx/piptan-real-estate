"use client";

import React from "react";

import { ProgressProvider } from "@bprogress/next/app";

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<ProgressProvider
			color="#D40C1A"
			height="3px"
			memo
			options={{ showSpinner: false }}
			shallowRouting
		>
			{children}
		</ProgressProvider>
	);
};

export default Providers;
