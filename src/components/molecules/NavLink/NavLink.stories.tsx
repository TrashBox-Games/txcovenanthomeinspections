import type { Meta, StoryObj } from "@storybook/react";
import { NavLink } from "./NavLink";

const meta = {
  title: "Molecules/NavLink",
  component: NavLink,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["inline", "stacked"],
    },
  },
} satisfies Meta<typeof NavLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "/about",
    children: "About",
    isActive: false,
    variant: "inline",
  },
  decorators: [
    (Story) => (
      <div className="flex h-16 items-center border-b border-outline-variant px-4">
        <Story />
      </div>
    ),
  ],
};

export const Active: Story = {
  args: {
    href: "/services",
    children: "Services",
    isActive: true,
    variant: "inline",
  },
  decorators: [
    (Story) => (
      <div className="flex h-16 items-center border-b border-outline-variant px-4">
        <Story />
      </div>
    ),
  ],
};

export const Stacked: Story = {
  args: {
    href: "/contact",
    children: "Contact",
    isActive: false,
    variant: "stacked",
  },
  decorators: [
    (Story) => (
      <div className="max-w-xs border border-outline-variant">
        <Story />
      </div>
    ),
  ],
};
