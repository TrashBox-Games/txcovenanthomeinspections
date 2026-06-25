import type { Meta, StoryObj } from "@storybook/react";
import { Logo } from "./Logo";

const meta = {
  title: "Atoms/Logo",
  component: Logo,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    variant: {
      control: "select",
      options: ["default", "footer"],
    },
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "md",
    variant: "default",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const Footer: Story = {
  args: {
    size: "sm",
    variant: "footer",
  },
  decorators: [
    (Story) => (
      <div className="bg-primary p-8">
        <Story />
      </div>
    ),
  ],
};
