import type { Meta, StoryObj } from "@storybook/react";
import { SectionHeader } from "./SectionHeader";

const meta = {
  title: "Molecules/SectionHeader",
  component: SectionHeader,
  tags: ["autodocs"],
  argTypes: {
    align: {
      control: "select",
      options: ["left", "center"],
    },
    variant: {
      control: "select",
      options: ["default", "inverted"],
    },
  },
} satisfies Meta<typeof SectionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Our Services",
    description:
      "Comprehensive home inspections covering every major system in the house.",
    showAccent: true,
  },
};

export const LeftAligned: Story = {
  args: {
    title: "Meet Joel Piercy",
    description: "A trusted inspector serving the Greater Houston Area.",
    align: "left",
    showAccent: true,
  },
};

export const Inverted: Story = {
  args: {
    title: "Why Choose Texas Covenant",
    description: "Integrity, clarity, and service you can count on.",
    variant: "inverted",
    showAccent: true,
  },
  decorators: [
    (Story) => (
      <div className="bg-primary p-8">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
};
