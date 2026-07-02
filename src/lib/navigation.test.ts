import { NAV_ITEMS } from "./navigation";

describe("navigation", () => {
  const servicesItem = NAV_ITEMS.find((item) => item.label === "Services");

  it("includes links to each service detail page", () => {
    const structural = servicesItem?.children?.find(
      (child) => child.label === "Structural",
    );

    expect(structural?.href).toBe("/services/structural");
    expect(structural?.children).toBeUndefined();
  });

  it("includes a child link for every service", () => {
    const serviceChildren = servicesItem?.children ?? [];

    expect(serviceChildren).toHaveLength(5);
    for (const service of serviceChildren) {
      expect(service.href).toMatch(/^\/services\//);
      expect(service.children).toBeUndefined();
    }
  });
});
