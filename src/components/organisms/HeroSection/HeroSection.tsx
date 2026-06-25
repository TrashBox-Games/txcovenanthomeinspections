import { HeroBackground } from "./HeroBackground";
import { HeroSectionContent } from "./HeroSectionContent";

export function HeroSection() {
  return (
    <section className="relative flex h-[600px] w-full items-center justify-center overflow-hidden bg-primary">
      <HeroBackground />
      <HeroSectionContent />
    </section>
  );
}
