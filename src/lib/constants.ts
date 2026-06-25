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
    name: "Trashbox LLC",
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
