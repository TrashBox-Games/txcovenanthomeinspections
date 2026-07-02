import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const IMAGES_DIR = path.join(ROOT, "public", "images");

/** @type {Array<{ input: string; output: string }>} */
const GALLERY_TARGETS = [
  // Structural
  {
    input: "services/structural_page/unnamed (5).jpg",
    output: "services/structural_page/roof-flashing-detail.webp",
  },
  {
    input: "services/structural_page/unnamed (4).jpg",
    output: "services/structural_page/attic-vent.webp",
  },
  {
    input: "services/structural_page/unnamed (2).jpg",
    output: "services/structural_page/brick-cracks.webp",
  },
  {
    input: "services/structural_page/unnamed (3).jpg",
    output: "services/structural_page/brick-and-window-frame.webp",
  },
  {
    input: "services/structural_page/unnamed (1).jpg",
    output: "services/structural_page/attic-framing-system.webp",
  },
  {
    input: "services/structural_page/unnamed.jpg",
    output: "services/structural_page/window-seal-issue.webp",
  },
  // Electrical
  {
    input: "services/electrical_page/unnamed (6).jpg",
    output: "services/electrical_page/generator-utility-panel.webp",
  },
  {
    input: "services/electrical_page/unnamed (7).jpg",
    output: "services/electrical_page/panel-interior-wiring.webp",
  },
  {
    input: "services/electrical_page/unnamed (8).jpg",
    output: "services/electrical_page/main-breaker-connections.webp",
  },
  // HVAC
  {
    input: "services/hvac_page/unnamed (9).jpg",
    output: "services/hvac_page/ridge-vent.webp",
  },
  {
    input: "services/hvac_page/unnamed (10).jpg",
    output: "services/hvac_page/air-supply-vent.webp",
  },
  {
    input: "services/hvac_page/unnamed (11).jpg",
    output: "services/hvac_page/air-purification-system.webp",
  },
  // Plumbing
  {
    input: "services/plumbing_page/unnamed.png",
    output: "services/plumbing_page/bathroom-fixtures.webp",
  },
  {
    input: "services/plumbing_page/unnamed (16).jpg",
    output: "services/plumbing_page/water-heater-valve.webp",
  },
  {
    input: "services/plumbing_page/unnamed (17).jpg",
    output: "services/plumbing_page/sink-seal-condition.webp",
  },
  {
    input: "services/plumbing_page/unnamed (18).jpg",
    output: "services/plumbing_page/tub-spout-seal.webp",
  },
  // Appliances
  {
    input: "services/appliancess_page/unnamed (12).jpg",
    output: "services/appliances_page/exhaust-vent-penetration.webp",
  },
  {
    input: "services/appliancess_page/unnamed (13).jpg",
    output: "services/appliances_page/garbage-disposal.webp",
  },
  {
    input: "services/appliancess_page/unnamed (14).jpg",
    output: "services/appliances_page/dryer-vent-connection.webp",
  },
  {
    input: "services/appliancess_page/unnamed (15).jpg",
    output: "services/appliances_page/gas-range-operation.webp",
  },
];

const MAX_WIDTH = 960;
const QUALITY = 80;

async function optimizeGalleryImage({ input, output }) {
  const inputPath = path.join(IMAGES_DIR, input);
  const outputPath = path.join(IMAGES_DIR, output);

  await fs.mkdir(path.dirname(outputPath), { recursive: true });

  const inputStat = await fs.stat(inputPath);

  await sharp(inputPath)
    .resize(MAX_WIDTH, undefined, { withoutEnlargement: true })
    .webp({ quality: QUALITY, effort: 4 })
    .toFile(outputPath);

  const outputStat = await fs.stat(outputPath);

  console.log(
    `${input} -> ${output}: ${formatKb(inputStat.size)} -> ${formatKb(outputStat.size)}`,
  );

  await fs.unlink(inputPath);
}

function formatKb(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`;
}

for (const target of GALLERY_TARGETS) {
  await optimizeGalleryImage(target);
}

const legacyAppliancesDir = path.join(IMAGES_DIR, "services", "appliancess_page");
try {
  const remaining = await fs.readdir(legacyAppliancesDir);
  if (remaining.length === 0) {
    await fs.rmdir(legacyAppliancesDir);
    console.log("Removed empty appliancess_page directory.");
  }
} catch {
  // Directory may already be removed.
}

console.log("Service gallery image optimization complete.");
