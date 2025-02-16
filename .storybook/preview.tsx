/** @type { import('@storybook/react').Preview } */
import React from "react";
import { UiProvider } from "../lib/core";

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
      <UiProvider>
        <Story />
      </UiProvider>
    ),
  ],
};

export default preview;
