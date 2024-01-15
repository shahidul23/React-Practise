import React, { useState } from 'react'
import style from './form.module.css'

const FORM = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');  

  const handleNameChange = (event) =>{
    setName(event.target.value)
  }  
  const handleEmailChange = (event) =>{
    setEmail(event.target.value)
  }
  const handlePasswordChange = (event) =>{
    setPassword(event.target.value)
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    let userInfo = {
        name,
        email,
        password,
    };
    console.log(userInfo);
  }

  return (
    <div>
      <h1>Registration</h1>
      <form action='' onSubmit={handleSubmit}>
        <div className={style.formGroup}>
            <label htmlFor='name'>Name: </label>
            <input type='text' name='name' id='name' value={name} required onChange={handleNameChange}/>
        </div>
        <div className={style.formGroup}>
            <label htmlFor='email'>Email:</label>
            <input type='email' name='email' id='email' value={email} required onChange={handleEmailChange}/>
        </div>
        <div className={style.formGroup}>
            <label htmlFor='password'>Password:</label>
            <input type='password' name='password' id='password' value={password} required onChange={handlePasswordChange}/>
        </div>
        <div className={style.formGroup}>
            <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default FORM;
