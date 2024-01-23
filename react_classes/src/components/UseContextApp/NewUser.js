import React, { useState } from 'react'
import useUserContext from '../../Hooks/useUserContext';

const NewUser = () => {
  const[userName, setUserName] = useState('');
  const{ users, addUser, deleteUser } = useUserContext()
  const handleChange = (e) =>{
    setUserName(e.target.value);
  }  
 
  const handleSubmit = (e) =>{
    e.preventDefault();
    const newUser = { id: new Date().getTime().toString(), name: userName }
    addUser(newUser);
    // dispatch({type: "ADD_USER", payload: newUser});
    // setUser((prevUser) =>{
    //     return [...prevUser, newUser]
    // })
    setUserName('')
  }
  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <input type='text' value={userName} onChange={handleChange}/>
        <button type='submit'>Add User</button>
      </form>
    </div>
  )
}

export default NewUser;
