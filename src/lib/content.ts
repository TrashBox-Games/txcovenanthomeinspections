import { readFileSync } from "node:fs";
import { join } from "node:path";

export function getJoelBio(): string {
  return readFileSync(
    join(process.cwd(), "src/content/joel-bio.md"),
    "utf-8",
  ).trim();
}
