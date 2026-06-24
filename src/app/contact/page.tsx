import type { Metadata } from "next";
import { FadeIn } from "@/components/atoms/FadeIn/FadeIn";
import { ContactForm } from "@/components/organisms/ContactForm/ContactForm";
import { ContactInfoPanel } from "@/components/organisms/ContactInfoPanel/ContactInfoPanel";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${SITE.name}. Call, text, or send a message to schedule your home inspection.`,
};

export default function ContactPage() {
  return (
    <div className="container-site py-stack-xl">
      <FadeIn className="mb-stack-xl text-center">
        <h1 className="mb-stack-sm font-headline text-[2rem] leading-10 font-bold text-primary md:text-5xl md:leading-14">
          Get in Touch
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-on-surface-variant">
          We&apos;re here to help with your home inspection needs.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">
        <FadeIn className="md:col-span-7" delay={0.1}>
          <ContactForm />
        </FadeIn>
        <FadeIn className="md:col-span-5" delay={0.2}>
          <ContactInfoPanel />
        </FadeIn>
      </div>
    </div>
  );
}
