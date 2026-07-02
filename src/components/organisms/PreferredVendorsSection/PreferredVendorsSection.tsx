import { FadeIn } from "@/components/atoms/FadeIn/FadeIn";
import { VendorCard } from "@/components/molecules/VendorCard/VendorCard";
import { VENDOR_PLACEHOLDER, VENDORS } from "@/lib/vendors";

export function PreferredVendorsSection() {
  const vendors = VENDORS.length > 0 ? VENDORS : [VENDOR_PLACEHOLDER];

  return (
    <div className="container-site py-stack-xl">
      <FadeIn className="mb-stack-xl max-w-3xl text-center md:text-left">
        <h1 className="mb-stack-md font-headline text-[2rem] leading-10 font-bold text-primary md:text-5xl md:leading-14">
          Our Preferred Vendors
        </h1>
        <p className="text-lg leading-7 text-on-surface-variant">
          We work with the best in the business to ensure your home gets the
          care it deserves. Here are a few local professionals we trust and
          recommend.
        </p>
      </FadeIn>

      <div className="border-t border-outline-variant">
        {vendors.map((vendor, index) => (
          <FadeIn key={vendor.name} delay={index * 0.05}>
            <VendorCard vendor={vendor} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
