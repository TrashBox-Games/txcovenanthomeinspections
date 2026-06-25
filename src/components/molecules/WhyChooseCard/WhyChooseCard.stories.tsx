import type { Meta, StoryObj } from "@storybook/react";
import { HeartHandshake } from "lucide-react";
import { WhyChooseCard } from "./WhyChooseCard";

const meta = {
  title: "Molecules/WhyChooseCard",
  component: WhyChooseCard,
  tags: ["autodocs"],
} satisfies Meta<typeof WhyChooseCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: HeartHandshake,
    title: "Faith-Driven Service",
    description:
      "Every inspection is approached with integrity, care, and respect for your home.",
  },
  decorators: [
    (Story) => (
      <div className="max-w-sm">
        <Story />
      </div>
    ),
  ],
};
