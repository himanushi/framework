import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { BaseUi } from "./BaseUi";
import { colors } from "./values";
import "@testing-library/jest-dom";

describe("BaseUi", () => {
  // Basic Rendering
  describe("basic rendering", () => {
    it("renders with default element type (div)", () => {
      render(<BaseUi>test content</BaseUi>);
      const element = screen.getByText("test content");
      expect(element.tagName).toBe("DIV");
    });

    it("renders with custom element type", () => {
      render(<BaseUi as="span">test content</BaseUi>);
      const element = screen.getByText("test content");
      expect(element.tagName).toBe("SPAN");
    });
  });

  // Style Props
  describe("style props", () => {
    it("applies basic CSS properties", () => {
      render(
        <BaseUi
          backgroundColor="red"
          padding="20px"
          data-testid="styled-element"
        >
          styled content
        </BaseUi>,
      );
      const element = screen.getByTestId("styled-element");
      const computedStyle = window.getComputedStyle(element);

      expect(computedStyle.backgroundColor).toBe("red");
      expect(computedStyle.padding).toBe("20px");
    });

    it("resolves color values from theme", () => {
      render(
        <BaseUi backgroundColor="primary-50" data-testid="themed-element">
          themed content
        </BaseUi>,
      );
      const element = screen.getByTestId("themed-element");
      const computedStyle = window.getComputedStyle(element);

      expect(computedStyle.backgroundColor).toBe(colors["primary-50"]);
    });
  });

  // Responsive Props
  describe("responsive props", () => {
    it("generates responsive styles", () => {
      render(
        <BaseUi
          padding={{ xs: "10px", md: "20px" }}
          data-testid="responsive-element"
        >
          responsive content
        </BaseUi>,
      );
      const element = screen.getByTestId("responsive-element");
      const computedStyle = window.getComputedStyle(element);

      // デフォルトのパディングをチェック
      expect(computedStyle.padding).toBe("10px");

      // メディアクエリによって適用されるスタイルは直接テストが難しいため、
      // クラスに適切なスタイルが含まれているかを確認
      expect(element.className).toMatch(/padding:10px/);
      expect(element.className).toMatch(
        /@media.*min-width.*768px.*padding:20px/,
      );
    });
  });

  // Pseudo Classes/Elements
  describe("pseudo classes and elements", () => {
    it("applies pseudo-class styles", () => {
      render(
        <BaseUi
          __hover={{ backgroundColor: "blue" }}
          data-testid="pseudo-element"
        >
          hover content
        </BaseUi>,
      );
      const element = screen.getByTestId("pseudo-element");

      // クラスに擬似要素のスタイルが含まれているかを確認
      expect(element.className).toMatch(/:hover.*background-color:blue/);
    });

    it("handles nested pseudo selectors", () => {
      render(
        <BaseUi
          __disabled={{
            opacity: 0.5,
            __hover: { backgroundColor: "gray" },
          }}
          data-testid="nested-pseudo"
        >
          nested content
        </BaseUi>,
      );
      const element = screen.getByTestId("nested-pseudo");

      // ネストされた擬似クラスのスタイルを確認
      expect(element.className).toMatch(/:disabled.*opacity:0.5/);
      expect(element.className).toMatch(
        /:disabled:hover.*background-color:gray/,
      );
    });
  });

  // Motion Props
  describe("motion props", () => {
    it("renders with motion component when $motion is true", () => {
      render(
        <BaseUi $motion animate={{ opacity: 0.5 }} data-testid="motion-element">
          motion content
        </BaseUi>,
      );
      const element = screen.getByTestId("motion-element");

      // Framer Motionの特徴的な属性をチェック
      expect(element.getAttribute("data-framer-motion-component")).toBeTruthy();
    });
  });

  // DOM Props Filtering
  describe("DOM props filtering", () => {
    it("passes through allowed DOM props", () => {
      const handleClick = vi.fn();
      render(
        <BaseUi onClick={handleClick} aria-label="test" data-testid="dom-props">
          dom props content
        </BaseUi>,
      );
      const element = screen.getByTestId("dom-props");

      expect(element).toHaveAttribute("aria-label", "test");
      element.click();
      expect(handleClick).toHaveBeenCalled();
    });
  });
});
