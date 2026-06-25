import type { Meta, StoryObj } from "@storybook/react";
import { CTASection } from "./CTASection";

const meta = {
  title: "Organisms/CTASection",
  component: CTASection,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof CTASection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
