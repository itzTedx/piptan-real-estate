"use client";

import { createContext, RefObject, useContext } from "react";

type TestimonialsScrollContextValue = RefObject<HTMLElement | null> | null;

const TestimonialsScrollContext =
	createContext<TestimonialsScrollContextValue>(null);

export const TestimonialsScrollProvider = TestimonialsScrollContext.Provider;

export const useTestimonialsScrollContainer = () => {
	const ctx = useContext(TestimonialsScrollContext);
	if (!ctx) {
		throw new Error(
			"useTestimonialsScrollContainer must be used within TestimonialsScrollProvider"
		);
	}
	return ctx;
};
