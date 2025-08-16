"use client";
import * as React from "react";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ children, className, ...props }: DivProps) {
  return (
    <div
      {...props}
      className={`border rounded-2xl p-4 shadow-sm bg-white dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800 ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className, ...props }: DivProps) {
  return (
    <div {...props} className={`mb-2 ${className ?? ""}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className, ...props }: DivProps) {
  return (
    <div {...props} className={`${className ?? ""}`}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className, ...props }: DivProps) {
  return (
    <h3 {...props} className={`text-lg font-bold ${className ?? ""}`}>
      {children}
    </h3>
  );
}

