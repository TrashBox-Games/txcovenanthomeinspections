"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/atoms/Button/Button";
import { HERO_IMAGE, SITE } from "@/lib/constants";
import { fadeIn, staggerContainer } from "@/lib/motion";

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

      <motion.div
        className="container-site relative z-10 flex flex-col items-center text-center"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h1
          variants={fadeIn}
          className="text-shadow-hero mb-stack-md max-w-4xl font-headline text-[2rem] leading-10 font-bold text-on-primary md:text-5xl md:leading-14"
        >
          Inspecting with Integrity, Serving with Purpose
        </motion.h1>
        <motion.p
          variants={fadeIn}
          className="mb-stack-lg max-w-2xl text-lg leading-7 text-primary-fixed-dim"
        >
          {SITE.tagline}
        </motion.p>
        <motion.div variants={fadeIn}>
          <Button href="/contact" variant="gold" size="lg">
            Schedule Your Inspection
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
