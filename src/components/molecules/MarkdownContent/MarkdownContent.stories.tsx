import type { Meta, StoryObj } from "@storybook/react";
import { MarkdownContent } from "./MarkdownContent";

const meta = {
  title: "Molecules/MarkdownContent",
  component: MarkdownContent,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "article"],
    },
  },
} satisfies Meta<typeof MarkdownContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content:
      "Texas Covenant Home Inspections provides detailed, honest assessments for buyers and sellers across the Greater Houston Area.\n\nEvery report is written to help you make confident decisions.",
    variant: "default",
  },
  decorators: [
    (Story) => (
      <div className="max-w-2xl">
        <Story />
      </div>
    ),
  ],
};

export const Article: Story = {
  args: {
    content:
      "With years of field experience and a commitment to integrity, Joel brings clarity to one of the biggest purchases of your life.",
    variant: "article",
  },
  decorators: [
    (Story) => (
      <div className="max-w-2xl">
        <Story />
      </div>
    ),
  ],
};
