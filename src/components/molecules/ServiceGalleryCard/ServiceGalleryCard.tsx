import Image from "next/image";
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
  return (
    <article
      className={cn(
        "glass-card flex flex-col overflow-hidden rounded-xl",
        className,
      )}
    >
      <div className="h-64 overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          width={960}
          height={640}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="border-t border-outline-variant bg-surface-container-lowest p-4 text-center">
        <p className="font-headline text-base font-bold text-primary md:text-lg">
          {label}
        </p>
      </div>
    </article>
  );
}
