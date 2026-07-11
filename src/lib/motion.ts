/** Motion system centralisé — durées, easings, variants framer-motion */

export const motionDurations = {
  instant: 0.1,
  fast: 0.18,
  normal: 0.28,
  slow: 0.45,
  slower: 0.65,
} as const;

export const motionEasings = {
  out: [0.22, 1, 0.36, 1] as const,
  inOut: [0.65, 0, 0.35, 1] as const,
  spring: { type: "spring" as const, stiffness: 380, damping: 32 },
  springSoft: { type: "spring" as const, stiffness: 260, damping: 28 },
  springNav: { type: "spring" as const, stiffness: 420, damping: 34 },
  springSheet: { type: "spring" as const, stiffness: 380, damping: 36 },
};

export const stagger = {
  fast: 0.04,
  normal: 0.06,
  slow: 0.08,
} as const;

export const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 8 },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.98 },
};

export const pageTransition = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: motionDurations.normal, ease: motionEasings.out },
};

export function staggerContainer(staggerChildren: number = stagger.normal, delayChildren = 0) {
  return {
    initial: {},
    animate: {
      transition: { staggerChildren, delayChildren },
    },
  };
}

export const staggerItem = {
  initial: { opacity: 0, y: 14 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: motionDurations.normal, ease: motionEasings.out },
  },
};

export const staggerItemScale = {
  initial: { opacity: 0, y: 12, scale: 0.97 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: motionDurations.normal, ease: motionEasings.out },
  },
};

export const navIndicatorTransition = motionEasings.springNav;

export const tapScale = { scale: 0.96 };
export const hoverLift = { y: -3 };

/** Transition zéro si prefers-reduced-motion */
export function reducedTransition(reduced: boolean) {
  return reduced ? { duration: 0 } : undefined;
}

/** Révélation au scroll — fade + translate Y */
export const scrollReveal = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: motionDurations.normal, ease: motionEasings.out },
  },
};

/** Révélation latérale pour storytelling */
export const scrollRevealX = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: motionDurations.slow, ease: motionEasings.out },
  },
};

/** Mot par mot — stagger pour titres */
export function wordStaggerContainer(staggerChildren = 0.04) {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren, delayChildren: 0.1 },
    },
  };
}

export const wordStaggerItem = {
  hidden: { opacity: 0, y: 20, rotateX: -40 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: motionDurations.normal, ease: motionEasings.out },
  },
};

/** Parallax scroll mapping */
export const parallaxSlow = { input: [0, 1] as const, output: ["0%", "25%"] as const };
export const parallaxFast = { input: [0, 1] as const, output: ["0%", "45%"] as const };

/** Pulse CTA */
export const pulseGlow = {
  scale: [1, 1.02, 1],
  boxShadow: [
    "0 0 20px rgba(245, 158, 11, 0.25)",
    "0 0 32px rgba(245, 158, 11, 0.4)",
    "0 0 20px rgba(245, 158, 11, 0.25)",
  ],
};
