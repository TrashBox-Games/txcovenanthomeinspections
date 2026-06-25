"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { scaleOnHover } from "@/lib/motion";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  layout?: "default" | "horizontal";
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
  layout = "default",
}: FeatureCardProps) {
  return (
    <motion.div
      className={cn(
        "group h-full rounded-xl border border-outline-variant bg-surface-container-lowest p-stack-md shadow-ambient transition-colors hover:border-gold/40 hover:bg-primary-fixed/40",
        className,
      )}
      {...scaleOnHover}
    >
      {layout === "horizontal" ? (
        <div className="flex h-full items-center gap-stack-md">
          <div className="inline-flex shrink-0 rounded-lg bg-gold/15 p-2">
            <Icon className="h-8 w-8 shrink-0 text-gold transition-transform group-hover:scale-110" />
          </div>
          <div>
            <h3 className="mb-stack-sm font-headline text-xl font-semibold text-primary">
              {title}
            </h3>
            <p className="text-sm text-on-surface-variant">{description}</p>
          </div>
        </div>
      ) : (
        <div className="flex h-full flex-col">
          <div className="mb-stack-sm inline-flex w-fit shrink-0 rounded-lg bg-gold/15 p-2">
            <Icon className="h-8 w-8 shrink-0 text-gold transition-transform group-hover:scale-110" />
          </div>
          <h3 className="mb-stack-sm font-headline text-xl font-semibold text-primary">
            {title}
          </h3>
          <p className="text-sm text-on-surface-variant">{description}</p>
        </div>
      )}
    </motion.div>
  );
}
