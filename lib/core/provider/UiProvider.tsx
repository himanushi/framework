import type React from "react";
import { createContext } from "react";
import "modern-normalize/modern-normalize.css";
import {
  defaultAllowedDOMPropKeys,
  defaultBreakpoints,
  defaultColors,
} from "./defaultValues";

/*
export const defaultBreakpoints: Record<string, string> = {
  xs: "0px",
  sm: "480px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
};

export const defaultColors = {
  "gray-50": "oklch(0.985 0.002 247.839)",
  "gray-100": "oklch(0.967 0.003 264.542)",
  "gray-200": "oklch(0.928 0.006 264.531)",
} as const;

export const defaultAllowedDOMPropKeys = new Set([
  "checked",
  "disabled",
  "value",
]);
 */

export interface UiConfig {
  breakpoints: Record<string, string>;
  colors: Record<string, string>;
  allowedDOMPropKeys: Set<string>;
}

const defaultConfig: UiConfig = {
  breakpoints: defaultBreakpoints,
  colors: defaultColors,
  allowedDOMPropKeys: defaultAllowedDOMPropKeys,
};

export const UiContext = createContext<UiConfig>(defaultConfig);

export const UiProvider: React.FC<
  Partial<UiConfig> & { children: React.ReactNode }
> = ({ breakpoints, colors, allowedDOMPropKeys, children }) => {
  const value: UiConfig = {
    breakpoints: breakpoints || defaultBreakpoints,
    colors: colors || defaultColors,
    allowedDOMPropKeys: allowedDOMPropKeys || defaultAllowedDOMPropKeys,
  };

  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
};
