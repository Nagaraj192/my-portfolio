"use client";
import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "default" | "secondary" | "ghost";
  className?: string;
};

const base =
  "px-4 py-2 rounded-xl transition focus:outline-none focus:ring-2 focus:ring-offset-2";
const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-600",
  secondary:
    "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700 focus:ring-neutral-400",
  ghost:
    "bg-transparent text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100/60 dark:hover:bg-neutral-800/60 focus:ring-neutral-400",
};

export function Button({
  children,
  className,
  asChild,
  variant = "default",
  ...props
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${className ?? ""}`.trim();

  // Supports: <Button asChild><a href="...">...</a></Button>
  if (asChild) {
    return <span className={cls}>{children}</span>;
  }

  return (
    <button {...props} className={cls}>
      {children}
    </button>
  );
}
