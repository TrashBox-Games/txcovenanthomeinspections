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
      screen.getByRole("link", { name: /^trashbox$/i }),
    ).toHaveAttribute("href", "https://trashbox.io/");
  });

  it("styles the Trashbox link in white", () => {
    render(<Footer />);

    expect(screen.getByRole("link", { name: /^trashbox$/i })).toHaveClass(
      "text-on-primary",
    );
  });

  it("renders quick links for services, about, contact, and privacy policy", () => {
    render(<Footer />);

    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /services/i })).toHaveAttribute(
      "href",
      "/services",
    );
    expect(screen.getByRole("link", { name: /^about$/i })).toHaveAttribute(
      "href",
      "/about",
    );
    expect(screen.getByRole("link", { name: /^contact$/i })).toHaveAttribute(
      "href",
      "/contact",
    );
    expect(
      screen.getByRole("link", { name: /privacy policy/i }),
    ).toHaveAttribute("href", "/privacy");
    expect(nav).toContainElement(
      screen.getByRole("link", { name: /privacy policy/i }),
    );
    expect(screen.queryByRole("link", { name: /pricing/i })).not.toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: /inspection agreement/i }),
    ).not.toBeInTheDocument();
  });
});
