"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/atoms/Button/Button";
import { MaskedText } from "@/components/molecules/MaskedText/MaskedText";
import { wordRevealDuration, wordRevealEase } from "@/lib/motion";

interface HeroCTAButtonProps {
  href: string;
  text: string;
  delay: number;
  wordStagger: number;
}

export function HeroCTAButton({
  href,
  text,
  delay,
  wordStagger,
}: HeroCTAButtonProps) {
  return (
    <motion.div
      data-testid="hero-cta-reveal"
      className="inline-block w-fit"
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      animate={{ clipPath: "inset(0 0% 0 0)" }}
      transition={{
        delay,
        duration: wordRevealDuration,
        ease: wordRevealEase,
      }}
    >
      <Button href={href} variant="gold" size="lg" className="w-fit">
        <MaskedText text={text} stagger={wordStagger} delay={delay + 0.05} />
      </Button>
    </motion.div>
  );
}
