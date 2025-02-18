import type { Preview } from "@storybook/react";
import React from "react";
import { UiProvider } from "../lib/core";

const VIEWPORTS = {
  mobile: {
    name: "mobile",
    styles: {
      width: "414px",
      height: "896px",
    },
    type: "mobile",
  },
  tablet: {
    name: "Tablet",
    styles: {
      width: "768px",
      height: "1024px",
    },
    type: "tablet",
  },
  desktop: {
    name: "Desktop",
    styles: {
      width: "1920px",
      height: "1080px",
    },
    type: "desktop",
  },
};

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: VIEWPORTS,
      defaultViewport: "tablet",
    },
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
