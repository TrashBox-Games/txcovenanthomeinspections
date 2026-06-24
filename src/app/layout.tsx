import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { PageLayout } from "@/components/templates/PageLayout/PageLayout";
import { SITE } from "@/lib/constants";
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
    "Professional home inspections in Central Texas. Inspecting with integrity, serving with purpose.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${beVietnamPro.variable} ${GeistSans.variable} font-body antialiased`}
      >
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}
