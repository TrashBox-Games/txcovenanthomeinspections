import type { Meta, StoryObj } from "@storybook/react";
import { ServiceCard } from "./ServiceCard";

const meta = {
  title: "Molecules/ServiceCard",
  component: ServiceCard,
  tags: ["autodocs"],
} satisfies Meta<typeof ServiceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "HVAC",
    imageSrc: "/images/services/hvac.jpg",
    imageAlt: "HVAC system inspected during a home inspection",
    href: "/services/hvac",
  },
  decorators: [
    (Story) => (
      <div className="max-w-xs">
        <Story />
      </div>
    ),
  ],
};

export const WithoutLink: Story = {
  args: {
    title: "Plumbing",
    imageSrc: "/images/services/plumbing.jpg",
    imageAlt: "Plumbing fixtures inspected during a home inspection",
  },
  decorators: [
    (Story) => (
      <div className="max-w-xs">
        <Story />
      </div>
    ),
  ],
};
