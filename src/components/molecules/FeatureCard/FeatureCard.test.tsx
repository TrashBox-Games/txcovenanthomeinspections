import { render, screen } from "@testing-library/react";
import { FileText, Handshake } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

describe("FeatureCard", () => {
  it("uses gold icon styling for horizontal layout", () => {
    render(
      <FeatureCard
        icon={Handshake}
        title="Reliable Service"
        description="Dependable partnership throughout your real estate journey."
        layout="horizontal"
      />,
    );

    const icon = screen
      .getByRole("heading", { name: /reliable service/i })
      .closest("[class*='rounded-xl']")
      ?.querySelector("svg");

    expect(icon).toHaveClass("text-gold");
    expect(icon?.parentElement).toHaveClass("bg-gold/15");
    expect(icon?.parentElement).not.toHaveClass("bg-primary-fixed");
    expect(icon).not.toHaveClass("text-primary-container");
  });

  it("keeps the default layout icon wrapper sized to the icon", () => {
    render(
      <FeatureCard
        icon={FileText}
        title="Professional Reports"
        description="Clear, actionable insights delivered promptly."
      />,
    );

    const iconWrapper = screen
      .getByRole("heading", { name: /professional reports/i })
      .previousElementSibling;

    expect(iconWrapper).toHaveClass("w-fit");
    expect(iconWrapper).toHaveClass("shrink-0");
  });
});
