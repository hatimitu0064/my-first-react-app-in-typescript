import React, { useEffect, useRef, useState } from "react";

const Counter: React.FC<{}> = () => {
  const initialCount: any = 0;
  const [count, setCount] = useState<number>(initialCount);

  const increment = () => setCount((prevState) => prevState + 1);
  const decrement = () => setCount((prevState) => prevState - 1);

  const renderTimes = useRef<number>(0);
  useEffect(() => {
    renderTimes.current = renderTimes.current + 1;
  });

  const ref = useRef<HTMLInputElement>(null!);
  const focusInput = () => {
    ref.current.focus();
  };

  return (
    <div>
      <div>value: {count}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>This component was re-rendered {renderTimes.current} times!</div>
      <input ref={ref} type="text" />
      <button onClick={focusInput}>Click Me!</button>
    </div>
  );
};

export default Counter;
