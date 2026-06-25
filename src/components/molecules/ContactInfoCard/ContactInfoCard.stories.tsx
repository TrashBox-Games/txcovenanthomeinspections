import type { Meta, StoryObj } from "@storybook/react";
import { Mail, Phone } from "lucide-react";
import { ContactInfoCard } from "./ContactInfoCard";
import { SITE } from "@/lib/constants";

const meta = {
  title: "Molecules/ContactInfoCard",
  component: ContactInfoCard,
  tags: ["autodocs"],
} satisfies Meta<typeof ContactInfoCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PhoneCard: Story = {
  args: {
    icon: Phone,
    title: "Call or Text",
    description: "Reach Joel directly for scheduling or questions.",
    children: (
      <a
        href={SITE.phoneHref}
        className="font-semibold text-primary-container hover:underline"
      >
        {SITE.phone}
      </a>
    ),
  },
  decorators: [
    (Story) => (
      <div className="max-w-md">
        <Story />
      </div>
    ),
  ],
};

export const EmailCard: Story = {
  args: {
    icon: Mail,
    title: "Email",
    description: "Send a message anytime.",
    children: (
      <a
        href={`mailto:${SITE.email}`}
        className="font-semibold text-primary-container hover:underline"
      >
        {SITE.email}
      </a>
    ),
  },
  decorators: [
    (Story) => (
      <div className="max-w-md">
        <Story />
      </div>
    ),
  ],
};
