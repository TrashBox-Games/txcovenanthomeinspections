import type { Meta, StoryObj } from "@storybook/react";
import { motion } from "framer-motion";
import { ProcessStep } from "./ProcessStep";

const meta = {
  title: "Molecules/ProcessStep",
  component: ProcessStep,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <motion.div
        className="max-w-xs"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        <Story />
      </motion.div>
    ),
  ],
} satisfies Meta<typeof ProcessStep>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    step: 1,
    title: "Schedule",
    description: "Book your inspection at a time that works for you.",
  },
};

export const StepTwo: Story = {
  args: {
    step: 2,
    title: "Inspect",
    description:
      "Joel performs a thorough walkthrough of the home's major systems.",
  },
};
