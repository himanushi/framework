```tsx
// 擬似クラスとレスポンシブとアニメーションを組み合わせる
<Button
  backgroundColor="blue-500"
  __disabled={{
    opacity: 0.5,
    cursor: "not-allowed",
    __hover: { backgroundColor: { xs: "blue-500", md: "red-300" }
  }}
  $motion
  animate={{ opacity: 0.5 }}
>
  ボタン
</Button>
```
