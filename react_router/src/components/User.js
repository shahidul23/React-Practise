import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
// import { useParams } from 'react-router-dom'

const User = () => {
  //const {id} = useParams();  
  const[ searchParam, setSearchParam ] = useSearchParams();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const handleChangeName = (e) =>{
    setName(e.target.value)
  }
  const handleChangeAge = (e) =>{
    setAge(e.target.value)
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    setSearchParam({name: name, Age: age})
  }
  return (
    <div>
        <h1>User</h1>
        <form onSubmit={handleSubmit}>
           <input type='text' placeholder='name' value={name} onChange={handleChangeName}/>
           <input type='text' placeholder='age' value={age} onChange={handleChangeAge}/>
           <button type='submit'>Submit</button>
        </form>
      {/* <h1>user id : {id}</h1> */}
      <h1>User Params : {searchParam.get("id")}</h1>
    </div>
  )
}

export default User
