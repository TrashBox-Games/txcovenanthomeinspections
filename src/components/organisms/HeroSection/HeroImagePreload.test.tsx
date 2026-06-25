import { render } from "@testing-library/react";
import { HeroImagePreload } from "./HeroImagePreload";

describe("HeroImagePreload", () => {
  it("preloads the hero image with high fetch priority", () => {
    render(<HeroImagePreload />);

    const preload = document.querySelector(
      'link[rel="preload"][as="image"][href="/images/hero.webp"]',
    );

    expect(preload).toBeInTheDocument();
    expect(preload).toHaveAttribute("fetchpriority", "high");
  });
});
