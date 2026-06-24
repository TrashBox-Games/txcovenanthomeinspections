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
        "rounded-xl border border-outline-variant bg-surface-container-lowest p-stack-lg text-center shadow-sm",
        className,
      )}
      {...scaleOnHover}
    >
      <Icon className="mx-auto mb-stack-md h-12 w-12 text-gold" />
      <h3 className="mb-stack-sm font-headline text-xl font-semibold text-primary">
        {title}
      </h3>
      <p className="text-base text-on-surface-variant">{description}</p>
    </motion.div>
  );
}
