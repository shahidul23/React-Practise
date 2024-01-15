import React, {useState} from 'react'

const Counter = () => {

  const[count, setCount] = useState(0);

  const handleIncrement = () =>{
    setCount(count + 1);
  }

  const handleDecrement = () =>{
    setCount(count - 1);
  }

  const handleResate = () =>{
    setCount(count === 0);
  }

  return (
    <div className='counter center'>
      <h1 className='counter_Title'>Counter App</h1>
      <div className='card center'>
        <h4 className='cardTitle'>Count : {count}</h4>
        <div className='card-col'>
            <button className='btn card-btn' onClick={handleIncrement} disabled={count === 5 ? true : false}>+</button>
            <button className='btn card-btn' onClick={handleDecrement} disabled={count === -5 ? true : false}>-</button>
            <button className='btn card-btn' onClick={handleResate}>0</button>
        </div>
      </div>
    </div>
  )
}

export default Counter;
