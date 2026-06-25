import { render, screen } from "@testing-library/react";
import { HeroBackground } from "./HeroBackground";

describe("HeroBackground", () => {
  it("eagerly loads the hero image as the page LCP element", () => {
    render(<HeroBackground />);

    const image = screen.getByRole("img", {
      name: /modern home exterior with landscaped yard/i,
    });

    expect(image).not.toHaveAttribute("loading", "lazy");
    expect(image.getAttribute("src")).toContain("hero.webp");
  });
});
