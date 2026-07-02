import {
  getAllServiceSlugs,
  getServiceBySlug,
  SERVICES,
} from "./services";

describe("services", () => {
  it("returns a service by slug", () => {
    const service = getServiceBySlug("plumbing");
    expect(service?.title).toBe("Plumbing");
    expect(service?.image).toBe("/images/services/plumbing.webp");
  });

  it("uses the appliances image for the appliances service", () => {
    const service = getServiceBySlug("appliances");
    expect(service?.image).toBe("/images/services/appliances.webp");
  });

  it("uses the hvac image for the hvac service", () => {
    const service = getServiceBySlug("hvac");
    expect(service?.image).toBe("/images/services/hvac.webp");
  });

  it("returns undefined for an unknown slug", () => {
    expect(getServiceBySlug("roofing")).toBeUndefined();
  });

  it("lists all service slugs in display order", () => {
    expect(getAllServiceSlugs()).toEqual([
      "structural",
      "electrical",
      "hvac",
      "plumbing",
      "appliances",
    ]);
  });

  it("defines the five core inspection services", () => {
    expect(SERVICES.map((service) => service.title)).toEqual([
      "Structural",
      "Electrical",
      "HVAC",
      "Plumbing",
      "Appliances",
    ]);
  });

  it("defines gallery cards with webp images for each service", () => {
    const structural = getServiceBySlug("structural");

    expect(structural?.gallery).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          label: "Roof Flashing Detail",
          image: "/images/services/structural_page/roof-flashing-detail.webp",
        }),
      ]),
    );

    for (const service of SERVICES) {
      expect(service.gallery.length).toBeGreaterThan(0);
      for (const item of service.gallery) {
        expect(item.image).toMatch(/\.webp$/);
      }
    }
  });

  it("defines detail paragraphs for each service", () => {
    for (const service of SERVICES) {
      expect(service.detailParagraphs.length).toBeGreaterThanOrEqual(3);
    }
  });
});
