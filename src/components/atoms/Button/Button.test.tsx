import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("renders children as a button", () => {
    render(<Button>Schedule Inspection</Button>);
    expect(
      screen.getByRole("button", { name: /schedule inspection/i }),
    ).toBeInTheDocument();
  });

  it("renders as a link when href is provided", () => {
    render(
      <Button href="/contact" variant="gold">
        Contact Us
      </Button>,
    );
    expect(screen.getByRole("link", { name: /contact us/i })).toHaveAttribute(
      "href",
      "/contact",
    );
  });

  it("applies gold variant styles", () => {
    render(<Button variant="gold">Gold</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-gold");
  });
});
