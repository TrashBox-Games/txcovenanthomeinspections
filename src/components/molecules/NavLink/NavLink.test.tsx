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
    expect(link).toHaveClass("border-tertiary");
  });

  it("renders an inactive link without active styles", () => {
    render(
      <NavLink href="/about" isActive={false}>
        About
      </NavLink>,
    );
    const link = screen.getByRole("link", { name: /about/i });
    expect(link).not.toHaveClass("border-tertiary");
  });
});
