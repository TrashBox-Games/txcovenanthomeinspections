"use client";

import { motion } from "framer-motion";
import { Church, FileText, MapPin } from "lucide-react";
import { FadeIn } from "@/components/atoms/FadeIn/FadeIn";
import { SectionHeader } from "@/components/molecules/SectionHeader/SectionHeader";
import { WhyChooseCard } from "@/components/molecules/WhyChooseCard/WhyChooseCard";
import { staggerContainer } from "@/lib/motion";

const reasons = [
  {
    icon: Church,
    title: "Pastor's Integrity",
    description:
      "Honesty and transparency aren't just buzzwords; they are the foundation of everything we do.",
  },
  {
    icon: FileText,
    title: "Detailed Reports",
    description:
      "Comprehensive, easy-to-understand reports delivered quickly to help you make informed decisions.",
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    description:
      "Deep knowledge of Texas homes, common regional issues, and local building practices.",
  },
];

export function WhyChooseSection() {
  return (
    <section className="border-y border-outline-variant bg-surface-container py-stack-xl">
      <div className="container-site">
        <FadeIn>
          <SectionHeader
            title="Why Choose Us"
            description="We bring a unique blend of professional expertise and unwavering integrity to every home we inspect."
          />
        </FadeIn>

        <motion.div
          className="grid grid-cols-1 gap-gutter md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.12 },
                },
              }}
            >
              <WhyChooseCard {...reason} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
