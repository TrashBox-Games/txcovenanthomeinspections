"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/atoms/FadeIn/FadeIn";
import { ProcessStep } from "@/components/molecules/ProcessStep/ProcessStep";
import { SectionHeader } from "@/components/molecules/SectionHeader/SectionHeader";
import { staggerContainer } from "@/lib/motion";

const steps = [
  {
    step: 1,
    title: "Book Easily",
    description:
      "Schedule your inspection online or give us a call. We accommodate your timeline.",
  },
  {
    step: 2,
    title: "The Inspection",
    description:
      "A thorough, multi-point examination of the property. You are welcome to attend.",
  },
  {
    step: 3,
    title: "Detailed Report",
    description:
      "Receive a comprehensive, easy-to-read digital report, usually within 24 hours.",
  },
];

export function InspectionJourneySection() {
  return (
    <section className="border-y border-outline-variant bg-surface-container-low py-stack-xl">
      <div className="container-site">
        <FadeIn>
          <SectionHeader
            title="The Inspection Journey"
            description="A simple, transparent process from start to finish."
          />
        </FadeIn>

        <motion.div
          className="relative flex flex-col items-start gap-stack-lg md:flex-row md:justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <div
            className="absolute top-10 right-[10%] left-[10%] hidden h-0.5 bg-outline-variant md:block"
            aria-hidden
          />
          {steps.map((step) => (
            <ProcessStep key={step.step} {...step} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
