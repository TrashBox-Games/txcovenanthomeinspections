export const SITE = {
  name: "Texas Covenant Home Inspections",
  shortName: "Texas Covenant",
  tagline: "Building trust, one inspection at a time.",
  phone: "(512) 555-0199",
  phoneHref: "tel:5125550199",
  email: "contact@texascovenant.com",
  infoEmail: "info@texascovenant.com",
  location: "Serving Central Texas",
  copyright: `© ${new Date().getFullYear()} Texas Covenant Home Inspections. All rights reserved.`,
} as const;

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINKS = [
  { label: "Services", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Inspection Agreement", href: "#" },
  { label: "Privacy Policy", href: "#" },
] as const;

export const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAoywBbVgTjwl53s2io_2xxKsK6cbaMuF3OTAYduUxhE5hNPpysw29uSpvyL15QRoC2unpqeZ_JEa7WkMyLCUi0yOiXr6-pZW8oj28uWChvZ9lAII1n7rpylNbUIKVben-Ku_n2XQD9gO25ZrLTq3AAk-mq0U_ckLv0z9QFJXXXCqz5OUddA3M4lOdOJ16-5GACtckAVP8TM2L7-V2SSlElhHIHMELEvqKdEp6f52o9bwmoJuCLix_BGakhHIJsS6O3fGW62Vh_HGqo";

export const JOEL_PORTRAIT =
  "https://lh3.googleusercontent.com/aida/AP1WRLu5WHEiw80d0wQb5yskLunbsTSXubS9ebXdsLXquklTUTOtIVoJinHeTx3yUaIITg3EmlB5WSeFnm6qHaxWeY_CggNkPEBRBjL5FcjgTJYs0Z8mUnaXAtBOvD9mK7Hcz3p_UFRb33mrdwxaacMKdxJBiPe7CYZurF0ZAVtFIWifjUeAbWHONvFeSTfhGf3-hCirKO0LCGEjbkyjfzdmASXLa9Xk5pD-9oS5X_JPO18BM25lXDoECCQw2B6k";

export const SERVICE_IMAGES = {
  plumbing:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAyeoCigf9E4fk-h2PsgrmlS0oxx7WiF7jp0Yk3kckNCaazCALIiAEsw7zB910EmxZkmY8WPh7JkbllFrpgVbijaG3SZz-2_WbkHGcnRI1aC22xLh8svgYR9DG-fGxq3SV51YlHEjL4bAv9zp9jiwsk4YBMPevDGf2ZBzcKY2PXW_qinysgKHlFoRbrs_2RzSnWVHF_-1N87Om7alHchOGd93_qFo-mhz41nCv2m6Ds-y4MLI71lewYik_bddd2fM7vxx_hF0acVgYN",
  electrical:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDHIW6lziWH6AYqSuy53kC3ZVNfCPort_Qpe-IV8uzzQMujW1S39BHZzqJ3244PTns0neYKiWUwpuJNbp5uIAuv-hp6FAAHQeFQQVtbqqrvI2tVrq-tCqbrBOn5yncyIlsHB3mfyMF4_8gRADpDgFUsyp6QgKKKzDSIEKx5U7dSVb5wLQlUcPEjBBpPdBRT9a60aUecroQSGcVS9f4qyAZw5jdTWr4_vaUhpvDCZIaAME9h_mpWyOzwmx2Wir7ANGhas-6aUGWewbhx",
  roofing:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBUHjhzpCUcccPiV79lyE8k7b-liadFTsn_O6DZ5JLCIf-asE3dny8FlgWPKnJfb-pOlL4AVSTF82iKeqPNCaBB_6x5Y2hRj7rdc75CPShl8ZxQ3vAdlZNlDlGKB99uUSS4SSlUuXKHLYDeP-XibDP1L2M8cWj5P3VxXPcguwqhm8A2YDETm0UzH1B7Gmio6N1rK_qqZs_KYfVjfV23bdaxgKBsZm7MIRHm-Q3dHRWXf0P0Py23K7nB3aD-34DTg_CMWydNi_jVvzs3",
} as const;
