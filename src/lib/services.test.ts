import { getAllServiceSlugs, getServiceBySlug } from "./services";

describe("services", () => {
  it("returns a service by slug", () => {
    const service = getServiceBySlug("plumbing");
    expect(service?.title).toBe("Plumbing");
    expect(service?.image).toBe("/images/services/plumbing.jpg");
  });

  it("returns undefined for an unknown slug", () => {
    expect(getServiceBySlug("hvac")).toBeUndefined();
  });

  it("lists all service slugs", () => {
    expect(getAllServiceSlugs()).toEqual(["plumbing", "electrical", "roofing"]);
  });
});
