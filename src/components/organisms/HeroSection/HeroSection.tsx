"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HeroCTAButton } from "@/components/molecules/HeroCTAButton/HeroCTAButton";
import { MaskedText } from "@/components/molecules/MaskedText/MaskedText";
import { HERO_IMAGE, SITE } from "@/lib/constants";
import { fadeIn, wordRevealDuration } from "@/lib/motion";

const HERO_HEADLINE_LINES = [
  "Inspecting with Integrity",
  "Serving with Purpose",
] as const;

const HERO_CTA_TEXT = "Schedule Your Inspection";
const WORD_STAGGER = 0.04;
const WORD_DELAY = 0.1;

function countWords(text: string): number {
  return text.split(" ").length;
}

function lineDelay(lineIndex: number): number {
  const priorWords = HERO_HEADLINE_LINES.slice(0, lineIndex).reduce(
    (sum, line) => sum + countWords(line),
    0,
  );

  return WORD_DELAY + priorWords * WORD_STAGGER;
}

function headlineAnimationEnd(): number {
  const totalWords = HERO_HEADLINE_LINES.reduce(
    (sum, line) => sum + countWords(line),
    0,
  );

  return WORD_DELAY + (totalWords - 1) * WORD_STAGGER + wordRevealDuration;
}

const TAGLINE_DELAY = headlineAnimationEnd() - 0.1;
const BUTTON_DELAY = headlineAnimationEnd() + 0.08;

export function HeroSection() {
  return (
    <section className="relative flex h-[600px] w-full items-center justify-center overflow-hidden bg-primary">
      <Image
        src={HERO_IMAGE}
        alt="Modern home exterior with landscaped yard"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-primary/60" aria-hidden />

      <div className="container-site relative z-10 flex flex-col items-center text-center">
        <h1 className="text-shadow-hero mb-stack-md max-w-4xl font-headline text-[2rem] leading-10 font-bold text-on-primary md:text-5xl md:leading-14">
          <MaskedText
            text={HERO_HEADLINE_LINES[0]}
            stagger={WORD_STAGGER}
            delay={lineDelay(0)}
          />
          <br />
          <MaskedText
            text={HERO_HEADLINE_LINES[1]}
            stagger={WORD_STAGGER}
            delay={lineDelay(1)}
          />
        </h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: TAGLINE_DELAY, duration: 0.75, ease: "easeOut" }}
          className="mb-stack-lg max-w-2xl text-lg leading-7 text-primary-fixed-dim"
        >
          {SITE.tagline}
        </motion.p>
        <HeroCTAButton
          href="/contact"
          text={HERO_CTA_TEXT}
          delay={BUTTON_DELAY}
          wordStagger={WORD_STAGGER}
        />
      </div>
    </section>
  );
}
