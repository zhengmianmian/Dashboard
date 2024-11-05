import { Meta, StoryObj } from "@storybook/react";
import Search from "../app/ui/search";
/**
 * If your story uses components in the app directory and they are importing modules from next/navigation,
 * you have to tell Storybook to use the correct mocked router context by setting the nextjs.appDirectory parameter to true
 * check the docs:https://storybook.js.org/blog/integrate-nextjs-and-storybook-automatically/
 */
const meta: Meta<typeof Search> = {
  title: "Mine/Search",
  component: Search,
  parameters: {
    Layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },
  argTypes: {
    placeholder: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Search>;

export const Default: Story = {
  args: {
    placeholder: "Search for something...", // Default placeholder
  },
};

export const CustomPlaceholder: Story = {
  args: {
    placeholder: "Type to search...",
  },
};
