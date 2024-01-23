import React from 'react'
import User from './User';
import useUserContext from '../../Hooks/useUserContext';

const Users = () => {
  const { users } = useUserContext();  
  return (
    <div>
      {users.map((user)=>{
        return <User key={user.id} user={user}/>
      })}
    </div>
  )
}

export default Users;
