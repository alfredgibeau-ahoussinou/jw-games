"use client";

import type { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left";
  delay?: number;
  as?: "div" | "section" | "article" | "li";
}

export function ScrollReveal({ children, as = "div" }: ScrollRevealProps) {
  const Tag = as;
  return <Tag>{children}</Tag>;
}

interface ScrollRevealGroupProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  as?: "div" | "ul" | "section";
}

export function ScrollRevealGroup({ children, className, as = "div" }: ScrollRevealGroupProps) {
  const Tag = as;
  return <Tag className={className ?? "space-y-4"}>{children}</Tag>;
}

export function ScrollRevealItem({
  children,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
}) {
  const Tag = as;
  return <Tag>{children}</Tag>;
}
