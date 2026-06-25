import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { Label } from "../Label/Label";

const meta = {
  title: "Atoms/Input",
  component: Input,
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter your name",
    autoComplete: "name",
  },
};

export const Email: Story = {
  args: {
    type: "email",
    placeholder: "you@example.com",
    autoComplete: "email",
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="max-w-sm">
      <Label htmlFor="story-name">Full Name</Label>
      <Input id="story-name" name="name" required autoComplete="name" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "Read only value",
  },
};
