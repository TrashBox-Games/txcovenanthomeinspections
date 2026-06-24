export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  imageAlt: string;
  overview: string;
  highlights: string[];
}

export const SERVICES: Service[] = [
  {
    slug: "plumbing",
    title: "Plumbing",
    shortDescription:
      "Thorough evaluation of pipes, fixtures, water heaters, and drainage systems.",
    image: "/images/services/plumbing.jpg",
    imageAlt: "Plumbing pipes and fixtures during a home inspection",
    overview:
      "Water damage and plumbing failures are among the most costly issues a homeowner can face. Our plumbing inspection covers the full water supply and waste systems so you know exactly what condition they are in before you buy or maintain your home.",
    highlights: [
      "Visible supply and drain lines",
      "Fixtures, faucets, and shut-off valves",
      "Water heater age, condition, and venting",
      "Signs of leaks, corrosion, or improper connections",
      "Water pressure and drainage performance",
    ],
  },
  {
    slug: "electrical",
    title: "Electrical",
    shortDescription:
      "Detailed review of panels, wiring, outlets, and safety compliance.",
    image: "/images/services/electrical.png",
    imageAlt: "Electrical panel inspected during a home inspection",
    overview:
      "Electrical problems pose serious safety risks. We inspect the main service panel, branch circuits, and visible wiring to identify hazards, outdated components, and code concerns that could affect your family's safety.",
    highlights: [
      "Main panel and sub-panels",
      "Branch circuit wiring and labeling",
      "Outlets, switches, and GFCI protection",
      "Grounding and bonding systems",
      "Signs of overheating, double-tapping, or improper work",
    ],
  },
  {
    slug: "roofing",
    title: "Roofing",
    shortDescription:
      "Comprehensive assessment of shingles, flashing, gutters, and roof structure.",
    image: "/images/services/roofing.jpg",
    imageAlt: "Roof shingles and flashing inspected from exterior",
    overview:
      "Your roof is your home's first line of defense against the elements. We examine roofing materials, flashing, gutters, and visible structural components to identify wear, storm damage, and areas that may need attention soon.",
    highlights: [
      "Shingle or roofing material condition",
      "Flashing around chimneys, vents, and valleys",
      "Gutters, downspouts, and drainage",
      "Signs of leaks, moss, or granule loss",
      "Visible structural integrity from accessible areas",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return SERVICES.map((service) => service.slug);
}

export function isServicesPath(pathname: string): boolean {
  return pathname === "/services" || pathname.startsWith("/services/");
}
