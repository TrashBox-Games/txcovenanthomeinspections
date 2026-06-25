import Image from "next/image";
import { HERO_IMAGE } from "@/lib/constants";

export function HeroBackground() {
  return (
    <>
      <Image
        src={HERO_IMAGE}
        alt="Modern home exterior with landscaped yard"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-primary/60" aria-hidden />
    </>
  );
}
