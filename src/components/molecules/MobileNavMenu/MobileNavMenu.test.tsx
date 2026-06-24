import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { MobileNavMenu } from "./MobileNavMenu";

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

describe("MobileNavMenu", () => {
  it("renders navigation links when open", () => {
    render(<MobileNavMenu isOpen onClose={vi.fn()} />);
    expect(
      screen.getByRole("navigation", { name: /mobile/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /^home$/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /^about$/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /^contact$/i })).toBeInTheDocument();
  });

  it("does not render when closed", () => {
    render(<MobileNavMenu isOpen={false} onClose={vi.fn()} />);
    expect(
      screen.queryByRole("navigation", { name: /mobile/i }),
    ).not.toBeInTheDocument();
  });

  it("calls onClose when the close button is clicked", () => {
    const onClose = vi.fn();
    render(<MobileNavMenu isOpen onClose={onClose} />);
    fireEvent.click(screen.getByRole("button", { name: /close menu/i }));
    expect(onClose).toHaveBeenCalledOnce();
  });
});
