import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { SERVICES } from "@/lib/services";
import { ServicesSection } from "./ServicesSection";

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

describe("ServicesSection", () => {
  it("renders all service cards", () => {
    render(<ServicesSection />);

    for (const service of SERVICES) {
      expect(
        screen.getByRole("link", { name: new RegExp(service.title, "i") }),
      ).toBeInTheDocument();
    }
  });

  it("centers cards so incomplete rows stay balanced", () => {
    const { container } = render(<ServicesSection />);

    expect(
      container.querySelector(".flex.flex-wrap.justify-center"),
    ).toBeInTheDocument();
  });

  it("keeps card widths consistent across breakpoints", () => {
    const { container } = render(<ServicesSection />);

    const cardWrappers = container.querySelectorAll(
      ".flex.flex-wrap.justify-center > div",
    );

    expect(cardWrappers).toHaveLength(SERVICES.length);
    for (const wrapper of cardWrappers) {
      expect(wrapper).toHaveClass("w-full");
      expect(wrapper).toHaveClass("sm:w-[calc(50%-0.75rem)]");
      expect(wrapper).toHaveClass("lg:w-[calc(33.333%-1rem)]");
    }
  });
});
