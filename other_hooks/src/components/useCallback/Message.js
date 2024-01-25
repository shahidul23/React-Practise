import React, { memo, useMemo } from 'react'

const Message = ({numberOfMessage,OnhandleIncrement}) => {

  const calculatedNumber = useMemo(() =>{
    let number = 0;
    for(let index = 0; index<500000000; index ++){
      number++;
    }
    return number;
  },[])
  
  return (
    <div>
    <h3>Number : {calculatedNumber}</h3>  
    <h4>send {numberOfMessage} messages</h4>
    <button onClick={OnhandleIncrement}>increment message number</button>
    </div>
  )
}

export default memo(Message)
