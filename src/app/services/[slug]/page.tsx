import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailContent } from "@/components/organisms/ServiceDetailContent/ServiceDetailContent";
import { ServiceDetailHero } from "@/components/organisms/ServiceDetailHero/ServiceDetailHero";
import { SITE } from "@/lib/constants";
import {
  getAllServiceSlugs,
  getServiceBySlug,
} from "@/lib/services";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.title} Inspection`,
    description: `${service.shortDescription} Schedule a ${service.title.toLowerCase()} inspection with ${SITE.name} in the ${SITE.location}.`,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceDetailHero service={service} />
      <ServiceDetailContent service={service} />
    </>
  );
}
