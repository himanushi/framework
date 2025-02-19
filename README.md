```tsx
// ネスト可能な擬似クラスとレスポンシブとアニメーションが柔軟なコンポーネント
<Button
  px="10px"
  py="5px"
  backgroundColor="blue-500"
  __disabled={{
    opacity: 0.5,
    cursor: "not-allowed",
    __hover: { backgroundColor: { xs: "blue-500", md: "red-300" } },
  }}
  $motion
  animate={{ opacity: 0.5 }}
>
  ボタン
</Button>
```
