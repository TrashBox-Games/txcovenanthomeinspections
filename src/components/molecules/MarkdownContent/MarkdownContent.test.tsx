import { render, screen } from "@testing-library/react";
import { MarkdownContent } from "./MarkdownContent";

describe("MarkdownContent", () => {
  it("renders a single paragraph", () => {
    render(<MarkdownContent content="Hello from Joel." />);

    expect(screen.getByText("Hello from Joel.")).toBeInTheDocument();
  });

  it("renders multiple paragraphs separated by blank lines", () => {
    render(
      <MarkdownContent content={"First paragraph.\n\nSecond paragraph."} />,
    );

    expect(screen.getByText("First paragraph.")).toBeInTheDocument();
    expect(screen.getByText("Second paragraph.")).toBeInTheDocument();
  });
});
