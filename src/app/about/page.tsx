import type { Metadata } from "next";
import { AboutBioSection } from "@/components/organisms/AboutBioSection/AboutBioSection";
import { CertificationsSection } from "@/components/organisms/CertificationsSection/CertificationsSection";
import { MeetJoelSection } from "@/components/organisms/MeetJoelSection/MeetJoelSection";
import { SITE } from "@/lib/constants";
import { getJoelBio } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Joel Piercy",
  description: `Meet Joel Piercy, certified home inspector and pastor serving the Greater Houston Area with ${SITE.name}.`,
};

export default function AboutPage() {
  return (
    <>
      <MeetJoelSection />
      <AboutBioSection content={getJoelBio()} />
      <CertificationsSection />
    </>
  );
}
