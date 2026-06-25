import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import AboutPage from "./page";

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

describe("AboutPage", () => {
  it("does not include the Why Choose Us section", () => {
    render(<AboutPage />);

    expect(
      screen.queryByRole("heading", { name: /why choose us/i }),
    ).not.toBeInTheDocument();
  });

  it("does not include the inspection standards section", () => {
    render(<AboutPage />);

    expect(
      screen.queryByRole("heading", { name: /our inspection standards/i }),
    ).not.toBeInTheDocument();
  });

  it("still includes the meet Joel section", () => {
    render(<AboutPage />);

    expect(
      screen.getByRole("heading", { name: /joel piercy/i }),
    ).toBeInTheDocument();
  });

  it("includes Joel's extended bio", () => {
    render(<AboutPage />);

    expect(
      screen.getByText(/grew up in the north houston area/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/home inspector for life/i),
    ).toBeInTheDocument();
  });

  it("places professional certifications after Joel's bio", () => {
    render(<AboutPage />);

    const bio = screen.getByText(/grew up in the north houston area/i);
    const certifications = screen.getByText(/professional certifications/i);

    expect(
      bio.compareDocumentPosition(certifications) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
  });

  it("does not include the inspection journey section", () => {
    render(<AboutPage />);

    expect(
      screen.queryByRole("heading", { name: /the inspection journey/i }),
    ).not.toBeInTheDocument();
  });

  it("does not include the questions welcome CTA section", () => {
    render(<AboutPage />);

    expect(
      screen.queryByRole("heading", {
        name: /questions before or after the inspection are always welcome/i,
      }),
    ).not.toBeInTheDocument();
  });
});
