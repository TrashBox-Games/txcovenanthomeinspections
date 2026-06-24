import { render, screen } from "@testing-library/react";
import { Logo } from "./Logo";

describe("Logo", () => {
  it("renders the company logo with alt text", () => {
    render(<Logo />);
    expect(
      screen.getByAltText(/Texas Covenant Home Inspections Logo/i),
    ).toBeInTheDocument();
  });

  it("links to the home page", () => {
    render(<Logo />);
    expect(screen.getByRole("link")).toHaveAttribute("href", "/");
  });
});
