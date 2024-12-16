import { Meta, StoryObj } from "@storybook/react";
import Menu, { MenuProps } from ".";

const meta: Meta = {
  component: Menu,
};

export default meta;

export const Default: StoryObj = {};

Default.parameters = {
  layout: "fullscreen",
  backgrounds: {
    default: "dark",
  },
  args: {
    username: "",
  },
};
