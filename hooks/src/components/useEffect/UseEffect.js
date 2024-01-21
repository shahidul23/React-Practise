import React,{useState, useEffect} from 'react'

const UseEffect = () => {

  const[ count, setCount] = useState(0);
  const[loding, setLoding] = useState(false);
  
  useEffect(() =>{
    console.log("hello world  use effect")
  }, [loding]);

//   const handleOnclickIncrement = () =>{
//     setCount(count + 1)
//   }
//   const handleOnclickDecrement = () =>{
//     setCount(count - 1)
//   }
  return (
    <div>
      {console.log("rendering")}  
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count => count + 1)}>+</button>
      <button onClick={() => setCount(count => count - 1)}>-</button>
      <button onClick={() => {
        setLoding(!loding)
      }}>Lodding</button>
    </div>
  )
}

export default UseEffect;
