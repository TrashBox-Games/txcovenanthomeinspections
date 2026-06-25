import { withBasePath } from "./favicon";

describe("withBasePath", () => {
  it("prefixes asset paths for GitHub Pages project sites", () => {
    expect(withBasePath("/images/favicon/favicon.ico", "/txcovenanthomeinspections")).toBe(
      "/txcovenanthomeinspections/images/favicon/favicon.ico",
    );
  });

  it("returns the path unchanged for custom domains", () => {
    expect(withBasePath("/images/favicon/favicon.ico", "")).toBe(
      "/images/favicon/favicon.ico",
    );
  });
});
