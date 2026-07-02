import { render, screen } from "@testing-library/react";
import { ServiceGalleryCard } from "./ServiceGalleryCard";

describe("ServiceGalleryCard", () => {
  it("renders the gallery image label", () => {
    render(
      <ServiceGalleryCard
        label="Roof Flashing Detail"
        image="/images/services/structural_page/roof-flashing-detail.webp"
        imageAlt="Roof flashing detail inspected during a structural inspection"
      />,
    );

    expect(
      screen.getByRole("img", { name: /roof flashing detail inspected/i }),
    ).toBeInTheDocument();
    expect(screen.getByText("Roof Flashing Detail")).toBeInTheDocument();
  });
});
