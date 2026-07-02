import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { ServiceDetailContent } from "./ServiceDetailContent";
import { getServiceBySlug } from "@/lib/services";

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

describe("ServiceDetailContent", () => {
  it("renders service detail prose and the schedule CTA", () => {
    const service = getServiceBySlug("structural");
    expect(service).toBeDefined();

    render(<ServiceDetailContent service={service!} />);

    expect(
      screen.getByRole("heading", {
        name: /structural inspection service details/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(service!.detailParagraphs[0])).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /schedule an inspection/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /ready to move forward\? contact us to schedule an inspection or ask any questions about our services/i,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /schedule your inspection/i }),
    ).toBeInTheDocument();
  });
});
