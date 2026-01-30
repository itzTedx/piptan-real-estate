import React, { type ComponentProps, forwardRef, ReactNode } from "react";

import { Route } from "next";
import Link from "next/link";

import { cn } from "@/lib/utils";

type ButtonProps = ComponentProps<"button">;
type LinkProps = ComponentProps<typeof Link>;

interface BaseProps {
	variant?: "default" | "outline" | "secondary" | "primary";
	size?: "default" | "sm" | "lg";
	text: ReactNode;
	className?: string;
}

interface ButtonButtonProps
	extends BaseProps,
		Omit<ButtonProps, keyof BaseProps> {
	href?: Route;
}

interface LinkButtonProps extends BaseProps, Omit<LinkProps, keyof BaseProps> {
	href: Route;
}

type AnimatedButtonProps = ButtonButtonProps | LinkButtonProps;

const baseStyles =
	"font-medium relative group pointer-events-auto relative flex w-full md:w-fit cursor-pointer items-center justify-center overflow-hidden rounded-sm  transition-transform duration-700 ease-out will-change-transform hover:scale-x-[1.02] hover:ease-[cubic-bezier(.34,5.56,.64,1)] focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none  ring-offset-2";

const variants = {
	default: "bg-primary text-primary-foreground border",
	outline: "bg-foreground/10 text-white border border-foreground/80",
	secondary:
		"bg-secondary text-primary border-background/20 inset-shadow-foreground/20 inset-shadow-sm",
	primary:
		"bg-primary text-primary-foreground border-background/20 inset-shadow-foreground/20 border-2 inset-shadow-xl",
} as const;

const sizes = {
	default:
		"h-9 px-4 text-sm sm:h-10 sm:px-5 sm:text-base md:h-11 md:px-4 md:text-lg",
	sm: "h-8 px-3 text-sm sm:h-9 sm:px-4 sm:text-base",
	lg: "h-10 px-5 text-base sm:h-11 sm:px-6 sm:text-lg md:h-12 md:px-7 md:text-xl",
} as const;

const hoverTextColors = {
	default: "after:text-primary",
	outline: "after:text-primary",
	secondary: "after:text-secondary",
	primary: "after:text-primary",
} as const;

const hoverBackgrounds = {
	default: "bg-white",
	outline: "bg-white",
	secondary: "bg-secondary-foreground",
	primary: "bg-white",
} as const;

const textAnimationStyles =
	"after:absolute after:left-0 after:z-1 after:translate-y-full after:transform after:duration-700 after:ease-[cubic-bezier(.4,0,0,1)] after:will-change-transform after:content-[attr(data-text)] group-hover:after:translate-y-0 group-focus-visible:after:translate-y-0";

const backgroundAnimationStyles =
	"absolute inset-0 translate-y-full rounded-[50%_50%_0_0] transition-all duration-500 ease-[cubic-bezier(.4,0,0,1)] group-hover:translate-y-0 group-hover:rounded-none group-focus-visible:rounded-none group-focus-visible:translate-y-0";

// Helper function to extract text content from ReactNode
const extractTextFromNode = (node: ReactNode): string => {
	if (typeof node === "string") return node;
	if (typeof node === "number") return String(node);
	if (typeof node === "boolean") return "";

	if (node && typeof node === "object" && "props" in node) {
		const element = node as React.ReactElement;
		const { children } = element.props as { children?: ReactNode };
		if (children) {
			if (Array.isArray(children)) {
				return children.map(extractTextFromNode).join("");
			}
			return extractTextFromNode(children);
		}
	}

	return "";
};

const ButtonContent = ({
	text,
	variant,
}: {
	text: ReactNode;
	variant: AnimatedButtonProps["variant"];
}) => (
	<>
		<span
			className={cn(
				"relative block overflow-hidden",
				textAnimationStyles,
				hoverTextColors[variant ?? "default"]
			)}
			data-text={extractTextFromNode(text)}
		>
			<span className="inline-block duration-700 ease-[cubic-bezier(.4,0,0,1)] group-hover:-translate-y-full">
				{text}
			</span>
		</span>
		<span
			className={cn(
				backgroundAnimationStyles,
				hoverBackgrounds[variant ?? "default"]
			)}
		/>
	</>
);

export const AnimatedButton = forwardRef<
	HTMLButtonElement | HTMLAnchorElement,
	AnimatedButtonProps
>(
	(
		{ variant = "default", size = "default", text, className, href, ...props },
		ref
	) => {
		const baseClassName = cn(
			baseStyles,
			variants[variant],
			sizes[size],
			className
		);

		if (href) {
			const linkProps = { ...props } as Omit<LinkProps, "href">;
			return (
				<Link
					className={baseClassName}
					href={href}
					ref={ref as React.Ref<HTMLAnchorElement>}
					{...linkProps}
				>
					<ButtonContent text={text} variant={variant} />
				</Link>
			);
		}

		return (
			<button
				className={baseClassName}
				ref={ref as React.Ref<HTMLButtonElement>}
				{...(props as ButtonProps)}
			>
				<ButtonContent text={text} variant={variant} />
			</button>
		);
	}
);

AnimatedButton.displayName = "AnimatedButton";
