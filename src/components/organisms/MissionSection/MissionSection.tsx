"use client";

import { motion } from "framer-motion";
import { FileText, Handshake, SearchCheck, Shield } from "lucide-react";
import { FadeIn } from "@/components/atoms/FadeIn/FadeIn";
import { FeatureCard } from "@/components/molecules/FeatureCard/FeatureCard";
import { staggerContainer } from "@/lib/motion";

const features = [
  {
    icon: SearchCheck,
    title: "Thorough Inspections",
    description:
      "Meticulous attention to detail in every corner of your property.",
  },
  {
    icon: FileText,
    title: "Professional Reports",
    description: "Clear, actionable insights delivered promptly.",
  },
  {
    icon: Handshake,
    title: "Reliable Service",
    description:
      "Dependable partnership throughout your real estate journey.",
    layout: "horizontal" as const,
  },
];

export function MissionSection() {
  return (
    <section className="bg-surface-container-low py-stack-xl">
      <div className="container-site grid grid-cols-1 items-center gap-gutter lg:grid-cols-12">
        <FadeIn className="lg:col-span-6">
          <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-stack-lg shadow-ambient">
            <div className="mb-stack-md inline-flex h-12 w-12 items-center justify-center rounded-full bg-tertiary-fixed">
              <Shield className="h-6 w-6 fill-gold text-gold" />
            </div>
            <h2 className="mb-stack-md font-headline text-2xl font-semibold text-primary md:text-[2rem] md:leading-10">
              Committed to Excellence
            </h2>
            <p className="mb-stack-md text-base text-on-surface-variant">
              Texas Covenant Home Inspections is committed to serving clients
              with integrity, professionalism, and care. My mission is to
              provide thorough, high-quality home inspections while building
              genuine relationships based on trust.
            </p>
            <p className="text-base text-on-surface-variant">
              Whether you&apos;re purchasing a home or maintaining your current
              one, I&apos;m here to help.
            </p>
          </div>
        </FadeIn>

        <motion.div
          className="grid grid-cols-1 gap-stack-md sm:grid-cols-2 lg:col-span-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.1 },
                },
              }}
              className={
                feature.layout === "horizontal" ? "sm:col-span-2" : undefined
              }
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
