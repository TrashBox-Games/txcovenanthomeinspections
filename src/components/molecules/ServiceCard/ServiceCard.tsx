"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  href?: string;
  className?: string;
}

export function ServiceCard({
  title,
  imageSrc,
  imageAlt,
  href,
  className,
}: ServiceCardProps) {
  const card = (
    <motion.div
      className={cn(
        "group relative aspect-square overflow-hidden rounded-xl border border-outline-variant shadow-ambient",
        href && "cursor-pointer",
        className,
      )}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
      <div className="absolute right-0 bottom-0 left-0 p-stack-md">
        <h3 className="font-headline text-xl font-bold text-on-primary">
          {title}
        </h3>
        <div className="mt-2 h-1 w-12 bg-gold" />
      </div>
    </motion.div>
  );

  if (href) {
    return <Link href={href}>{card}</Link>;
  }

  return card;
}
