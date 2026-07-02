"use client";

import { ZoomIn } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { ImageLightbox } from "@/components/molecules/ImageLightbox/ImageLightbox";
import { cn } from "@/lib/utils";

interface ServiceGalleryCardProps {
  label: string;
  image: string;
  imageAlt: string;
  className?: string;
}

export function ServiceGalleryCard({
  label,
  image,
  imageAlt,
  className,
}: ServiceGalleryCardProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <>
      <article
        className={cn(
          "glass-card flex flex-col overflow-hidden rounded-xl",
          className,
        )}
      >
        <button
          type="button"
          className="group relative h-64 overflow-hidden text-left"
          onClick={() => setIsPreviewOpen(true)}
          aria-label={`View larger ${label}`}
        >
          <Image
            src={image}
            alt={imageAlt}
            width={960}
            height={640}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="pointer-events-none absolute inset-0 bg-primary/0 transition-colors group-hover:bg-primary/20" />
          <span className="pointer-events-none absolute right-3 bottom-3 flex items-center gap-1 rounded-full bg-primary/80 px-3 py-1.5 text-xs font-semibold text-on-primary opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
            <ZoomIn className="h-4 w-4" aria-hidden />
            Zoom
          </span>
        </button>
        <div className="border-t border-outline-variant bg-surface-container-lowest p-4 text-center">
          <p className="font-headline text-base font-bold text-primary md:text-lg">
            {label}
          </p>
        </div>
      </article>

      <ImageLightbox
        isOpen={isPreviewOpen}
        image={image}
        imageAlt={imageAlt}
        label={label}
        onClose={() => setIsPreviewOpen(false)}
      />
    </>
  );
}
