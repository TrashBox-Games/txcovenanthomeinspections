"use client";

import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg text-sm font-semibold tracking-wider transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary-container text-on-primary hover:opacity-90",
        gold: "bg-gold text-on-primary shadow-ambient hover:bg-gold-hover",
        outline:
          "border border-primary-container text-primary-container hover:bg-surface-container-high",
        ghost: "border border-primary text-primary hover:bg-surface-container-low",
      },
      size: {
        sm: "px-4 py-2",
        md: "px-6 py-2",
        lg: "px-8 py-4",
      },
    },
    defaultVariants: {
      variant: "gold",
      size: "md",
    },
  },
);

type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  ComponentPropsWithoutRef<"button"> & { href?: undefined };

type ButtonAsLink = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, "href"> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  className,
  variant,
  size,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = props as ButtonAsButton;

  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
