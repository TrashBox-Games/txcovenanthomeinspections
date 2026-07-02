import { FadeIn } from "@/components/atoms/FadeIn/FadeIn";
import { ServiceGalleryCard } from "@/components/molecules/ServiceGalleryCard/ServiceGalleryCard";
import type { ServiceGalleryItem } from "@/lib/services";

interface ServiceDetailGalleryProps {
  gallery: ServiceGalleryItem[];
}

export function ServiceDetailGallery({ gallery }: ServiceDetailGalleryProps) {
  return (
    <section className="border-t border-outline-variant/20 bg-surface py-stack-xl">
      <div className="container-site">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item, index) => (
            <FadeIn key={item.label} delay={0.05 * index}>
              <ServiceGalleryCard
                label={item.label}
                image={item.image}
                imageAlt={item.imageAlt}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
