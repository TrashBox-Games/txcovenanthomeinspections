"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { wordReveal, wordRevealContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface MaskedTextProps {
  text: string;
  className?: string;
  stagger?: number;
  delay?: number;
}

function splitIntoWords(text: string): string[] {
  return text.split(" ");
}

export function MaskedText({
  text,
  className,
  stagger = 0.04,
  delay = 0.1,
}: MaskedTextProps) {
  const prefersReducedMotion = useReducedMotion();
  const words = splitIntoWords(text);

  if (prefersReducedMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <motion.span
      className={cn("inline-block", className)}
      initial="hidden"
      animate="visible"
      variants={wordRevealContainer(stagger, delay)}
    >
      {words.map((word, wordIndex) => (
        <Fragment key={`${word}-${wordIndex}`}>
          <span
            className="-mb-[0.15em] inline-block overflow-hidden pb-[0.15em]"
            data-testid="word-mask"
          >
            <motion.span
              variants={wordReveal}
              className="inline-block whitespace-nowrap"
            >
              {word}
            </motion.span>
          </span>
          {wordIndex < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </motion.span>
  );
}
