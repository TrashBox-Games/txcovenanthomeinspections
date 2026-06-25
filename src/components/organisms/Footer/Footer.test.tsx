import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("renders the copyright notice", () => {
    render(<Footer />);

    expect(
      screen.getByText(/texas covenant home inspections\. all rights reserved/i),
    ).toBeInTheDocument();
  });

  it("shows web development credit alongside the copyright", () => {
    render(<Footer />);

    expect(screen.getByText(/web development by/i)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /trashbox llc/i }),
    ).toHaveAttribute("href", "https://trashbox.io/");
  });

  it("styles the Trashbox LLC link in white", () => {
    render(<Footer />);

    expect(screen.getByRole("link", { name: /trashbox llc/i })).toHaveClass(
      "text-on-primary",
    );
  });
});
