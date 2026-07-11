"use client";

import type { ReactNode } from "react";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "ul";
}

export function SectionReveal({ children, as = "div" }: SectionRevealProps) {
  const Tag = as;
  return <Tag>{children}</Tag>;
}

interface RevealItemProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
}

export function RevealItem({ children, as = "div" }: RevealItemProps) {
  const Tag = as;
  return <Tag>{children}</Tag>;
}
