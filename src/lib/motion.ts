import type { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export function createFadeIn(duration = 0.5): Variants {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration, ease: "easeOut" },
    },
  };
}

export const fadeIn: Variants = createFadeIn();

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export const wordRevealEase = [0.33, 1, 0.68, 1] as const;
export const wordRevealDuration = 0.7;

export function createWordReveal(duration = wordRevealDuration): Variants {
  return {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: { duration, ease: wordRevealEase },
    },
  };
}

export const wordReveal: Variants = createWordReveal();

export const wordRevealContainer = (
  stagger = 0.04,
  delay = 0.1,
): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

export const scaleOnHover = {
  whileHover: { scale: 1.03 },
  transition: { type: "spring" as const, stiffness: 400, damping: 17 },
};

export const defaultViewport = { once: true, margin: "-80px" as const };
