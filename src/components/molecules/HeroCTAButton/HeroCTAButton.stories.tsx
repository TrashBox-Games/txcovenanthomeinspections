import type { Meta, StoryObj } from "@storybook/react";
import { HeroCTAButton } from "./HeroCTAButton";

const meta = {
  title: "Molecules/HeroCTAButton",
  component: HeroCTAButton,
  tags: ["autodocs"],
} satisfies Meta<typeof HeroCTAButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "/contact",
    text: "Schedule Your Inspection",
    delay: 0.2,
    wordStagger: 0.04,
  },
  decorators: [
    (Story) => (
      <div className="bg-primary p-12">
        <Story />
      </div>
    ),
  ],
};
