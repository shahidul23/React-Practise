import React, { useRef } from 'react'

const Index = () => {

  const userNameRef = useRef();
  const passwordRef = useRef();  

  const handleSubmit = (e) =>{
    e.preventDefault();
    const userName = userNameRef.current.value;
    const password = passwordRef.current.value;
    console.log({userName, password});
  } 
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name'>Name:</label>
        <input type='text' id='name' ref={userNameRef}/>
      </div>
      <div>
        <label htmlFor='password'>Password:</label>
        <input type='password' id='password' ref={passwordRef} />
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Index
