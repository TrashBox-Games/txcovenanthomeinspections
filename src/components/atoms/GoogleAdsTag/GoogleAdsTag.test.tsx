import { render } from "@testing-library/react";
import { vi } from "vitest";
import { GOOGLE_ADS_ID } from "@/lib/google-ads";
import { GoogleAdsTag } from "./GoogleAdsTag";

vi.mock("next/script", () => ({
  default: ({
    src,
    id,
    children,
    strategy,
  }: {
    src?: string;
    id?: string;
    children?: string;
    strategy?: string;
  }) =>
    src ? (
      <script src={src} data-strategy={strategy} />
    ) : (
      <script id={id} data-strategy={strategy}>
        {children}
      </script>
    ),
}));

describe("GoogleAdsTag", () => {
  it("loads the Google tag script for the Ads account", () => {
    render(<GoogleAdsTag />);

    const loader = document.querySelector(
      `script[src="https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}"]`,
    );

    expect(loader).toBeInTheDocument();
    expect(loader).toHaveAttribute("data-strategy", "afterInteractive");
  });

  it("initializes gtag with the Ads account config", () => {
    render(<GoogleAdsTag />);

    const initScript = document.getElementById("google-ads-init");

    expect(initScript).toBeInTheDocument();
    expect(initScript?.textContent).toContain("window.dataLayer");
    expect(initScript?.textContent).toContain(`gtag('config', '${GOOGLE_ADS_ID}')`);
  });
});
