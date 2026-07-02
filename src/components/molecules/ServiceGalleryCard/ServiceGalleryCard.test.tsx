import { fireEvent, render, screen } from "@testing-library/react";
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

  it("opens an expanded image preview when the image is clicked", () => {
    render(
      <ServiceGalleryCard
        label="Roof Flashing Detail"
        image="/images/services/structural_page/roof-flashing-detail.webp"
        imageAlt="Roof flashing detail inspected during a structural inspection"
      />,
    );

    fireEvent.click(
      screen.getByRole("button", { name: /view larger roof flashing detail/i }),
    );

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getAllByRole("img")).toHaveLength(2);
  });

  it("closes the expanded image preview", () => {
    render(
      <ServiceGalleryCard
        label="Roof Flashing Detail"
        image="/images/services/structural_page/roof-flashing-detail.webp"
        imageAlt="Roof flashing detail inspected during a structural inspection"
      />,
    );

    fireEvent.click(
      screen.getByRole("button", { name: /view larger roof flashing detail/i }),
    );
    fireEvent.keyDown(window, { key: "Escape" });

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
