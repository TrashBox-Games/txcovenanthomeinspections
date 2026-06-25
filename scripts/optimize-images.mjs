import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const IMAGES_DIR = path.join(ROOT, "public", "images");

/** @type {Array<{ input: string; output: string; maxWidth: number; quality: number }>} */
const TARGETS = [
  {
    input: "hero.jpg",
    output: "hero.webp",
    maxWidth: 1600,
    quality: 78,
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

async function optimizeImage({ input, output, maxWidth, quality }) {
  const inputPath = path.join(IMAGES_DIR, input);
  const outputPath = path.join(IMAGES_DIR, output);

  await fs.mkdir(path.dirname(outputPath), { recursive: true });

  const image = sharp(inputPath);
  const metadata = await image.metadata();

  const resizeWidth =
    metadata.width && metadata.width > maxWidth ? maxWidth : undefined;

  await image
    .resize(resizeWidth, undefined, { withoutEnlargement: true })
    .webp({ quality, effort: 4 })
    .toFile(outputPath);

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
