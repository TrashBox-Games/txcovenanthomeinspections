import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import HomePage from "./page";

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

describe("HomePage", () => {
  it("does not include the committed to excellence section", () => {
    render(<HomePage />);

    expect(
      screen.queryByRole("heading", { name: /committed to excellence/i }),
    ).not.toBeInTheDocument();
  });

  it("includes the Why Choose Us section", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", { name: /why choose us/i }),
    ).toBeInTheDocument();
  });

  it("includes the questions welcome CTA section", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", {
        name: /questions before or after the inspection are always welcome/i,
      }),
    ).toBeInTheDocument();
  });

  it("includes the inspection journey section", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", { name: /the inspection journey/i }),
    ).toBeInTheDocument();
  });

  it("places the inspection journey between Why Choose Us and the questions welcome CTA", () => {
    render(<HomePage />);

    const whyChoose = screen.getByRole("heading", { name: /why choose us/i });
    const inspectionJourney = screen.getByRole("heading", {
      name: /the inspection journey/i,
    });
    const questionsCta = screen.getByRole("heading", {
      name: /questions before or after the inspection are always welcome/i,
    });

    expect(
      whyChoose.compareDocumentPosition(inspectionJourney) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      inspectionJourney.compareDocumentPosition(questionsCta) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
  });
});
