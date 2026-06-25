import { getJoelBio } from "./content";

describe("getJoelBio", () => {
  it("loads Joel's bio from the markdown file", () => {
    const bio = getJoelBio();

    expect(bio).toContain("Joel Piercy");
    expect(bio).toContain("Sam Houston State University");
    expect(bio).toContain("home inspector for life");
  });
});
