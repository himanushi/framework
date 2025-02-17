# Framework

モダンなReactアプリケーション向けの軽量でカスタマイズ可能なUIコンポーネントライブラリです。

## 特徴

- 🎨 柔軟なスタイリングシステム
- 📱 レスポンシブデザインのサポート
- 🎭 アニメーション対応
- 🔧 高度なカスタマイズ性
- 📦 軽量なバンドルサイズ
- 🎯 TypeScript完全対応

## インストール

```bash
npm install framework
# or
yarn add framework
# or
pnpm add framework
```

## 基本的な使い方

まず、アプリケーションのルートで`UiProvider`をインポートし、設定します：

```tsx
import { UiProvider } from 'framework';

function App() {
  return (
    <UiProvider>
      <YourApp />
    </UiProvider>
  );
}
```

次に、必要なコンポーネントをインポートして使用します：

```tsx
import { Button, Text, Box } from 'framework';

function MyComponent() {
  return (
    <Box p="16px">
      <Text bold>Hello World</Text>
      <Button primary onClick={() => alert('Clicked!')}>
        クリックしてください
      </Button>
    </Box>
  );
}
```

## アニメーション ($motion)

コンポーネントに`$motion`プロパティを追加することで、アニメーション機能を有効化できます：

```tsx
// 基本的な使用方法
<Box $motion animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
  フェードインするボックス
</Box>

// レイアウトアニメーション
<Box $motion layout>
  位置や大きさが変わるとアニメーションする
</Box>

// 複雑なアニメーション
<Box
  $motion
  initial={{ scale: 0, rotate: 180 }}
  animate={{ scale: 1, rotate: 0 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20
  }}
>
  バネのような動き
</Box>
```

`$motion`は[Motion One](https://motion.dev/)ライブラリを内部で使用しており、以下の機能を提供します：

- `animate`: アニメーションの最終状態
- `initial`: 初期状態
- `transition`: アニメーションの設定（速度、イージングなど）
- `layout`: 自動レイアウトアニメーション
- `whileHover`: ホバー時のアニメーション
- `whileTap`: タップ/クリック時のアニメーション

## 利用可能なコンポーネント

- `Box` - フレックスボックスベースのレイアウトコンポーネント
- `Button` - カスタマイズ可能なボタンコンポーネント
- `Checkbox` - チェックボックスコンポーネント
- `Icon` - アイコン表示用コンポーネント
- `Switch` - トグルスイッチコンポーネント
- `Text` - テキスト表示用コンポーネント
- `Tooltip` - ツールチップコンポーネント

## ショートハンドプロパティ

このライブラリは、一般的なスタイリングパターンを簡単に適用できるショートハンドプロパティを提供します：

```tsx
// 従来の方法
<Box display="flex" alignItems="center" justifyContent="center">

// ショートハンドプロパティを使用
<Box iCenter jCenter>
```

主なショートハンドプロパティ：

- `iCenter`, `iStart`, `iEnd` - align-items
- `jCenter`, `jStart`, `jEnd`, `jBetween` - justify-content
- `col` - flexDirection: column
- `p`, `pt`, `pr`, `pb`, `pl`, `py`, `px` - パディング関連
- `w`, `h` - 幅と高さ
- `radius` - border-radius
- `solid` - border: 1px solid

## レスポンシブデザイン

すべてのプロパティでブレイクポイントベースのレスポンシブ値をサポートしています：

```tsx
<Box
  padding={{
    xs: '8px',
    sm: '16px',
    md: '24px',
    lg: '32px',
    xl: '40px'
  }}
>
  コンテンツ
</Box>
```

デフォルトのブレイクポイント：
- xs: 0px
- sm: 480px
- md: 768px
- lg: 1024px
- xl: 1280px

## カスタマイズ

`UiProvider`を通じて、ブレイクポイントやカラーパレットをカスタマイズできます：

```tsx
const customConfig = {
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
  },
  colors: {
    primary: '#1a73e8',
    secondary: '#788cff',
    // ... その他のカラー
  },
};

<UiProvider {...customConfig}>
  <App />
</UiProvider>
```

## 開発

```bash
# 依存関係のインストール
pnpm install

# Storybookの起動
pnpm dev

# ビルド
pnpm build

# Storybookのビルド
pnpm build-storybook
```

## ライセンス

MITライセンスの下で公開されています。

## License

MIT © 2024
