"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

interface MotionExplorerLinkProps {
  href: string;
  label: string;
  icon: LucideIcon;
  index: number;
}

export function MotionExplorerLink({ href, label, icon: Icon }: MotionExplorerLinkProps) {
  return (
    <Link href={href}>
      <span>
        <Icon strokeWidth={2} aria-hidden />
      </span>
      <span>{label}</span>
      <ArrowUpRight aria-hidden />
    </Link>
  );
}

export function MotionExplorerRail({
  items,
  className,
}: {
  items: MotionExplorerLinkProps[];
  className?: string;
}) {
  return (
    <nav className={cn("netflix-explore", className)} aria-label="Explorer">
      {items.map((item) => (
        <MotionExplorerLink key={item.href} {...item} />
      ))}
    </nav>
  );
}
