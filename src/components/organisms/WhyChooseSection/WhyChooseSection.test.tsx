import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { WhyChooseSection } from "./WhyChooseSection";

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

describe("WhyChooseSection", () => {
  it("uses a navy background for stronger brand color", () => {
    const { container } = render(<WhyChooseSection />);

    expect(container.querySelector("section")).toHaveClass("bg-primary");
  });

  it("renders the why choose cards in order with first-person copy", () => {
    render(<WhyChooseSection />);

    expect(
      screen.getByRole("heading", { name: /personable/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /licensed professional/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /detailed reports/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(/call or text anytime/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/texas real estate commission/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/i deliver comprehensive, easy-to-understand reports/i),
    ).toBeInTheDocument();

    const headings = screen
      .getAllByRole("heading", { level: 3 })
      .map((heading) => heading.textContent);
    expect(headings).toEqual([
      "Personable",
      "Licensed Professional",
      "Detailed Reports",
    ]);
  });

  it("uses first-person language in the section description", () => {
    render(<WhyChooseSection />);

    expect(
      screen.getByText(/i bring a unique blend of professional expertise/i),
    ).toBeInTheDocument();
  });
});
