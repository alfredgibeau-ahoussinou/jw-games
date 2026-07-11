"use client";

import type { ReactNode } from "react";

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}

export function InteractiveCard({ children, className }: InteractiveCardProps) {
  return <div className={className ?? "card"}>{children}</div>;
}
