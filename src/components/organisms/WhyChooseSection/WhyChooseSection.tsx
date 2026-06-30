"use client";

import { motion } from "framer-motion";
import { BadgeCheck, FileText, MessageCircle } from "lucide-react";
import { FadeIn } from "@/components/atoms/FadeIn/FadeIn";
import { SectionHeader } from "@/components/molecules/SectionHeader/SectionHeader";
import { WhyChooseCard } from "@/components/molecules/WhyChooseCard/WhyChooseCard";
import { staggerContainer } from "@/lib/motion";

const reasons = [
  {
    icon: MessageCircle,
    title: "Personable",
    description:
      "Call or text anytime. We'll be there to answer your questions and help where you need it.",
  },
  {
    icon: BadgeCheck,
    title: "Licensed Professional",
    description:
      "Licensed officially with the Texas Real Estate Commission (TREC).",
  },
  {
    icon: FileText,
    title: "Detailed Reports",
    description:
      "We deliver comprehensive, easy-to-understand reports quickly to help you make informed decisions.",
  },
];

export function WhyChooseSection() {
  return (
    <section className="bg-primary py-stack-xl">
      <div className="container-site">
        <FadeIn>
          <SectionHeader
            title="Why Choose Us"
            description="We bring a unique blend of professional expertise and unwavering integrity to every home we inspect."
            variant="inverted"
            showAccent
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
