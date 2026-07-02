import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { ServiceDetailGallery } from "./ServiceDetailGallery";
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

describe("ServiceDetailGallery", () => {
  it("renders gallery cards for each service image", () => {
    const service = getServiceBySlug("structural");
    expect(service).toBeDefined();

    render(<ServiceDetailGallery gallery={service!.gallery} />);

    expect(screen.getByText("Roof Flashing Detail")).toBeInTheDocument();
    expect(screen.getByText("Window Seal Issue")).toBeInTheDocument();
    expect(screen.getAllByRole("img")).toHaveLength(service!.gallery.length);
  });
});
