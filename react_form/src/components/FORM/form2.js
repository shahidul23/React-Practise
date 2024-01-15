import React, { useState } from 'react'
import style from './form.module.css';

const FORM2 = () => {

  const [user, setUser] = useState({name:'',email:'',password:''});
  const {name, email, password} = user;

  const handleChange = (e) =>{
    
    setUser({ ...user,[e.target.name]: e.target.value});
    
    // const filedName = e.target.name;
    // if(filedName === 'name'){
    //     setUser({name: e.target.value, email, password})
    // }else if(filedName === 'email'){
    //     setUser({name, email: e.target.value, password})
    // }else if(filedName === 'password'){
    //     setUser({name, email, password: e.target.value})
    // }


  }
  
//   const handleNameChange = (e) =>{
//     setUser({name: e.target.value, email, password});
//   }
//   const handleEmailChange = (e) =>{
//     setUser({name, email: e.target.value, password});
//   }
//   const handlePasswordChange =(e) =>{
//     setUser({name, email, password:e.target.value})
//   }
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(user);
  }

  return (
    <div>
      <h1>Registration 2</h1>
      <form action='' onSubmit={handleSubmit}>
        <div className={style.formGroup}>
            <label htmlFor='name'>Name: </label>
            <input type='text' name='name' id='name' value={name} required onChange={handleChange}/>
        </div>
        <div className={style.formGroup}>
            <label htmlFor='email'>Email:</label>
            <input type='email' name='email' id='email' value={email} required onChange={handleChange}/>
        </div>
        <div className={style.formGroup}>
            <label htmlFor='password'>Password:</label>
            <input type='password' name='password' id='password' value={password} required onChange={handleChange}/>
        </div>
        <div className={style.formGroup}>
            <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default FORM2;
