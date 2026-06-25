import type { Meta, StoryObj } from "@storybook/react";
import { Mail, Phone } from "lucide-react";
import { Button } from "./Button";

const meta = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "gold", "outline", "ghost"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Gold: Story = {
  args: {
    children: "Schedule Your Inspection",
    variant: "gold",
    size: "lg",
  },
};

export const Primary: Story = {
  args: {
    children: "Primary Action",
    variant: "primary",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Action",
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost Action",
    variant: "ghost",
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Phone className="h-4 w-4" />
        Call or Text Now
      </>
    ),
    variant: "gold",
    size: "lg",
  },
};

export const AsLink: Story = {
  args: {
    href: "/contact",
    children: (
      <>
        <Mail className="h-4 w-4" />
        Email Joel
      </>
    ),
    variant: "outline",
    size: "lg",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};
