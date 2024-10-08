import type { Meta, StoryObj } from "@storybook/react";
import { fn } from '@storybook/test';
import Logo from "./Logo";

const meta: Meta<typeof Logo> = {
  component: Logo,
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    isLoading: undefined,
    onlyShape: false,
    onFinish: fn()
  },
};
