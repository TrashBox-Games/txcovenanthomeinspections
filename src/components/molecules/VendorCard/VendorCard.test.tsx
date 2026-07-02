import { render, screen } from "@testing-library/react";
import type { Vendor } from "@/lib/vendors";
import { VENDOR_PLACEHOLDER } from "@/lib/vendors";
import { VendorCard } from "./VendorCard";

const mockVendor: Vendor = {
  name: "Example Vendor",
  specialty: "Example Specialty",
  description: "Example description for a confirmed preferred vendor.",
  image: "/images/services/roofing.webp",
  imageAlt: "Example vendor profile photo",
  website: "https://example.com",
  websiteLabel: "example.com",
  phone: "(832) 470-5230",
  phoneHref: "tel:8324705230",
};

describe("VendorCard", () => {
  it("renders vendor details and contact links", () => {
    render(<VendorCard vendor={mockVendor} />);

    expect(
      screen.getByRole("heading", { name: /example vendor/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/example specialty/i)).toBeInTheDocument();
    expect(
      screen.getByText(/confirmed preferred vendor/i),
    ).toBeInTheDocument();

    const websiteLink = screen.getByRole("link", { name: /example\.com/i });
    expect(websiteLink).toHaveAttribute("href", "https://example.com");

    const phoneLink = screen.getByRole("link", { name: /\(832\) 470-5230/i });
    expect(phoneLink).toHaveAttribute("href", "tel:8324705230");
  });

  it("renders a circular profile image", () => {
    render(<VendorCard vendor={mockVendor} />);

    const image = screen.getByRole("img", { name: /example vendor profile/i });
    expect(image).toHaveClass("rounded-full");
  });

  it("renders placeholder copy without fake contact links", () => {
    render(<VendorCard vendor={VENDOR_PLACEHOLDER} />);

    expect(
      screen.getByRole("heading", { name: /no vendor provided yet/i }),
    ).toBeInTheDocument();
    expect(screen.getByText("Coming soon")).toBeInTheDocument();
    expect(screen.getByText(/website coming soon/i)).toBeInTheDocument();
    expect(screen.getByText(/phone coming soon/i)).toBeInTheDocument();
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });
});
