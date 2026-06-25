import type { MetadataRoute } from "next";
import { FAVICON, SITE } from "@/lib/constants";
import { manifestIcons } from "@/lib/favicon";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.shortName,
    icons: [...manifestIcons],
    theme_color: "#001f3b",
    background_color: "#faf9fc",
    display: "standalone",
  };
}
