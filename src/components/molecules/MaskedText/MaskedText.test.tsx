import { render, screen } from "@testing-library/react";
import { useReducedMotion } from "framer-motion";
import { vi } from "vitest";
import { MaskedText } from "./MaskedText";

vi.mock("framer-motion", async () => {
  const actual = await vi.importActual<typeof import("framer-motion")>(
    "framer-motion",
  );

  return {
    ...actual,
    useReducedMotion: vi.fn(() => false),
  };
});

describe("MaskedText", () => {
  it("renders the full text for screen readers and SEO", () => {
    const { container } = render(<MaskedText text="Hello world" />);

    expect(container.textContent).toBe("Hello world");
  });

  it("wraps each word in a mask container for animation", () => {
    render(<MaskedText text="Hello world" />);

    expect(screen.getAllByTestId("word-mask")).toHaveLength(2);
  });

  it("reserves space for descenders in mask containers", () => {
    render(<MaskedText text="Integrity" />);

    expect(screen.getByTestId("word-mask")).toHaveClass("pb-[0.15em]");
  });

  it("renders plain text when reduced motion is preferred", () => {
    vi.mocked(useReducedMotion).mockReturnValue(true);

    render(<MaskedText text="Hello world" />);

    expect(screen.getByText("Hello world")).toBeInTheDocument();
    expect(screen.queryAllByTestId("word-mask")).toHaveLength(0);
  });
});
