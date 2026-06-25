import type { Metadata } from "next";
import { HeroSection } from "@/components/organisms/HeroSection/HeroSection";
import { CTASection } from "@/components/organisms/CTASection/CTASection";
import { InspectionJourneySection } from "@/components/organisms/InspectionJourneySection/InspectionJourneySection";
import { ServicesSection } from "@/components/organisms/ServicesSection/ServicesSection";
import { WhyChooseSection } from "@/components/organisms/WhyChooseSection/WhyChooseSection";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Home",
  description: `${SITE.tagline} Schedule your home inspection with ${SITE.name}.`,
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <InspectionJourneySection />
      <CTASection />
    </>
  );
}
