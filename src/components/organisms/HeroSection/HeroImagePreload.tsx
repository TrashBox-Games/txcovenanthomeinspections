import { HERO_IMAGE } from "@/lib/constants";
import { withBasePath } from "@/lib/favicon";

export function HeroImagePreload() {
  return (
    <link
      rel="preload"
      as="image"
      href={withBasePath(HERO_IMAGE)}
      fetchPriority="high"
    />
  );
}
