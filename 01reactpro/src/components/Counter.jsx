import React, { useState } from "react";

// this is for use state hook example

// function Counter() {
//   const [count, setCount] = useState(0);
//   function increment() {
//     setCount(count + 1);
//   }
//   function decrement() {
//     setCount(count - 1);
//   }
//   return (
//     <div>
//       <h1>The count is : {count} </h1>
//       <button onClick={increment}>Increment by 1</button>
//       <button onClick={decrement}>Decrement by 1</button>
//     </div>
//   );
// }
// export default Counter;

// Multiple UseStateHook example

export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);
  function increment() {
    setCount(count + incrementBy);
  }
  function decrement() {
    setCount(count - incrementBy);
  }
  function increseIncrementBy() {
    setIncrementBy(incrementBy + 1);
  }
  function decreaseIncrementBy() {
    setIncrementBy(incrementBy - 1);
  }
  return (
    <div>
      <h1>The count is : {count} </h1>
      <button onClick={increment}>Increment by 1</button>
      <button onClick={decrement}>Decrement by 1</button>

      <h1>The count is incremented / decremented by : {incrementBy} </h1>
      <button onClick={increseIncrementBy}>Increment</button>
      <button onClick={decreaseIncrementBy}>Decrement </button>
    </div>
  );
}
