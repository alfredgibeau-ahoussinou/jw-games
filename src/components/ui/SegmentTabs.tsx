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
  size = "md",
  fullWidth = false,
  scrollable = false,
  ariaLabel = "Onglets",
}: SegmentTabsProps<T>) {
  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      className={cn(
        "segment-tabs",
        scrollable && "segment-tabs--scrollable",
        fullWidth && "segment-tabs--full",
        size === "sm" && "segment-tabs--sm",
        className
      )}
    >
      {items.map(({ id, label, icon: Icon }) => {
        const active = value === id;
        return (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={active}
            tabIndex={active ? 0 : -1}
            onClick={() => onChange(id)}
          >
            {Icon && <Icon className="h-4 w-4 shrink-0" aria-hidden />}
            {label}
          </button>
        );
      })}
    </div>
  );
}
