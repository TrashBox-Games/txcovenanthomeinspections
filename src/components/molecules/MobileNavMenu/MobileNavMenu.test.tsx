import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { MobileNavMenu } from "./MobileNavMenu";

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

describe("MobileNavMenu", () => {
  it("renders navigation links when open", () => {
    render(<MobileNavMenu isOpen onClose={vi.fn()} activePath="/" />);
    expect(
      screen.getByRole("navigation", { name: /mobile/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /^home$/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /^about$/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /^services$/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /^structural$/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /^contact$/i })).toBeInTheDocument();
  });

  it("links service items directly to their detail pages", () => {
    render(<MobileNavMenu isOpen onClose={vi.fn()} activePath="/" />);

    expect(screen.getByRole("link", { name: /^structural$/i })).toHaveAttribute(
      "href",
      "/services/structural",
    );
    expect(
      screen.queryByRole("link", { name: /^roofing$/i }),
    ).not.toBeInTheDocument();
  });

  it("does not render when closed", () => {
    render(<MobileNavMenu isOpen={false} onClose={vi.fn()} activePath="/" />);
    expect(
      screen.queryByRole("navigation", { name: /mobile/i }),
    ).not.toBeInTheDocument();
  });

  it("calls onClose when the close button is clicked", () => {
    const onClose = vi.fn();
    render(<MobileNavMenu isOpen onClose={onClose} activePath="/" />);
    fireEvent.click(screen.getByRole("button", { name: /close menu/i }));
    expect(onClose).toHaveBeenCalledOnce();
  });
});
