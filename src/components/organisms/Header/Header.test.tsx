import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { Header } from "./Header";

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

describe("Header", () => {
  it("renders navigation links", () => {
    render(<Header />);
    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /^about$/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /^contact$/i })).toBeInTheDocument();
  });

  it("renders the phone number", () => {
    render(<Header />);
    expect(screen.getByText("(832) 470-5230")).toBeInTheDocument();
  });
});
