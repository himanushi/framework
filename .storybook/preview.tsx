import "../lib/style.scss";
import "modern-normalize/modern-normalize.css";

import type { Preview } from "@storybook/react";
import React from "react";

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
    ...(import.meta.env.STORYBOOK_CHROMATIC
      ? {
          viewport: {
            viewports: VIEWPORTS,
            defaultViewport: "tablet",
          },
        }
      : {}),
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [(Story) => <Story />],
};

export default preview;
