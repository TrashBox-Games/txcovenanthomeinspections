"use client";

import { FadeIn } from "@/components/atoms/FadeIn/FadeIn";
import { ChampionsCareerCard } from "@/components/molecules/ChampionsCareerCard/ChampionsCareerCard";
import { MarkdownContent } from "@/components/molecules/MarkdownContent/MarkdownContent";

interface AboutBioSectionProps {
  content: string;
}

export function AboutBioSection({ content }: AboutBioSectionProps) {
  return (
    <section className="container-site pb-stack-xl">
      <div className="grid grid-cols-1 gap-gutter lg:grid-cols-12">
        <FadeIn className="lg:col-span-8">
          <article className="mx-auto max-w-3xl lg:mx-0 lg:max-w-none">
            <MarkdownContent content={content} variant="article" />
          </article>
        </FadeIn>

        <FadeIn className="mt-8 lg:col-span-4 lg:mt-0" delay={0.1}>
          <div className="lg:sticky lg:top-28">
            <ChampionsCareerCard />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
