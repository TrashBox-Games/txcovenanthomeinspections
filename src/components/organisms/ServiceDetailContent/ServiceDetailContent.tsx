"use client";

import { Phone } from "lucide-react";
import { Button } from "@/components/atoms/Button/Button";
import { FadeIn } from "@/components/atoms/FadeIn/FadeIn";
import type { Service } from "@/lib/services";
import { SITE } from "@/lib/constants";

interface ServiceDetailContentProps {
  service: Service;
}

export function ServiceDetailContent({ service }: ServiceDetailContentProps) {
  return (
    <section className="bg-surface py-stack-xl md:py-20">
      <div className="container-site">
        <div className="grid grid-cols-1 gap-gutter lg:grid-cols-12">
          <div className="space-y-stack-xl lg:col-span-8">
            <FadeIn>
              <div className="max-w-none space-y-6 text-on-surface-variant">
                <h2 className="font-headline text-[1.75rem] leading-9 font-semibold text-primary md:text-[2rem] md:leading-10">
                  {service.title} Inspection Service Details
                </h2>
                {service.detailParagraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-base leading-6 md:text-lg md:leading-7"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </FadeIn>
          </div>

          <FadeIn className="mt-8 lg:col-span-4 lg:mt-0" delay={0.1}>
            <div className="glass-card sticky top-28 space-y-6 rounded-xl p-6">
              <h3 className="font-headline text-xl font-semibold text-primary md:text-2xl">
                Schedule This Inspection
              </h3>
              <p className="text-sm leading-6 text-on-surface-variant md:text-base">
                Ready to move forward? Contact {SITE.shortName} to schedule a{" "}
                {service.title.toLowerCase()} inspection in the {SITE.location}.
              </p>
              <div className="space-y-4 pt-2">
                <Button href="/contact" variant="gold" size="lg" className="w-full">
                  Schedule Your Inspection
                </Button>
                <Button
                  href={SITE.phoneHref}
                  variant="outline"
                  size="lg"
                  className="w-full"
                >
                  <Phone className="h-5 w-5" aria-hidden />
                  Call {SITE.phone}
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
