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
        "group rounded-xl border border-outline-variant bg-surface-container-lowest p-stack-md transition-colors hover:border-surface-tint",
        className,
      )}
      {...scaleOnHover}
    >
      {layout === "horizontal" ? (
        <div className="flex items-start gap-stack-md">
          <Icon className="h-8 w-8 shrink-0 text-gold transition-transform group-hover:scale-110" />
          <div>
            <h3 className="mb-stack-sm font-headline text-xl font-semibold text-primary">
              {title}
            </h3>
            <p className="text-sm text-on-surface-variant">{description}</p>
          </div>
        </div>
      ) : (
        <>
          <Icon className="mb-stack-sm h-8 w-8 text-gold transition-transform group-hover:scale-110" />
          <h3 className="mb-stack-sm font-headline text-xl font-semibold text-primary">
            {title}
          </h3>
          <p className="text-sm text-on-surface-variant">{description}</p>
        </>
      )}
    </motion.div>
  );
}
