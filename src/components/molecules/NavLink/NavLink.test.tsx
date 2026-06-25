import { render, screen } from "@testing-library/react";
import { NavLink } from "./NavLink";

describe("NavLink", () => {
  it("renders an active link with gold underline", () => {
    render(
      <NavLink href="/" isActive>
        Home
      </NavLink>,
    );
    const link = screen.getByRole("link", { name: /home/i });
    expect(link).toHaveAttribute("href", "/");
    expect(link).toHaveClass("border-gold");
    expect(link).toHaveClass("text-gold");
  });

  it("renders an inactive link without active styles", () => {
    render(
      <NavLink href="/about" isActive={false}>
        About
      </NavLink>,
    );
    const link = screen.getByRole("link", { name: /about/i });
    expect(link).not.toHaveClass("border-gold");
    expect(link).not.toHaveClass("text-gold");
  });

  it("renders inline variant with header navigation text size", () => {
    render(<NavLink href="/about">About</NavLink>);

    const link = screen.getByRole("link", { name: /about/i });
    expect(link).toHaveClass("text-base");
    expect(link).toHaveClass("md:text-lg");
  });

  it("renders stacked variant with gold underline when active", () => {
    render(
      <NavLink href="/" isActive variant="stacked">
        Home
      </NavLink>,
    );
    const link = screen.getByRole("link", { name: /home/i });
    expect(link).toHaveClass("border-b-2");
    expect(link).toHaveClass("border-gold");
    expect(link).toHaveClass("text-gold");
  });
});
