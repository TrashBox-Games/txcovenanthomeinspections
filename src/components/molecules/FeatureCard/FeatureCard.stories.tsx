import type { Meta, StoryObj } from "@storybook/react";
import { ShieldCheck } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

const meta = {
  title: "Molecules/FeatureCard",
  component: FeatureCard,
  tags: ["autodocs"],
  argTypes: {
    layout: {
      control: "select",
      options: ["default", "horizontal"],
    },
  },
} satisfies Meta<typeof FeatureCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description:
      "Professional inspections backed by proper credentials and coverage.",
    layout: "default",
  },
  decorators: [
    (Story) => (
      <div className="max-w-sm">
        <Story />
      </div>
    ),
  ],
};

export const Horizontal: Story = {
  args: {
    icon: ShieldCheck,
    title: "Detailed Reporting",
    description:
      "Clear findings with photos so you know exactly what was observed.",
    layout: "horizontal",
  },
  decorators: [
    (Story) => (
      <div className="max-w-xl">
        <Story />
      </div>
    ),
  ],
};
