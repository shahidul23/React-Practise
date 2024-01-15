import React from 'react'

const HOOK_USESTATE3 = () => {

  const handleParentClick = (event) =>{
    console.log("Parent Event:",event)
  }  

  const handelChildClick = (event) =>{
    event.stopPropagation();
    console.log("Child Event:", event)
  }

  return (
    <div className='eventPropagation' onClick={handleParentClick}>
      <h1>Hello world</h1>
      <button onClick={handelChildClick}>Click Me</button>
    </div>
  )
}

export default HOOK_USESTATE3;
