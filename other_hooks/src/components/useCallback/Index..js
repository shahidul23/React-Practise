import React,{useState} from 'react'
import Message from './Message'

const Index = () => {
  const[count, setCount] = useState(0) 
  return (
    <div>
      <h1>Count : {count}</h1><br/>
      <button onClick={() =>{setCount((count) => count + 1)}}>Incerement</button><br/>
      <Message numberOfMennage = {count} />
    </div>
  )
}

export default Index
