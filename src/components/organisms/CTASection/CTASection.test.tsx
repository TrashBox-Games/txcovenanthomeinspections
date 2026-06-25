import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { CTASection } from "./CTASection";

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

describe("CTASection", () => {
  it("uses a branded gradient background", () => {
    const { container } = render(<CTASection />);

    expect(container.querySelector("section")).toHaveClass("bg-gradient-to-br");
    expect(container.querySelector("section")).toHaveClass("from-primary");
  });

  it("renders the welcome message", () => {
    render(<CTASection />);

    expect(
      screen.getByRole("heading", {
        name: /questions before or after the inspection are always welcome/i,
      }),
    ).toHaveClass("text-on-primary");
  });
});
