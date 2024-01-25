import React,{useCallback, useState} from 'react'
import Message from './Message'

const Index = () => {
  const[count, setCount] = useState(0);
  const[toggle, setToggle] = useState(false); 
  const handleIncrement = useCallback(() =>{
    setCount(count + 1)
  },[count])
  console.log("Index")
  return (
    <div>
      {toggle ? "On" : "Off"}
      <button onClick={() =>setToggle(!toggle)}> Toggle</button>
      <h1>Count : {count}</h1><br/>
      <button onClick={() =>{setCount((count) => count + 1)}}>Incerement</button><br/>
      <Message numberOfMessage = {count} OnhandleIncrement= {handleIncrement}/>
    </div>
  )
}

export default Index
