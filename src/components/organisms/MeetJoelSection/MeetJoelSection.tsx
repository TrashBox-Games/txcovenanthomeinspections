"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { FadeIn } from "@/components/atoms/FadeIn/FadeIn";
import { JOEL_PORTRAIT } from "@/lib/constants";
import { fadeIn } from "@/lib/motion";

export function MeetJoelSection() {
  return (
    <section className="container-site py-stack-xl">
      <div className="grid grid-cols-1 items-center gap-gutter md:grid-cols-12">
        <FadeIn className="order-2 flex flex-col gap-stack-lg md:order-1 md:col-span-6">
          <div className="flex flex-col gap-stack-sm">
            <span className="text-sm font-semibold tracking-widest text-tertiary uppercase">
              Our Inspector
            </span>
            <h1 className="font-headline text-[2rem] leading-10 font-bold text-primary md:text-5xl md:leading-14">
              Meet Joel Piercy
            </h1>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest p-stack-md shadow-ambient md:p-stack-lg">
            <div className="absolute top-0 left-0 h-full w-1 bg-gold" />
            <p className="mb-stack-md text-lg leading-7 text-on-surface">
              Joel Piercy is a dedicated home inspector and a young adults
              pastor serving the Texas community. He brings a unique perspective
              of integrity and service to every inspection.
            </p>
            <blockquote className="my-stack-md border-l-2 border-outline-variant pl-stack-md text-base text-on-surface-variant italic">
              &ldquo;And whatever you do, in word or deed, do everything in the
              name of the Lord Jesus, giving thanks to God the Father through
              him.&rdquo;
              <footer className="mt-2 text-xs not-italic text-on-surface-variant">
                — Colossians 3:17
              </footer>
            </blockquote>
            <p className="text-base text-on-surface">
              Texas Covenant Home Inspections is committed to serving clients
              with integrity, professionalism, and care. My mission is to
              provide thorough, high-quality home inspections while building
              genuine relationships based on trust.
            </p>
          </div>
        </FadeIn>

        <motion.div
          className="order-1 md:order-2 md:col-span-5 md:col-start-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="relative overflow-hidden rounded-xl border border-outline-variant shadow-ambient">
            <Image
              src={JOEL_PORTRAIT}
              alt="Portrait of Joel Piercy, certified home inspector"
              width={600}
              height={600}
              className="aspect-square w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-primary/80 to-transparent p-stack-md pt-stack-xl">
              <div className="flex items-center gap-2 text-on-primary">
                <BadgeCheck className="h-5 w-5" />
                <span className="text-sm font-semibold tracking-wider">
                  Certified Inspector
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
