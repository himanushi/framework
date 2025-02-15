/** @type { import('@storybook/react').Preview } */
import React from "react";
import { StyleProvider } from "../lib/core";

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <StyleProvider>
        <Story />
      </StyleProvider>
    ),
  ],
};

export default preview;
