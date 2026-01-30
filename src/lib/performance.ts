// Performance monitoring utilities
interface PerformanceEventTiming extends PerformanceEntry {
	processingStart: number;
	startTime: number;
}

interface LayoutShift extends PerformanceEntry {
	hadRecentInput: boolean;
	value: number;
}

export const measurePerformance = () => {
	if (typeof window === "undefined") return;

	// Measure Core Web Vitals
	if ("PerformanceObserver" in window) {
		// Largest Contentful Paint (LCP)
		new PerformanceObserver((list) => {
			const entries = list.getEntries();
			const lastEntry = entries[entries.length - 1];
			console.log("LCP:", lastEntry.startTime);
		}).observe({ entryTypes: ["largest-contentful-paint"] });

		// First Input Delay (FID)
		new PerformanceObserver((list) => {
			const entries = list.getEntries();
			entries.forEach((entry) => {
				const fidEntry = entry as PerformanceEventTiming;
				console.log("FID:", fidEntry.processingStart - fidEntry.startTime);
			});
		}).observe({ entryTypes: ["first-input"] });

		// Cumulative Layout Shift (CLS)
		new PerformanceObserver((list) => {
			let cls = 0;
			list.getEntries().forEach((entry) => {
				const layoutEntry = entry as LayoutShift;
				if (!layoutEntry.hadRecentInput) {
					cls += layoutEntry.value;
				}
			});
			console.log("CLS:", cls);
		}).observe({ entryTypes: ["layout-shift"] });
	}
};

// Preload critical resources
export const preloadCriticalResources = () => {
	if (typeof window === "undefined") return;

	// Preload critical fonts
	const fontLinks = [
		{ href: "/fonts/your-font.woff2", as: "font", type: "font/woff2" },
	];

	fontLinks.forEach(({ href, as, type }) => {
		const link = document.createElement("link");
		link.rel = "preload";
		link.href = href;
		link.as = as;
		if (type) link.type = type;
		document.head.appendChild(link);
	});
};

// Lazy load non-critical resources
export const lazyLoadResources = () => {
	if (typeof window === "undefined") return;

	// Intersection Observer for lazy loading
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const img = entry.target as HTMLImageElement;
				if (img.dataset.src) {
					img.src = img.dataset.src;
					img.removeAttribute("data-src");
					observer.unobserve(img);
				}
			}
		});
	});

	// Observe all lazy images
	document.querySelectorAll("img[data-src]").forEach((img) => {
		observer.observe(img);
	});
};
