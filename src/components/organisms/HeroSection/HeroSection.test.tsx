import { render, screen } from "@testing-library/react";
import { HeroSection } from "./HeroSection";

describe("HeroSection", () => {
  it("renders the hero headline on two lines with per-word masking", () => {
    render(<HeroSection />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading.textContent).toContain("Inspecting with Integrity");
    expect(heading.textContent).toContain("Serving with Purpose");
    expect(heading.textContent).not.toContain(",");
    expect(screen.getAllByTestId("word-mask")).toHaveLength(9);
  });

  it("reveals the CTA button from left to right at content width", () => {
    render(<HeroSection />);

    expect(screen.getByTestId("hero-cta-reveal")).toHaveClass("w-fit");
    expect(
      screen.getByRole("link", { name: /schedule your inspection/i }),
    ).toHaveClass("w-fit");
  });
});
