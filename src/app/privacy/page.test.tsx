import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import PrivacyPage from "./page";

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

describe("PrivacyPage", () => {
  it("renders the privacy policy heading", () => {
    render(<PrivacyPage />);

    expect(
      screen.getByRole("heading", { name: /privacy policy/i, level: 1 }),
    ).toBeInTheDocument();
  });

  it("explains what the contact form collects", () => {
    render(<PrivacyPage />);

    expect(screen.getByText(/your name/i)).toBeInTheDocument();
    expect(screen.getByText(/your email address/i)).toBeInTheDocument();
  });

  it("states that personal information is not sold", () => {
    render(<PrivacyPage />);

    expect(
      screen.getByText(/do not sell, rent, or trade your personal information/i),
    ).toBeInTheDocument();
  });

  it("describes Trashbox as the form processing provider", () => {
    render(<PrivacyPage />);

    expect(
      screen.getByText(/trashbox processes this data solely to operate the contact form/i),
    ).toBeInTheDocument();
  });

  it("includes a contact email for privacy questions", () => {
    render(<PrivacyPage />);

    const emailLinks = screen.getAllByRole("link", {
      name: /txcovenanthomeinspections@gmail.com/i,
    });

    expect(emailLinks.length).toBeGreaterThanOrEqual(1);
    expect(emailLinks[0]).toHaveAttribute(
      "href",
      "mailto:txcovenanthomeinspections@gmail.com",
    );
  });
});
