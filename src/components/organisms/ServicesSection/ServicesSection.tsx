"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/atoms/FadeIn/FadeIn";
import { SectionHeader } from "@/components/molecules/SectionHeader/SectionHeader";
import { ServiceCard } from "@/components/molecules/ServiceCard/ServiceCard";
import { SERVICES } from "@/lib/services";
import { staggerContainer } from "@/lib/motion";

export function ServicesSection() {
  return (
    <section className="border-y border-outline-variant bg-surface-container-low py-stack-xl">
      <div className="container-site">
        <FadeIn>
          <SectionHeader
            title="What We Inspect"
            description="We inspect all aspects of your home, from the big and small parts to the systems and structures."
            showAccent
          />
        </FadeIn>

        <motion.div
          className="flex flex-wrap justify-center gap-gutter"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.slug}
              className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
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
