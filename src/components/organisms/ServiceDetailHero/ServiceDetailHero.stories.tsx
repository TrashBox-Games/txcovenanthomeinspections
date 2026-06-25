import type { Meta, StoryObj } from "@storybook/react";
import { getServiceBySlug } from "@/lib/services";
import { ServiceDetailHero } from "./ServiceDetailHero";

const structural = getServiceBySlug("structural");

if (!structural) {
  throw new Error("Expected structural service fixture for stories.");
}

const meta = {
  title: "Organisms/ServiceDetailHero",
  component: ServiceDetailHero,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ServiceDetailHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Structural: Story = {
  args: {
    service: structural,
  },
};
