"use client";

import { FadeIn } from "@/components/atoms/FadeIn/FadeIn";
import { MarkdownContent } from "@/components/molecules/MarkdownContent/MarkdownContent";

interface AboutBioSectionProps {
  content: string;
}

export function AboutBioSection({ content }: AboutBioSectionProps) {
  return (
    <section className="container-site pb-stack-xl">
      <FadeIn>
        <article className="mx-auto max-w-3xl">
          <MarkdownContent content={content} variant="article" />
        </article>
      </FadeIn>
    </section>
  );
}
