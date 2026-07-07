import { fireEvent, render, screen, within } from "@testing-library/react";
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

  it("renders call now scheduling text as a phone link next to the phone button", () => {
    render(<Header />);

    const scheduleLink = screen.getByRole("link", {
      name: /call now to schedule/i,
    });

    expect(scheduleLink).toHaveAttribute("href", "tel:8324705230");
  });

  it("matches navigation link text size to the call now scheduling text", () => {
    render(<Header />);

    const aboutLink = screen.getByRole("link", { name: /^about$/i });
    const scheduleLink = screen.getByRole("link", {
      name: /call now to schedule/i,
    });

    expect(aboutLink).toHaveClass("text-base");
    expect(aboutLink).toHaveClass("md:text-lg");
    expect(scheduleLink).toHaveClass("text-base");
    expect(scheduleLink).toHaveClass("xl:text-lg");
  });

  it("opens the mobile menu from the hamburger button", () => {
    render(<Header />);
    fireEvent.click(screen.getByRole("button", { name: /open menu/i }));
    expect(
      screen.getByRole("navigation", { name: /mobile/i }),
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("link", { name: /^structural$/i }).length,
    ).toBeGreaterThan(0);
  });

  it("allows the call now scheduling text to wrap after Call Now", () => {
    render(<Header />);
    const scheduleLink = screen.getByRole("link", {
      name: /call now to schedule/i,
    });

    expect(scheduleLink).toHaveClass("flex-col");
    expect(scheduleLink).toHaveClass("items-center");
    expect(scheduleLink).toHaveClass("xl:flex");
    expect(within(scheduleLink).getByText("Call Now")).toBeInTheDocument();
    expect(within(scheduleLink).getByText("To Schedule!")).toBeInTheDocument();
  });

  it("keeps header actions from overlapping navigation when space is tight", () => {
    render(<Header />);
    const headerRow = screen.getByRole("banner").firstElementChild;
    const nav = screen.getByRole("navigation", { name: /main/i });
    const phoneButton = screen.getByRole("link", { name: /\(832\) 470-5230/i });
    const actionsGroup = phoneButton.parentElement;

    expect(headerRow).toHaveClass("grid");
    expect(nav).toHaveClass("min-w-0");
    expect(actionsGroup).toHaveClass("shrink-0");
  });

  it("allows the phone button text to wrap when space is tight", () => {
    render(<Header />);
    const phoneButton = screen.getByRole("link", { name: /\(832\) 470-5230/i });
    const phoneText = screen.getByText("(832) 470-5230");

    expect(phoneButton).toHaveClass("min-w-0");
    expect(phoneButton).toHaveClass("shrink");
    expect(phoneText).toHaveClass("text-center");
    expect(phoneText).toHaveClass("leading-tight");
  });

  it("renders the TREC ID to the right of the call button without shrinking header items", () => {
    render(<Header />);
    const trecId = screen.getByText("TREC ID: 27132");
    const phoneButton = screen.getByRole("link", { name: /\(832\) 470-5230/i });
    const actionsGroup = phoneButton.parentElement;

    expect(trecId).toHaveClass("absolute");
    expect(trecId).toHaveClass("left-full");
    expect(trecId).toHaveClass("hidden");
    expect(trecId).toHaveClass("xl:inline");
    expect(actionsGroup).toHaveClass("shrink-0");
    expect(trecId.parentElement).toBe(actionsGroup);
  });
});
