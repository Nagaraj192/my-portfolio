"use client";
import * as React from "react";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "secondary";
  className?: string;
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const styles =
    variant === "secondary"
      ? "bg-neutral-200 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100"
      : "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200";

  return (
    <span
      className={`inline-block px-2 py-1 text-xs font-semibold rounded-xl ${styles} ${className ?? ""}`}
    >
      {children}
    </span>
  );
}
