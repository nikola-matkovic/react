import { useState } from "react";

const CounterF = (props) => {
  let [count, setCount] = useState(10);

  function increment(e) {
    setCount(count + 1);
    console.log(count);
  }

  function decrement(e) {
    setCount(count - 1);
    console.log(count);
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default CounterF;
