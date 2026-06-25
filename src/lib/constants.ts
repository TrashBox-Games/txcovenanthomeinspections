export const SITE = {
  name: "Texas Covenant Home Inspections",
  shortName: "Texas Covenant",
  tagline: "Building trust, one inspection at a time.",
  phone: "(832) 470-5230",
  phoneHref: "tel:8324705230",
  email: "txcovenanthomeinspections@gmail.com",
  infoEmail: "txcovenanthomeinspections@gmail.com",
  location: "Greater Houston Area",
  copyright: `© ${new Date().getFullYear()} Texas Covenant Home Inspections. All rights reserved.`,
  developer: {
    name: "Trashbox",
    href: "https://trashbox.io/",
  },
} as const;

export const FOOTER_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "#" },
  { label: "Inspection Agreement", href: "#" },
  { label: "Privacy Policy", href: "#" },
] as const;

export const HERO_IMAGE = "/images/hero.jpg";

export const JOEL_PORTRAIT = "/images/joelpiercy.png";

export const FAVICON = {
  path: "/images/favicon",
  ico: "/images/favicon/favicon.ico",
  png16: "/images/favicon/favicon-16x16.png",
  png32: "/images/favicon/favicon-32x32.png",
  apple: "/images/favicon/apple-touch-icon.png",
  android192: "/images/favicon/android-chrome-192x192.png",
  android512: "/images/favicon/android-chrome-512x512.png",
} as const;
