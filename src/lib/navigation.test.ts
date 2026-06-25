import { NAV_ITEMS } from "./navigation";

describe("navigation", () => {
  const servicesItem = NAV_ITEMS.find((item) => item.label === "Services");

  it("includes service subsections that link to page anchors", () => {
    const structural = servicesItem?.children?.find(
      (child) => child.label === "Structural",
    );

    expect(structural?.href).toBe("/services/structural");
    expect(structural?.children).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          label: "Roofing",
          href: "/services/structural#roofing",
        }),
      ]),
    );
  });

  it("includes subsection links for every service", () => {
    const serviceChildren = servicesItem?.children ?? [];

    expect(serviceChildren).toHaveLength(5);
    for (const service of serviceChildren) {
      expect(service.children?.length).toBeGreaterThan(0);
      expect(service.children?.[0]?.href).toContain("#");
    }
  });
});
