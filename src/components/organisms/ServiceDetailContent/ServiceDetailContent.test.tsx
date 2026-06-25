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
  it("renders anchor sections for service subsections", () => {
    const service = getServiceBySlug("structural");
    expect(service).toBeDefined();

    const { container } = render(
      <ServiceDetailContent service={service!} />,
    );

    expect(container.querySelector("#roofing")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^roofing$/i })).toBeInTheDocument();
  });
});
