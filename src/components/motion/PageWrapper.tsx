"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/** Contenu visible sans JS — animation CSS, pas d'opacity:0 bloquée par une hydratation ratée. */
export function PageWrapper({ children }: { children: ReactNode }) {
  return <div className="page-enter">{children}</div>;
}

export const staggerContainer = {
  animate: { transition: { staggerChildren: 0.05 } },
};

export const staggerItem = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};
