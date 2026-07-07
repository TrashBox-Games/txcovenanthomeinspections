import { render, screen } from "@testing-library/react";
import { ChampionsCareerCard } from "./ChampionsCareerCard";

describe("ChampionsCareerCard", () => {
  it("renders the career call to action heading", () => {
    render(<ChampionsCareerCard />);

    expect(
      screen.getByRole("heading", {
        name: /interested in a career in realty or home inspections/i,
      }),
    ).toBeInTheDocument();
  });

  it("renders the join the champions family message", () => {
    render(<ChampionsCareerCard />);

    expect(
      screen.getByText(/join the champions family/i),
    ).toBeInTheDocument();
  });

  it("links to Champions School in a new tab", () => {
    render(<ChampionsCareerCard />);

    const link = screen.getByRole("link", { name: /championsschool\.com/i });
    expect(link).toHaveAttribute("href", "https://championsschool.com");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
});
