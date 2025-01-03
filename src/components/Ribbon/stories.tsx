import { Meta, StoryObj } from "@storybook/react";
import Ribbon, { RibbonProps } from ".";

export default {
  title: "Ribbon",
  component: Ribbon,
} as Meta;

export const Default: StoryObj = (args: RibbonProps) => (
  <div
    style={{
      width: "40rem",
      height: "25rem",
      position: "relative",
      backgroundColor: "#888",
    }}
  >
    <Ribbon {...args} />
  </div>
);

Default.args = {
  children: "Best Seller",
};

Default.argTypes = {
  children: {
    type: "string",
  },
};
