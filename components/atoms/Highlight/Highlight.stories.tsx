import type { Meta, StoryObj } from "@storybook/react";
import Highlight from "./Highlight";

const meta: Meta<typeof Highlight> = {
  component: Highlight,
};

export default meta;
type Story = StoryObj<typeof Highlight>;

export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    label: "Highlight",
  },
};
