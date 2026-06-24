"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { defaultViewport, fadeInUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface FadeInProps extends HTMLMotionProps<"div"> {
  delay?: number;
}

export function FadeIn({ className, delay = 0, children, ...props }: FadeInProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={{
        hidden: fadeInUp.hidden,
        visible: {
          ...fadeInUp.visible,
          transition: {
            ...(typeof fadeInUp.visible === "object" &&
            fadeInUp.visible !== null &&
            "transition" in fadeInUp.visible
              ? fadeInUp.visible.transition
              : {}),
            delay,
          },
        },
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
