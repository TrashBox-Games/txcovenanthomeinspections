import { render, screen } from "@testing-library/react";
import { HeroCTAButton } from "./HeroCTAButton";

describe("HeroCTAButton", () => {
  it("renders a width-fitted link with masked button text", () => {
    render(
      <HeroCTAButton
        href="/contact"
        text="Schedule Your Inspection"
        delay={0.8}
        wordStagger={0.04}
      />,
    );

    expect(screen.getByTestId("hero-cta-reveal")).toHaveClass("w-fit");
    expect(
      screen.getByRole("link", { name: /schedule your inspection/i }),
    ).toHaveAttribute("href", "/contact");
    expect(screen.getAllByTestId("word-mask")).toHaveLength(3);
  });
});
