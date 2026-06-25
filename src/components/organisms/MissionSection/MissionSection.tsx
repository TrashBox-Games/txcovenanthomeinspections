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
      "From foundation to roof, every major system is carefully evaluated so you know exactly what you're buying or maintaining before closing day.",
  },
  {
    icon: FileText,
    title: "Professional Reports",
    description:
      "You'll receive a detailed, easy-to-read report with photos and plain-language findings—typically within 24 hours of your inspection.",
  },
  {
    icon: Handshake,
    title: "Reliable Service",
    description:
      "Flexible scheduling, on-time arrivals, and direct communication from start to finish. I'm here to answer questions long after the inspection is complete.",
    layout: "horizontal" as const,
  },
];

export function MissionSection() {
  return (
    <section className="bg-primary-fixed py-stack-xl">
      <div className="container-site grid grid-cols-1 items-stretch gap-gutter lg:grid-cols-12">
        <FadeIn className="lg:col-span-6">
          <div className="flex h-full flex-col rounded-xl border border-gold/30 bg-primary p-stack-md shadow-ambient">
            <Shield
              className="mb-stack-md h-8 w-8 fill-gold text-gold"
              aria-hidden
            />
            <h2 className="mb-stack-md font-headline text-2xl font-semibold text-on-primary md:text-[2rem] md:leading-10">
              Committed to Excellence
            </h2>
            <p className="mb-stack-md text-base text-primary-fixed-dim">
              Texas Covenant Home Inspections is committed to serving clients
              with integrity, professionalism, and care. My mission is to
              provide thorough, high-quality home inspections while building
              genuine relationships based on trust.
            </p>
            <p className="text-base text-primary-fixed-dim">
              Whether you&apos;re purchasing a home or maintaining your current
              one, I&apos;m here to help.
            </p>
          </div>
        </FadeIn>

        <motion.div
          className="grid auto-rows-fr grid-cols-1 gap-stack-md sm:grid-cols-2 lg:col-span-6"
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
                feature.layout === "horizontal"
                  ? "h-full sm:col-span-2"
                  : "h-full"
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
