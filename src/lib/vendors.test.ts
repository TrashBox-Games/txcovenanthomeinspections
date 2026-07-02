import { VENDOR_PLACEHOLDER, VENDORS } from "./vendors";

describe("vendors", () => {
  it("starts with no preferred vendors listed", () => {
    expect(VENDORS).toEqual([]);
  });

  it("defines placeholder copy for the empty state", () => {
    expect(VENDOR_PLACEHOLDER.name).toBe("No vendor provided yet");
    expect(VENDOR_PLACEHOLDER.specialty).toBe("Coming soon");
    expect(VENDOR_PLACEHOLDER.description).toMatch(/will be added here/i);
    expect(VENDOR_PLACEHOLDER.isPlaceholder).toBe(true);
  });
});
