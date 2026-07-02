export interface Vendor {
  name: string;
  specialty: string;
  description: string;
  image?: string;
  imageAlt?: string;
  website?: string;
  websiteLabel?: string;
  phone?: string;
  phoneHref?: string;
  isPlaceholder?: boolean;
}

export const VENDOR_PLACEHOLDER: Vendor = {
  name: "No vendor provided yet",
  specialty: "Coming soon",
  description:
    "Preferred vendor details will be added here as partnerships are confirmed.",
  isPlaceholder: true,
};

export const VENDORS: Vendor[] = [];
