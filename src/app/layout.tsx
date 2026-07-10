import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GoogleAdsTag } from "@/components/atoms/GoogleAdsTag/GoogleAdsTag";
import { PageLayout } from "@/components/templates/PageLayout/PageLayout";
import { HeroImagePreload } from "@/components/organisms/HeroSection/HeroImagePreload";
import { SITE } from "@/lib/constants";
import { faviconMetadata } from "@/lib/favicon";
import "@/styles/globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-be-vietnam-pro",
});

export const metadata: Metadata = {
  title: {
    default: SITE.name,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Professional home inspections in the Greater Houston Area. Inspecting with integrity, serving with purpose.",
  icons: faviconMetadata,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <HeroImagePreload />
      </head>
      <body
        className={`${beVietnamPro.variable} ${GeistSans.variable} font-body antialiased`}
      >
        <GoogleAdsTag />
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}
