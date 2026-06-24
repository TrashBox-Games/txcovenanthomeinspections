import Image from "next/image";
import type { Service } from "@/lib/services";

interface ServiceDetailHeroProps {
  service: Service;
}

export function ServiceDetailHero({ service }: ServiceDetailHeroProps) {
  return (
    <section className="relative flex h-[420px] w-full items-end overflow-hidden bg-primary md:h-[480px]">
      <Image
        src={service.image}
        alt={service.imageAlt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-primary/65" aria-hidden />
      <div className="container-site relative z-10 pb-stack-xl">
        <p className="mb-stack-sm text-sm font-semibold tracking-widest text-gold uppercase">
          Our Services
        </p>
        <h1 className="text-shadow-hero max-w-3xl font-headline text-[2rem] leading-10 font-bold text-on-primary md:text-5xl md:leading-14">
          {service.title} Inspection
        </h1>
        <p className="mt-stack-md max-w-2xl text-lg leading-7 text-primary-fixed-dim">
          {service.shortDescription}
        </p>
      </div>
    </section>
  );
}
