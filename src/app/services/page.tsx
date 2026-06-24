import type { Metadata } from "next";
import { ServicesSection } from "@/components/organisms/ServicesSection/ServicesSection";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description: `Explore home inspection services from ${SITE.name} — plumbing, electrical, and roofing inspections in the ${SITE.location}.`,
};

export default function ServicesPage() {
  return <ServicesSection />;
}
