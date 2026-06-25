import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { MeetJoelSection } from "./MeetJoelSection";

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

describe("MeetJoelSection", () => {
  it("renders Joel's portrait from the local image", () => {
    render(<MeetJoelSection />);

    const image = screen.getByRole("img", {
      name: /portrait of joel piercy/i,
    });
    expect(image.getAttribute("src")).toContain("joelpiercy.webp");
  });

  it("places the portrait on the left and text on the right on desktop", () => {
    render(<MeetJoelSection />);

    const imageWrapper = screen
      .getByRole("img", { name: /portrait of joel piercy/i })
      .closest("[class*='md:col-start']");
    const textWrapper = screen
      .getByRole("heading", { name: /joel piercy/i })
      .closest("[class*='md:col-start']");

    expect(imageWrapper).toHaveClass("md:col-start-1");
    expect(textWrapper).toHaveClass("md:col-start-7");
  });
});
