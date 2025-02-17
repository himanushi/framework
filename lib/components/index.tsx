export * from "./box";
export * from "./button";
export * from "./checkbox";
export * from "./icon";
export * from "./text";
export * from "./switch";

import { useState } from "react";

export const Test = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
