import {
  getAllServiceSlugs,
  getServiceBySlug,
  SERVICES,
} from "./services";

describe("services", () => {
  it("returns a service by slug", () => {
    const service = getServiceBySlug("plumbing");
    expect(service?.title).toBe("Plumbing");
    expect(service?.image).toBe("/images/services/plumbing.jpg");
  });

  it("uses the appliances image for the appliances service", () => {
    const service = getServiceBySlug("appliances");
    expect(service?.image).toBe("/images/services/appliances.jpg");
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

  it("defines subsections with anchor ids for each service", () => {
    const structural = getServiceBySlug("structural");

    expect(structural?.sections).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ id: "roofing", label: "Roofing" }),
      ]),
    );
  });
});
