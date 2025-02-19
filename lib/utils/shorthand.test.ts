import { describe, expect, it } from "vitest";
import { resolveShorthandProps } from "./shorthand";
import type { BaseUiProps } from "./styleProcessor";

describe("resolveShorthandProps", () => {
  // 基本的な文字列マッピングのテスト
  it("文字列のショートハンドを正しく解決すること", () => {
    const shortHands = {
      w: "width",
      h: "height",
    };

    const props = {
      w: "100px",
      h: "200px",
      color: "red",
    };

    const result = resolveShorthandProps(props, shortHands);

    expect(result).toEqual({
      width: "100px",
      height: "200px",
      color: "red",
    });
  });

  // 関数マッピングのテスト
  it("関数のショートハンドを正しく解決すること", () => {
    const shortHands = {
      py: (value: string | number) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
      px: (value: string | number) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
    };

    const props = {
      py: "10px",
      px: "20px",
    } as BaseUiProps;

    const result = resolveShorthandProps(props, shortHands);

    expect(result).toEqual({
      paddingTop: "10px",
      paddingBottom: "10px",
      paddingLeft: "20px",
      paddingRight: "20px",
    });
  });

  // オブジェクトマッピングのテスト
  it("オブジェクトのショートハンドを正しく解決すること", () => {
    const shortHands = {
      primary: {
        backgroundColor: "blue",
        color: "white",
      },
      center: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    };

    const props = {
      primary: true,
      center: true,
      margin: "10px",
    };

    const result = resolveShorthandProps(props, shortHands);

    expect(result).toEqual({
      backgroundColor: "blue",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "10px",
    });
  });

  // 複合的なショートハンドのテスト
  it("複合的なショートハンドを正しく解決すること", () => {
    const shortHands = {
      w: "width",
      h: "height",
      py: (value: string | number) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
      primary: {
        backgroundColor: "blue",
        color: "white",
      },
    };

    const props = {
      w: "100px",
      h: "200px",
      py: "10px",
      primary: true,
      margin: "20px",
    };

    const result = resolveShorthandProps(props, shortHands);

    expect(result).toEqual({
      width: "100px",
      height: "200px",
      paddingTop: "10px",
      paddingBottom: "10px",
      backgroundColor: "blue",
      color: "white",
      margin: "20px",
    });
  });

  // falseの場合のオブジェクトマッピングのテスト
  it("falseの場合にオブジェクトのショートハンドを適用しないこと", () => {
    const shortHands = {
      primary: {
        backgroundColor: "blue",
        color: "white",
      },
    };

    const props = {
      primary: false,
      margin: "10px",
    };

    const result = resolveShorthandProps(props, shortHands);

    expect(result).toEqual({
      margin: "10px",
    });
  });

  // レスポンシブ値のテスト
  it("レスポンシブ値を正しく処理すること", () => {
    const shortHands = {
      w: "width",
    };

    const props = {
      w: { xs: "100%", md: "50%" },
      margin: { xs: "10px", lg: "20px" },
    };

    const result = resolveShorthandProps(props, shortHands);

    expect(result).toEqual({
      width: { xs: "100%", md: "50%" },
      margin: { xs: "10px", lg: "20px" },
    });
  });

  // undefinedの処理のテスト
  it("undefinedの値を正しく処理すること", () => {
    const shortHands = {
      w: "width",
      primary: {
        backgroundColor: "blue",
        color: "white",
      },
    };

    const props = {
      w: undefined,
      primary: undefined,
      margin: "10px",
    };

    const result = resolveShorthandProps(props, shortHands);

    expect(result).toEqual({
      margin: "10px",
    });
  });
});
