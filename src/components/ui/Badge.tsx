"use client";

import { cn } from "@/lib/cn";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "info" | "neon" | "gold";
  className?: string;
  pulse?: boolean;
}

const VARIANT_CLASS = {
  default: undefined,
  success: "badge--success",
  warning: "badge--warning",
  info: "badge--info",
  neon: "badge--neon",
  gold: "badge--gold",
} as const;

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return <span className={cn("badge", VARIANT_CLASS[variant], className)}>{children}</span>;
}
