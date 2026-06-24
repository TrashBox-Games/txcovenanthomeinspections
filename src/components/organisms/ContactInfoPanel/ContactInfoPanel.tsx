import Link from "next/link";
import { Calendar, MapPin, PhoneCall } from "lucide-react";
import { ContactInfoCard } from "@/components/molecules/ContactInfoCard/ContactInfoCard";
import { SITE } from "@/lib/constants";

export function ContactInfoPanel() {
  return (
    <div className="flex flex-col gap-stack-md">
      <ContactInfoCard
        icon={PhoneCall}
        title="Contact Us"
        description="Call or Text us directly."
      >
        <Link
          href={SITE.phoneHref}
          className="text-sm font-semibold tracking-wider text-primary transition-colors hover:text-tertiary"
        >
          {SITE.phone}
        </Link>
      </ContactInfoCard>

      <ContactInfoCard
        icon={MapPin}
        title="Location"
        description={SITE.location}
      />

      <ContactInfoCard
        icon={Calendar}
        title="Availability"
        description="Prompt and reliable scheduling."
      />
    </div>
  );
}
