"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeInUp } from "@/lib/motion";

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  className?: string;
}

export function ProcessStep({
  step,
  title,
  description,
  className,
}: ProcessStepProps) {
  return (
    <motion.div
      className={cn(
        "relative z-10 flex w-full flex-1 flex-col items-center text-center",
        className,
      )}
      variants={fadeInUp}
    >
      <div className="mb-stack-md flex h-20 w-20 items-center justify-center rounded-full border-4 border-surface-container-low bg-gold font-headline text-2xl font-semibold text-on-primary shadow-md">
        {step}
      </div>
      <h3 className="mb-stack-sm font-headline text-xl font-semibold text-primary">
        {title}
      </h3>
      <p className="px-4 text-base text-on-surface-variant">{description}</p>
    </motion.div>
  );
}
