"use client";

import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/atoms/Button/Button";
import { FadeIn } from "@/components/atoms/FadeIn/FadeIn";
import type { Service } from "@/lib/services";
import { SITE } from "@/lib/constants";

interface ServiceDetailContentProps {
  service: Service;
}

export function ServiceDetailContent({ service }: ServiceDetailContentProps) {
  return (
    <section className="bg-surface-container-low py-stack-xl">
      <div className="container-site grid grid-cols-1 gap-gutter lg:grid-cols-12">
        <div className="flex flex-col gap-gutter lg:col-span-7">
          <FadeIn>
            <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-stack-lg shadow-ambient">
              <h2 className="mb-stack-md font-headline text-2xl font-semibold text-primary md:text-[2rem] md:leading-10">
                What We Inspect
              </h2>
              <p className="mb-stack-lg text-base leading-6 text-on-surface-variant md:text-lg md:leading-7">
                {service.overview}
              </p>
              <ul className="space-y-stack-md">
                {service.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 text-base text-on-surface"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {service.sections.map((section, index) => (
            <FadeIn key={section.id} delay={0.05 * (index + 1)}>
              <section
                id={section.id}
                className="scroll-mt-24 rounded-xl border border-outline-variant bg-surface-container-lowest p-stack-lg shadow-ambient"
              >
                <h2 className="mb-stack-md font-headline text-xl font-semibold text-primary md:text-2xl">
                  {section.label}
                </h2>
                <p className="text-base leading-6 text-on-surface-variant md:text-lg md:leading-7">
                  {section.description}
                </p>
              </section>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="lg:col-span-5" delay={0.1}>
          <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-stack-lg shadow-ambient lg:sticky lg:top-24">
            <h2 className="mb-stack-md font-headline text-xl font-semibold text-primary">
              Schedule This Inspection
            </h2>
            <p className="mb-stack-lg text-base text-on-surface-variant">
              Ready to move forward? Contact {SITE.shortName} to schedule a{" "}
              {service.title.toLowerCase()} inspection in the {SITE.location}.
            </p>
            <div className="flex flex-col gap-stack-md">
              <Button href="/contact" variant="gold" size="lg" className="w-full">
                Schedule Your Inspection
              </Button>
              <Button href={SITE.phoneHref} variant="outline" size="lg" className="w-full">
                Call {SITE.phone}
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
