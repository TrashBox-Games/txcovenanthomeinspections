import { HERO_IMAGE } from "@/lib/constants";
import { withBasePath } from "@/lib/favicon";

export function HeroBackground() {
  const heroSrc = withBasePath(HERO_IMAGE);

  return (
    <img
      src={heroSrc}
      alt="Modern home exterior with landscaped yard"
      fetchPriority="high"
      loading="eager"
      decoding="sync"
      className="absolute inset-0 h-full w-full object-cover object-center"
    />
  );
}
