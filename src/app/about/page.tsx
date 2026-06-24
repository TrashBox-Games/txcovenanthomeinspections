import type { Metadata } from "next";
import { CertificationsSection } from "@/components/organisms/CertificationsSection/CertificationsSection";
import { CTASection } from "@/components/organisms/CTASection/CTASection";
import { InspectionJourneySection } from "@/components/organisms/InspectionJourneySection/InspectionJourneySection";
import { InspectionStandardsSection } from "@/components/organisms/InspectionStandardsSection/InspectionStandardsSection";
import { MeetJoelSection } from "@/components/organisms/MeetJoelSection/MeetJoelSection";
import { WhyChooseSection } from "@/components/organisms/WhyChooseSection/WhyChooseSection";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Joel Piercy",
  description: `Meet Joel Piercy, certified home inspector and pastor serving Central Texas with ${SITE.name}.`,
};

export default function AboutPage() {
  return (
    <>
      <MeetJoelSection />
      <WhyChooseSection />
      <InspectionStandardsSection />
      <InspectionJourneySection />
      <CertificationsSection />
      <CTASection />
    </>
  );
}
