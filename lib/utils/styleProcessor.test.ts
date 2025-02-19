import { describe, expect, it } from "vitest";
import { flattenStyles, resolveResponsiveStyles } from "./styleProcessor";

// Mock breakpoints and colors for testing
const mockBreakpoints = {
  xs: "0px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
};

const mockColors = {
  "primary-50": "#3b82f6",
  "gray-20": "#e5e7eb",
  "red-500": "#ef4444",
};

describe("resolveResponsiveStyles", () => {
  it("handles simple non-responsive values", () => {
    const result = resolveResponsiveStyles(
      "backgroundColor",
      "primary-50",
      mockBreakpoints,
      mockColors,
    );

    expect(result).toEqual({
      base: { backgroundColor: "#3b82f6" },
      media: {},
    });
  });

  it("resolves responsive values with breakpoints", () => {
    const result = resolveResponsiveStyles(
      "padding",
      { xs: "10px", md: "20px" },
      mockBreakpoints,
      mockColors,
    );

    expect(result).toEqual({
      base: { padding: "10px" },
      media: {
        "@media (min-width: 768px)": { padding: "20px" },
      },
    });
  });

  it("handles color values in responsive objects", () => {
    const result = resolveResponsiveStyles(
      "backgroundColor",
      { xs: "primary-50", md: "red-500" },
      mockBreakpoints,
      mockColors,
    );

    expect(result).toEqual({
      base: { backgroundColor: "#3b82f6" },
      media: {
        "@media (min-width: 768px)": { backgroundColor: "#ef4444" },
      },
    });
  });

  it("handles non-color values", () => {
    const result = resolveResponsiveStyles(
      "width",
      "100%",
      mockBreakpoints,
      mockColors,
    );

    expect(result).toEqual({
      base: { width: "100%" },
      media: {},
    });
  });
});

describe("flattenStyles", () => {
  it("flattens basic styles without pseudo or responsive", () => {
    const styles = {
      backgroundColor: "primary-50",
      padding: "20px",
    };

    const result = flattenStyles(styles, mockBreakpoints, mockColors);

    expect(result).toEqual({
      base: {
        backgroundColor: "#3b82f6",
        padding: "20px",
      },
      media: {},
      pseudo: {},
    });
  });

  it("handles pseudo-classes", () => {
    const styles = {
      backgroundColor: "primary-50",
      __hover: {
        backgroundColor: "red-500",
      },
    };

    const result = flattenStyles(styles, mockBreakpoints, mockColors);

    expect(result).toEqual({
      base: {
        backgroundColor: "#3b82f6",
      },
      media: {},
      pseudo: {
        "&:hover": {
          backgroundColor: "#ef4444",
        },
      },
    });
  });

  it("handles nested pseudo-classes", () => {
    const styles = {
      backgroundColor: "primary-50",
      __disabled: {
        opacity: 0.5,
        __hover: {
          backgroundColor: "red-500",
        },
      },
    };

    const result = flattenStyles(styles, mockBreakpoints, mockColors);

    expect(result).toEqual({
      base: {
        backgroundColor: "#3b82f6",
      },
      media: {},
      pseudo: {
        "&:disabled": {
          opacity: 0.5,
        },
        "&:disabled:hover": {
          backgroundColor: "#ef4444",
        },
      },
    });
  });

  it("handles responsive styles with pseudo-classes", () => {
    const styles = {
      backgroundColor: { xs: "primary-50", md: "gray-20" },
      __hover: {
        backgroundColor: { xs: "red-500", md: "primary-50" },
      },
    };

    const result = flattenStyles(styles, mockBreakpoints, mockColors);

    expect(result).toEqual({
      base: {
        backgroundColor: "#3b82f6",
      },
      media: {
        "@media (min-width: 768px)": {
          backgroundColor: "#e5e7eb",
        },
      },
      pseudo: {
        "&:hover": {
          backgroundColor: "#ef4444",
        },
        "@media (min-width: 768px)": {
          "&:hover": {
            backgroundColor: "#3b82f6",
          },
        },
      },
    });
  });

  it("handles pseudo-elements", () => {
    const styles = {
      backgroundColor: "primary-50",
      __before: {
        content: '""',
        display: "block",
      },
      __after: {
        content: '""',
        backgroundColor: "red-500",
      },
    };

    const result = flattenStyles(styles, mockBreakpoints, mockColors);

    expect(result).toEqual({
      base: {
        backgroundColor: "#3b82f6",
      },
      media: {},
      pseudo: {
        "&::before": {
          content: '""',
          display: "block",
        },
        "&::after": {
          content: '""',
          backgroundColor: "#ef4444",
        },
      },
    });
  });

  it("handles complex nested pseudo selectors", () => {
    const styles = {
      __hover: {
        __focus: {
          __active: {
            backgroundColor: "red-500",
          },
        },
      },
    } as any;

    const result = flattenStyles(styles, mockBreakpoints, mockColors);

    expect(result).toEqual({
      base: {},
      media: {},
      pseudo: {
        "&:hover:focus:active": {
          backgroundColor: "#ef4444",
        },
      },
    });
  });
});
