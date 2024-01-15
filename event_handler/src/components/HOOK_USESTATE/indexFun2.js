import React, { useState } from 'react'

const HOOK_USESTATE2 = () => {

  const[count, setCount] = useState(0);

  const handleIncrement = () =>{
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);

  }
  const handleDecrement = () =>{
    setCount((count) => count - 1);
    setCount((count) => count - 1);
  }

  return (
    <div>
        <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement} disabled={count <= 0 ? true : false}>Decrement</button>
    </div>
  )
}

export default HOOK_USESTATE2;
