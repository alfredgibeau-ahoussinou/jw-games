"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function PageWrapper({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("page", className)}>{children}</div>;
}

export { staggerContainer, staggerItem, staggerItemScale } from "@/lib/motion";
