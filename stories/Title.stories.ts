import type { Meta, StoryObj } from "@storybook/react";

import Title from "./Title";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Title",
  component: Title,
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const First: Story = {
  name: "I am the first",
};
