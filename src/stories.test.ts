import { globSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const projectRoot = resolve(import.meta.dirname, "..");

describe("storybook stories", () => {
  it("includes story files for atoms, molecules, and organisms", () => {
    const storyFiles = globSync("src/components/**/*.stories.tsx", {
      cwd: projectRoot,
    });

    expect(storyFiles.length).toBeGreaterThanOrEqual(10);
    expect(storyFiles.some((file) => file.includes("atoms"))).toBe(true);
    expect(storyFiles.some((file) => file.includes("molecules"))).toBe(true);
    expect(storyFiles.some((file) => file.includes("organisms"))).toBe(true);
  });
});
