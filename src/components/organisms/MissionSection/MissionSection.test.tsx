import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { MissionSection } from "./MissionSection";

beforeAll(() => {
  class MockIntersectionObserver implements IntersectionObserver {
    readonly root: Element | Document | null = null;
    readonly rootMargin = "";
    readonly thresholds: readonly number[] = [];

    observe(): void {}
    unobserve(): void {}
    disconnect(): void {}
    takeRecords(): IntersectionObserverEntry[] {
      return [];
    }
  }

  vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);
});

describe("MissionSection", () => {
  it("renders the mission heading and feature cards", () => {
    render(<MissionSection />);

    expect(
      screen.getByRole("heading", { name: /committed to excellence/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /thorough inspections/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /professional reports/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /reliable service/i }),
    ).toBeInTheDocument();
  });

  it("renders the shield icon without a colored background circle", () => {
    const { container } = render(<MissionSection />);

    const shieldIcon = container.querySelector("svg.lucide-shield");
    expect(shieldIcon).toBeInTheDocument();
    expect(shieldIcon?.parentElement).not.toHaveClass("bg-tertiary-fixed");
    expect(shieldIcon?.parentElement).not.toHaveClass("rounded-full");
  });

  it("stretches feature cards to fill the grid", () => {
    render(<MissionSection />);

    const thoroughCard = screen
      .getByRole("heading", { name: /thorough inspections/i })
      .closest("[class*='rounded-xl']");
    expect(thoroughCard).toHaveClass("h-full");
  });

  it("renders expanded descriptions on feature cards", () => {
    render(<MissionSection />);

    expect(
      screen.getByText(/from foundation to roof/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/easy-to-read report with photos/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/flexible scheduling, on-time arrivals/i),
    ).toBeInTheDocument();
  });
});
