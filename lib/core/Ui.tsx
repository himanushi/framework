import React from 'react';
import { css, cx } from '@emotion/css';
import * as CSS from 'csstype';

// CSSプロパティ（csstype）の部分を拡張して、疑似クラス用の prop を許容
interface UiStyleProps extends Partial<CSS.Properties<string | number>> {
  // 例: __hover, __active, __focus など
  [key: `__${string}`]: CSS.Properties<string | number> | undefined;
}

type UiProps = React.HTMLAttributes<HTMLDivElement> & UiStyleProps;

// 内部で props を解析し、通常スタイルと疑似スタイルに分けるユーティリティ関数
const extractStyles = (props: UiProps) => {
  const base: React.CSSProperties = {};
  const pseudo: Record<string, any> = {};
  const rest: Partial<UiProps> = {};

  Object.entries(props).forEach(([key, value]) => {
    if (key.startsWith('__')) {
      // 例: "__active" -> "&:active"
      const pseudoKey = `&:${key.slice(2)}`;
      pseudo[pseudoKey] = value;
    } else if (
      key === 'children' ||
      key === 'className' ||
      key === 'style' ||
      // イベントハンドラーなど HTML 属性はそのまま残す
      key.startsWith('on')
    ) {
      rest[key as keyof UiProps] = value;
    } else {
      // CSS プロパティと判断
      base[key as keyof React.CSSProperties] = value as any;
    }
  });
  return { base, pseudo, rest };
};

export const Ui: React.FC<UiProps> = (props) => {
  const { base, pseudo, rest } = extractStyles(props);
  // ベーススタイルと疑似スタイルを結合
  const combinedStyles = { ...base, ...pseudo };
  const generatedClass = css(combinedStyles);

  // すでに className が指定されていた場合もマージ
  return <div {...rest} className={cx(generatedClass, rest.className)} />;
};
