import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { PreferredVendorsSection } from "./PreferredVendorsSection";

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

describe("PreferredVendorsSection", () => {
  it("renders the page heading and intro copy", () => {
    render(<PreferredVendorsSection />);

    expect(
      screen.getByRole("heading", { name: /our preferred vendors/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/local professionals we trust and recommend/i),
    ).toBeInTheDocument();
  });

  it("renders a placeholder card when no vendors are listed", () => {
    render(<PreferredVendorsSection />);

    expect(
      screen.getByRole("heading", { name: /no vendor provided yet/i }),
    ).toBeInTheDocument();
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });
});
