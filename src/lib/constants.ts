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
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
] as const;

export const HERO_IMAGE = "/images/hero.webp";

export const JOEL_PORTRAIT = "/images/joelpiercy.webp";

export const FAVICON = {
  path: "/images/favicon",
  ico: "/images/favicon/favicon.ico",
  png16: "/images/favicon/favicon-16x16.png",
  png32: "/images/favicon/favicon-32x32.png",
  apple: "/images/favicon/apple-touch-icon.png",
  android192: "/images/favicon/android-chrome-192x192.png",
  android512: "/images/favicon/android-chrome-512x512.png",
} as const;
