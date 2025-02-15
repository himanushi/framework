import type React from "react";
import { createContext, useContext } from "react";
import "modern-normalize/modern-normalize.css";

export interface StyleConfig {
  breakpoints: Record<string, string>;
}

const defaultBreakpoints: Record<string, string> = {
  sm: "480px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
};

const defaultStyleConfig: StyleConfig = {
  breakpoints: defaultBreakpoints,
};

const StyleContext = createContext<StyleConfig>(defaultStyleConfig);

export const StyleProvider: React.FC<
  Partial<StyleConfig> & { children: React.ReactNode }
> = ({ breakpoints, children }) => {
  const value: StyleConfig = {
    breakpoints: breakpoints || defaultBreakpoints,
  };

  return (
    <StyleContext.Provider value={value}>{children}</StyleContext.Provider>
  );
};

export const useStyle = () => useContext(StyleContext);
