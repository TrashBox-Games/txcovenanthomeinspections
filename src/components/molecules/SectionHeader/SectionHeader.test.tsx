import { render, screen } from "@testing-library/react";
import { SectionHeader } from "./SectionHeader";

describe("SectionHeader", () => {
  it("renders a gold accent bar when showAccent is enabled", () => {
    const { container } = render(
      <SectionHeader title="Our Services" showAccent />,
    );

    expect(container.querySelector(".bg-gold")).toBeInTheDocument();
  });

  it("uses inverted text colors on dark sections", () => {
    render(
      <SectionHeader
        title="Why Choose Us"
        description="Trusted expertise."
        variant="inverted"
      />,
    );

    expect(screen.getByRole("heading", { name: /why choose us/i })).toHaveClass(
      "text-on-primary",
    );
    expect(screen.getByText(/trusted expertise/i)).toHaveClass(
      "text-primary-fixed-dim",
    );
  });
});
