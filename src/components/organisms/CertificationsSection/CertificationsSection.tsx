"use client";

import { motion } from "framer-motion";
import { Gavel, Shield, Verified } from "lucide-react";
import { FadeIn } from "@/components/atoms/FadeIn/FadeIn";

const certifications = [
  { icon: Verified, label: "InterNACHI Certified" },
  { icon: Gavel, label: "TREC Licensed" },
  { icon: Shield, label: "Fully Insured" },
];

export function CertificationsSection() {
  return (
    <section className="container-site py-stack-lg text-center">
      <FadeIn>
        <p className="mb-stack-md text-sm font-semibold tracking-wider text-on-surface-variant uppercase">
          Professional Certifications
        </p>
      </FadeIn>

      <motion.div
        className="flex flex-wrap items-center justify-center gap-stack-lg opacity-70 grayscale transition-all duration-300 hover:grayscale-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {certifications.map(({ icon: Icon, label }) => (
          <motion.div
            key={label}
            className="flex items-center gap-2"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Icon className="h-8 w-8 text-primary" />
            <span className="font-headline text-xl font-bold text-primary">
              {label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
