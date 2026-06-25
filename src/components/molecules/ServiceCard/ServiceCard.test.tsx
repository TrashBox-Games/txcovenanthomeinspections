import { render, screen } from "@testing-library/react";
import { ServiceCard } from "./ServiceCard";

describe("ServiceCard", () => {
  it("lazy-loads service images with low fetch priority", () => {
    render(
      <ServiceCard
        title="HVAC"
        imageSrc="/images/services/hvac.webp"
        imageAlt="HVAC inspection"
      />,
    );

    const image = screen.getByRole("img", { name: /hvac inspection/i });

    expect(image).toHaveAttribute("loading", "lazy");
    expect(image).toHaveAttribute("fetchpriority", "low");
  });
});
