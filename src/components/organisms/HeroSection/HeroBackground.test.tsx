import { render, screen } from "@testing-library/react";
import { HeroBackground } from "./HeroBackground";

describe("HeroBackground", () => {
  it("eagerly loads the pre-composited hero image without a placeholder swap", () => {
    render(<HeroBackground />);

    const image = screen.getByRole("img", {
      name: /modern home exterior with landscaped yard/i,
    });

    expect(image).toHaveAttribute("fetchpriority", "high");
    expect(image).toHaveAttribute("loading", "eager");
    expect(image.getAttribute("src")).toContain("hero.webp");
    expect(image.style.backgroundImage).toBe("");
  });
});
