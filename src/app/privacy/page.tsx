import type { Metadata } from "next";
import { FadeIn } from "@/components/atoms/FadeIn/FadeIn";
import { MarkdownContent } from "@/components/molecules/MarkdownContent/MarkdownContent";
import { SITE } from "@/lib/constants";
import { getPrivacyPolicy } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Learn how ${SITE.name} collects and uses information submitted through our website contact form.`,
};

const LAST_UPDATED = "July 10, 2026";

export default function PrivacyPage() {
  return (
    <div className="container-site py-stack-xl">
      <FadeIn className="mb-stack-xl text-center">
        <h1 className="mb-stack-sm font-headline text-[2rem] leading-10 font-bold text-primary md:text-5xl md:leading-14">
          Privacy Policy
        </h1>
        <p className="text-sm text-on-surface-variant">
          Last updated: {LAST_UPDATED}
        </p>
      </FadeIn>

      <FadeIn className="mx-auto max-w-3xl" delay={0.1}>
        <article>
          <MarkdownContent content={getPrivacyPolicy()} />
        </article>
      </FadeIn>
    </div>
  );
}
