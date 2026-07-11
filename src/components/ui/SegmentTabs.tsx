"use client";

import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

export interface SegmentTabItem<T extends string> {
  id: T;
  label: string;
  icon?: LucideIcon;
}

interface SegmentTabsProps<T extends string> {
  items: SegmentTabItem<T>[];
  value: T;
  onChange: (id: T) => void;
  layoutId?: string;
  className?: string;
  size?: "sm" | "md";
  fullWidth?: boolean;
  scrollable?: boolean;
  ariaLabel?: string;
}

export function SegmentTabs<T extends string>({
  items,
  value,
  onChange,
  className,
  ariaLabel = "Onglets",
}: SegmentTabsProps<T>) {
  return (
    <div role="tablist" aria-label={ariaLabel} className={cn("segment-tabs", className)}>
      {items.map(({ id, label, icon: Icon }) => {
        const active = value === id;
        return (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(id)}
          >
            {Icon && <Icon aria-hidden />}
            {label}
          </button>
        );
      })}
    </div>
  );
}
