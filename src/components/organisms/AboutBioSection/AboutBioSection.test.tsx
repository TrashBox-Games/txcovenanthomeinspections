import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { AboutBioSection } from "./AboutBioSection";

const sampleBio =
  "Hi, I'm Joel Piercy. I grew up in the North Houston area.\n\nFor the past seven years, I've served as the Young Adults Pastor at [New Life Church](https://newlifekingwood.com/) in Kingwood.";

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

describe("AboutBioSection", () => {
  it("renders Joel's bio introduction", () => {
    render(<AboutBioSection content={sampleBio} />);

    expect(screen.getByText(/hi, i'm joel piercy/i)).toBeInTheDocument();
  });

  it("renders multiple paragraphs from markdown content", () => {
    render(<AboutBioSection content={sampleBio} />);

    expect(
      screen.getByText(/young adults pastor at/i),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "New Life Church" })).toHaveAttribute(
      "href",
      "https://newlifekingwood.com/",
    );
  });

  it("renders as an article without a bordered card", () => {
    render(<AboutBioSection content={sampleBio} />);

    const article = screen.getByRole("article");
    expect(article).toBeInTheDocument();
    expect(article).not.toHaveClass("border");
  });
});
