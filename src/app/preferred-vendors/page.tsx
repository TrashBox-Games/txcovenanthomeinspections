import type { Metadata } from "next";
import { PreferredVendorsSection } from "@/components/organisms/PreferredVendorsSection/PreferredVendorsSection";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Preferred Vendors",
  description: `Trusted local professionals recommended by ${SITE.name} for roofing, plumbing, HVAC, and foundation work.`,
};

export default function PreferredVendorsPage() {
  return <PreferredVendorsSection />;
}
