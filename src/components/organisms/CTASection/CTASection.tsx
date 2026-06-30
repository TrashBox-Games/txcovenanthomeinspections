"use client";

import { Mail, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/atoms/Button/Button";
import { FadeIn } from "@/components/atoms/FadeIn/FadeIn";
import { SITE } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="bg-gradient-to-br from-primary via-primary-container to-primary py-stack-xl">
      <FadeIn className="container-site mx-auto flex max-w-3xl flex-col items-center gap-stack-lg text-center">
        <MessageCircle className="h-12 w-12 text-gold" />
        <h2 className="font-headline text-2xl font-semibold text-on-primary md:text-[2rem] md:leading-10">
          Questions before or after the inspection are always welcome.
        </h2>
        <p className="text-lg text-primary-fixed-dim">
          Just call or text. We look forward to serving you.
        </p>
        <div className="mt-stack-sm flex flex-col gap-stack-md sm:flex-row">
          <Button href={SITE.phoneHref} variant="gold" size="lg">
            <Phone className="h-4 w-4" />
            Call or Text Now
          </Button>
          <Button
            href={`mailto:${SITE.email}`}
            variant="outline"
            size="lg"
            className="border-on-primary text-on-primary hover:bg-on-primary/10"
          >
            <Mail className="h-4 w-4" />
            Email Joel
          </Button>
        </div>
      </FadeIn>
    </section>
  );
}
