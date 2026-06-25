"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { scaleOnHover } from "@/lib/motion";

interface WhyChooseCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function WhyChooseCard({
  icon: Icon,
  title,
  description,
  className,
}: WhyChooseCardProps) {
  return (
    <motion.div
      className={cn(
        "rounded-xl border border-outline-variant border-t-4 border-t-gold bg-surface-container-lowest p-stack-lg text-center shadow-ambient",
        className,
      )}
      {...scaleOnHover}
    >
      <span className="mb-stack-sm inline-flex rounded-full bg-gold/15 p-4 text-gold">
        <Icon className="h-12 w-12" />
      </span>
      <h3 className="mb-stack-sm font-headline text-xl font-semibold text-primary">
        {title}
      </h3>
      <p className="text-base text-on-surface-variant">{description}</p>
    </motion.div>
  );
}
