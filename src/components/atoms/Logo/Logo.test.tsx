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

  it("lazy-loads the logo so it does not compete with the hero image", () => {
    render(<Logo />);

    expect(screen.getByRole("img")).toHaveAttribute("loading", "lazy");
  });

  it("applies size classes to the logo image", () => {
    const { rerender } = render(<Logo size="sm" />);
    expect(screen.getByRole("img")).toHaveClass("h-14");

    rerender(<Logo size="md" />);
    expect(screen.getByRole("img")).toHaveClass("h-20");

    rerender(<Logo size="lg" />);
    expect(screen.getByRole("img")).toHaveClass("h-24");
  });
});
