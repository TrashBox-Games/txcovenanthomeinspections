"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/atoms/FadeIn/FadeIn";
import { SectionHeader } from "@/components/molecules/SectionHeader/SectionHeader";
import { ServiceCard } from "@/components/molecules/ServiceCard/ServiceCard";
import { SERVICES } from "@/lib/services";
import { staggerContainer } from "@/lib/motion";

export function ServicesSection() {
  return (
    <section className="bg-surface py-stack-xl">
      <div className="container-site">
        <FadeIn>
          <SectionHeader
            title="Our Specialized Services"
            description="Comprehensive inspections for every major system of your home."
          />
        </FadeIn>

        <motion.div
          className="grid grid-cols-1 gap-gutter md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.slug}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.15 },
                },
              }}
            >
              <ServiceCard
                title={service.title}
                imageSrc={service.image}
                imageAlt={service.imageAlt}
                href={`/services/${service.slug}`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
