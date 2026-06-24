import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { Header } from "./Header";

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

describe("Header", () => {
  it("renders desktop navigation links", () => {
    render(<Header />);
    const nav = screen.getByRole("navigation", { name: /main/i });
    expect(nav).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /^about$/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /^contact$/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /^services$/i })).toBeInTheDocument();
  });

  it("renders the phone number", () => {
    render(<Header />);
    expect(screen.getByText("(832) 470-5230")).toBeInTheDocument();
  });

  it("opens the mobile menu from the hamburger button", () => {
    render(<Header />);
    fireEvent.click(screen.getByRole("button", { name: /open menu/i }));
    expect(
      screen.getByRole("navigation", { name: /mobile/i }),
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("link", { name: /^plumbing$/i }).length,
    ).toBeGreaterThan(0);
  });
});
