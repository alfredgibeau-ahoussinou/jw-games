"use client";

import { useRef, useState, useCallback, type ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

interface InteractiveStripProps {
  title: string;
  subtitle?: string;
  href?: string;
  linkLabel?: string;
  children: ReactNode;
  className?: string;
  itemWidth?: string;
}

export function InteractiveStrip({
  title,
  subtitle,
  href,
  linkLabel = "Tout voir",
  children,
  className,
}: InteractiveStripProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const childCount = useRef(0);

  const onScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el?.firstElementChild) return;
    const cardWidth = el.firstElementChild.clientWidth;
    const gap = 8;
    const idx = Math.round(el.scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.min(idx, childCount.current - 1));
  }, []);

  const items = Array.isArray(children) ? children : [children];

  return (
    <div className={cn("netflix-row", className)}>
      <div className="section-header" style={{ paddingInline: "var(--page-gutter)" }}>
        <div>
          <h2 className="netflix-row-title">{title}</h2>
          {subtitle && <p className="netflix-row-sub">{subtitle}</p>}
        </div>
        {href && (
          <Link href={href}>
            {linkLabel}
            <ArrowUpRight aria-hidden />
          </Link>
        )}
      </div>

      <div ref={scrollRef} className="netflix-row__track scroll-row" onScroll={onScroll}>
        {items.map((child, i) => {
          childCount.current = items.length;
          return (
            <div key={i}>{child}</div>
          );
        })}
      </div>

      {items.length > 1 && (
        <div className="scroll-dots">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Élément ${i + 1}`}
              aria-current={i === activeIndex ? "true" : undefined}
              onClick={() => {
                const el = scrollRef.current;
                if (!el?.firstElementChild) return;
                const w = el.firstElementChild.clientWidth + 8;
                el.scrollTo({ left: w * i, behavior: "smooth" });
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
