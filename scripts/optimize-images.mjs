import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const IMAGES_DIR = path.join(ROOT, "public", "images");

/** Matches --color-primary (#001f3b) at 60% opacity over the hero photo. */
const HERO_OVERLAY = { r: 0, g: 31, b: 59, alpha: 0.6 };

/** @type {Array<{ input: string; output: string; maxWidth: number; quality: number; overlay?: boolean }>} */
const TARGETS = [
  {
    input: "hero.jpg",
    output: "hero.webp",
    maxWidth: 1600,
    quality: 78,
    overlay: true,
  },
  {
    input: "LOGO.png",
    output: "LOGO.webp",
    maxWidth: 400,
    quality: 85,
  },
  {
    input: "joelpiercy.png",
    output: "joelpiercy.webp",
    maxWidth: 900,
    quality: 82,
  },
  {
    input: "services/roofing.jpg",
    output: "services/roofing.webp",
    maxWidth: 640,
    quality: 80,
  },
  {
    input: "services/electrical.png",
    output: "services/electrical.webp",
    maxWidth: 640,
    quality: 80,
  },
  {
    input: "services/hvac.jpg",
    output: "services/hvac.webp",
    maxWidth: 640,
    quality: 80,
  },
  {
    input: "services/plumbing.jpg",
    output: "services/plumbing.webp",
    maxWidth: 640,
    quality: 80,
  },
  {
    input: "services/appliances.jpg",
    output: "services/appliances.webp",
    maxWidth: 640,
    quality: 80,
  },
];

async function createOverlay(width, height) {
  return sharp({
    create: {
      width,
      height,
      channels: 4,
      background: HERO_OVERLAY,
    },
  })
    .png()
    .toBuffer();
}

async function optimizeImage({ input, output, maxWidth, quality, overlay }) {
  const inputPath = path.join(IMAGES_DIR, input);
  const outputPath = path.join(IMAGES_DIR, output);

  await fs.mkdir(path.dirname(outputPath), { recursive: true });

  const resizedBuffer = await sharp(inputPath)
    .resize(maxWidth, undefined, { withoutEnlargement: true })
    .toBuffer();

  let pipeline = sharp(resizedBuffer);

  if (overlay) {
    const { width = maxWidth, height = maxWidth } =
      await sharp(resizedBuffer).metadata();
    const overlayBuffer = await createOverlay(width, height);

    pipeline = sharp(resizedBuffer).composite([
      { input: overlayBuffer, blend: "over" },
    ]);
  }

  await pipeline.webp({ quality, effort: 4 }).toFile(outputPath);

  const [inputStat, outputStat] = await Promise.all([
    fs.stat(inputPath),
    fs.stat(outputPath),
  ]);

  console.log(
    `${input} -> ${output}: ${formatKb(inputStat.size)} -> ${formatKb(outputStat.size)}`,
  );
}

function formatKb(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`;
}

for (const target of TARGETS) {
  await optimizeImage(target);
}

console.log("Image optimization complete.");
