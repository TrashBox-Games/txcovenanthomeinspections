import { FAVICON } from "@/lib/constants";

export function withBasePath(
  path: string,
  root = process.env.NEXT_PUBLIC_BASE_PATH ?? "",
): string {
  return `${root}${path}`;
}

export const faviconMetadata = {
  icon: [
    { url: withBasePath(FAVICON.ico) },
    { url: withBasePath(FAVICON.png16), sizes: "16x16", type: "image/png" },
    { url: withBasePath(FAVICON.png32), sizes: "32x32", type: "image/png" },
  ],
  apple: withBasePath(FAVICON.apple),
};

export const manifestIcons = [
  {
    src: withBasePath(FAVICON.android192),
    sizes: "192x192",
    type: "image/png",
  },
  {
    src: withBasePath(FAVICON.android512),
    sizes: "512x512",
    type: "image/png",
  },
];
