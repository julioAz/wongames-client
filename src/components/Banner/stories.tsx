import { Meta, StoryObj } from "@storybook/react";
import Banner, { BannerProps } from ".";

export default {
  title: "Banner",
  component: Banner,
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const Default: StoryObj = (args: BannerProps) => (
  <div style={{ maxWidth: "104rem", margin: "0 auto" }}>
    <Banner {...args} />
  </div>
);

Default.args = {
  img: "https://source.unsplash.com/user/willianjusten/1042x580",
  title: "Defy death",
  subtitle: "<p>Play the new <strong>CrashLands</strong> season",
  buttonLabel: "Buy now",
  buttonLink: "/games/defy-death",
};

export const WithRibbon: StoryObj = (args: BannerProps) => (
  <div style={{ maxWidth: "104rem", margin: "0 auto" }}>
    <Banner {...args} />
  </div>
);

WithRibbon.args = {
  ribbon: "20% off",
  ribbonSize: "normal",
  ribbonColor: "primary",
  img: "https://source.unsplash.com/user/willianjusten/1042x580",
  title: "Defy death",
  subtitle: "<p>Play the new <strong>CrashLands</strong> season",
  buttonLabel: "Buy now",
  buttonLink: "/games/defy-death",
};

WithRibbon.argTypes = {
  ribbon: {
    type: "string",
  },
};
