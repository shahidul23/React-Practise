import React from 'react'
import useUserContext from '../../Hooks/useUserContext';

const User = (props) => {
  const{ id, name } = props.user;
  const { deleteUser } = useUserContext();
  return (
    <article>
        <div>
            <h1>{id}</h1>
            <h2>{name}</h2>
        </div>
        <button onClick={()=>{
           deleteUser(id);
        }}>Delete</button>
    </article>
    
  )
}

export default User;
