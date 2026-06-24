"use client";

import { motion } from "framer-motion";
import {
  Droplets,
  Home,
  PlugZap,
  Warehouse,
} from "lucide-react";
import { FadeIn } from "@/components/atoms/FadeIn/FadeIn";
import { SectionHeader } from "@/components/molecules/SectionHeader/SectionHeader";
import { StandardItem } from "@/components/molecules/StandardItem/StandardItem";
import { staggerContainer } from "@/lib/motion";

const standards = [
  {
    icon: Home,
    title: "Roof & Exterior",
    description: "Shingles, flashing, gutters, siding, and drainage.",
  },
  {
    icon: Warehouse,
    title: "Structure & Foundation",
    description: "Basements, crawlspaces, slab, and structural integrity.",
  },
  {
    icon: PlugZap,
    title: "Electrical Systems",
    description: "Panels, wiring, outlets, and safety compliance.",
  },
  {
    icon: Droplets,
    title: "Plumbing & HVAC",
    description: "Pipes, fixtures, water heaters, and climate control.",
  },
];

export function InspectionStandardsSection() {
  return (
    <section className="container-site py-stack-xl">
      <FadeIn>
        <SectionHeader
          title="Our Inspection Standards"
          description="We leave no stone unturned. Our comprehensive inspections cover all major systems of your home."
        />
      </FadeIn>

      <motion.div
        className="grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        {standards.map((item, index) => (
          <motion.div
            key={item.title}
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { delay: index * 0.1 },
              },
            }}
          >
            <StandardItem {...item} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
