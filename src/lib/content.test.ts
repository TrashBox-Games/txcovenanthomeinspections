import { getJoelBio, getPrivacyPolicy } from "./content";

describe("getJoelBio", () => {
  it("loads Joel's bio from the markdown file", () => {
    const bio = getJoelBio();

    expect(bio).toContain("Joel Piercy");
    expect(bio).toContain("Sam Houston State University");
    expect(bio).toContain("home inspector for life");
  });
});

describe("getPrivacyPolicy", () => {
  it("loads the privacy policy from the markdown file", () => {
    const policy = getPrivacyPolicy();

    expect(policy).toContain("Texas Covenant Home Inspections");
    expect(policy).toContain("contact form");
    expect(policy).toContain("Trashbox");
    expect(policy).toContain("do not sell");
    expect(policy).toContain("txcovenanthomeinspections@gmail.com");
  });
});
