export interface ServiceSection {
  id: string;
  label: string;
  description: string;
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  imageAlt: string;
  overview: string;
  highlights: string[];
  sections: ServiceSection[];
}

export const SERVICES: Service[] = [
  {
    slug: "structural",
    title: "Structural",
    shortDescription:
      "Evaluation of the foundation, framing, roof structure, and load-bearing components.",
    image: "/images/services/roofing.jpg",
    imageAlt: "Roof and structural components inspected during a home inspection",
    overview:
      "A home's structure is what everything else depends on. I inspect the foundation, framing, roof structure, and other load-bearing components to identify signs of movement, damage, or deterioration that could affect safety and long-term value.",
    highlights: [
      "Foundation walls, slabs, and crawlspaces",
      "Framing, beams, and load-bearing walls",
      "Roof structure and attic framing",
      "Signs of settlement, sagging, or structural stress",
      "Visible moisture intrusion or wood-destroying organism damage",
    ],
    sections: [
      {
        id: "roofing",
        label: "Roofing",
        description:
          "Filler overview of roofing materials, flashing, and visible roof structure concerns.",
      },
      {
        id: "foundation",
        label: "Foundation",
        description:
          "Filler overview of slabs, piers, crawlspaces, and signs of settlement or cracking.",
      },
      {
        id: "framing",
        label: "Framing",
        description:
          "Filler overview of load-bearing walls, beams, and attic framing conditions.",
      },
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
      "Electrical problems pose serious safety risks. I inspect the main service panel, branch circuits, and visible wiring to identify hazards, outdated components, and code concerns that could affect your family's safety.",
    highlights: [
      "Main panel and sub-panels",
      "Branch circuit wiring and labeling",
      "Outlets, switches, and GFCI protection",
      "Grounding and bonding systems",
      "Signs of overheating, double-tapping, or improper work",
    ],
    sections: [
      {
        id: "panels",
        label: "Electrical Panels",
        description:
          "Filler overview of main panels, sub-panels, and visible breaker conditions.",
      },
      {
        id: "wiring",
        label: "Wiring",
        description:
          "Filler overview of branch circuits, labeling, and visible conductor conditions.",
      },
      {
        id: "safety",
        label: "Safety Devices",
        description:
          "Filler overview of GFCI protection, grounding, and bonding components.",
      },
    ],
  },
  {
    slug: "hvac",
    title: "HVAC",
    shortDescription:
      "Assessment of heating, cooling, ductwork, and ventilation performance.",
    image: "/images/hero.jpg",
    imageAlt: "Home heating and cooling systems inspected during a home inspection",
    overview:
      "Comfort and air quality depend on properly functioning HVAC systems. I evaluate heating and cooling equipment, ductwork, thermostats, and ventilation to help you understand system condition, performance, and potential repair needs.",
    highlights: [
      "Heating and cooling equipment operation",
      "Air handlers, furnaces, and condensers",
      "Ductwork, registers, and visible connections",
      "Thermostat controls and temperature differential",
      "Signs of poor airflow, leaks, or deferred maintenance",
    ],
    sections: [
      {
        id: "heating",
        label: "Heating",
        description:
          "Filler overview of furnaces, heat pumps, and heating performance checks.",
      },
      {
        id: "cooling",
        label: "Cooling",
        description:
          "Filler overview of condensers, air handlers, and cooling operation.",
      },
      {
        id: "ductwork",
        label: "Ductwork",
        description:
          "Filler overview of supply lines, returns, and visible ventilation paths.",
      },
    ],
  },
  {
    slug: "plumbing",
    title: "Plumbing",
    shortDescription:
      "Thorough evaluation of pipes, fixtures, water heaters, and drainage systems.",
    image: "/images/services/plumbing.jpg",
    imageAlt: "Plumbing pipes and fixtures during a home inspection",
    overview:
      "Water damage and plumbing failures are among the most costly issues a homeowner can face. My plumbing inspection covers the full water supply and waste systems so you know exactly what condition they are in before you buy or maintain your home.",
    highlights: [
      "Visible supply and drain lines",
      "Fixtures, faucets, and shut-off valves",
      "Water heater age, condition, and venting",
      "Signs of leaks, corrosion, or improper connections",
      "Water pressure and drainage performance",
    ],
    sections: [
      {
        id: "supply-lines",
        label: "Supply Lines",
        description:
          "Filler overview of visible water supply piping and shut-off valves.",
      },
      {
        id: "fixtures",
        label: "Fixtures & Drains",
        description:
          "Filler overview of sinks, tubs, showers, and drainage performance.",
      },
      {
        id: "water-heater",
        label: "Water Heaters",
        description:
          "Filler overview of tank and tankless water heater condition and venting.",
      },
    ],
  },
  {
    slug: "appliances",
    title: "Appliances",
    shortDescription:
      "Operational checks of built-in and included kitchen and laundry appliances.",
    image: "/images/services/appliances.jpg",
    imageAlt:
      "Modern gas cooktop with a lit burner during an appliance inspection",
    overview:
      "Appliances are a major part of daily home function. I test built-in and included appliances for basic operation so you know whether key equipment is working as expected before closing or moving in.",
    highlights: [
      "Ranges, ovens, and cooktops",
      "Dishwashers and garbage disposals",
      "Refrigerators and built-in microwaves",
      "Washers and dryers when included with the sale",
      "Visible installation issues and safety concerns",
    ],
    sections: [
      {
        id: "kitchen",
        label: "Kitchen Appliances",
        description:
          "Filler overview of ranges, ovens, dishwashers, and related built-ins.",
      },
      {
        id: "laundry",
        label: "Laundry Appliances",
        description:
          "Filler overview of washers, dryers, and visible hookup conditions.",
      },
      {
        id: "operation",
        label: "Operation Testing",
        description:
          "Filler overview of basic function checks performed during the inspection.",
      },
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
