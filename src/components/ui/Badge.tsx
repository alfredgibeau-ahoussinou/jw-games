"use client";

import { cn } from "@/lib/cn";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "info" | "neon" | "gold";
  className?: string;
  pulse?: boolean;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium",
        {
          "bg-[var(--surface-subtle)] text-[var(--text-secondary)]": variant === "default",
          "badge-success": variant === "success",
          "badge-warning": variant === "warning",
          "bg-[var(--accent-light)] text-[var(--accent)]": variant === "info" || variant === "neon",
          "badge-gold": variant === "gold",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
