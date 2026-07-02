import Image from "next/image";
import { Globe, Phone, User } from "lucide-react";
import type { Vendor } from "@/lib/vendors";

interface VendorCardProps {
  vendor: Vendor;
}

export function VendorCard({ vendor }: VendorCardProps) {
  const isPlaceholder = vendor.isPlaceholder === true;

  return (
    <article className="flex flex-col items-start gap-gutter border-b border-outline-variant bg-surface-container-lowest p-stack-lg transition-colors hover:bg-surface-container-low md:flex-row md:items-center">
      {isPlaceholder ? (
        <div
          className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border border-outline-variant bg-surface-container-low text-on-surface-variant"
          aria-hidden
        >
          <User className="h-10 w-10" />
        </div>
      ) : (
        <Image
          src={vendor.image ?? ""}
          alt={vendor.imageAlt ?? ""}
          width={96}
          height={96}
          className="h-24 w-24 shrink-0 rounded-full border border-outline-variant object-cover"
          loading="lazy"
        />
      )}

      <div className="min-w-0 flex-1">
        <div className="mb-stack-sm">
          <h3 className="font-headline text-xl font-semibold text-primary">
            {vendor.name}
          </h3>
          <p className="text-sm font-medium text-on-surface-variant">
            {vendor.specialty}
          </p>
        </div>
        <p className="max-w-3xl text-base text-on-surface">
          {vendor.description}
        </p>
      </div>

      <div className="flex min-w-[200px] flex-col gap-stack-sm md:text-right">
        {isPlaceholder ? (
          <>
            <span className="flex items-center gap-2 text-sm font-medium text-on-surface-variant md:justify-end">
              <Globe className="h-4 w-4 shrink-0" aria-hidden />
              Website coming soon
            </span>
            <span className="flex items-center gap-2 text-sm font-medium text-on-surface-variant md:justify-end">
              <Phone className="h-4 w-4 shrink-0" aria-hidden />
              Phone coming soon
            </span>
          </>
        ) : (
          <>
            <a
              href={vendor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-secondary transition-colors hover:underline md:justify-end"
            >
              <Globe className="h-4 w-4 shrink-0" aria-hidden />
              {vendor.websiteLabel}
            </a>
            <a
              href={vendor.phoneHref}
              className="flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-secondary md:justify-end"
            >
              <Phone className="h-4 w-4 shrink-0" aria-hidden />
              {vendor.phone}
            </a>
          </>
        )}
      </div>
    </article>
  );
}
