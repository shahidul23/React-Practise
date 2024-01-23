import React, { useContext } from 'react'
import { UserContext } from './userContext';

const Component4 = () => {
  const {user, text} = useContext(UserContext);
  const{id, name} = user;
  return (
    <div>
    <h1>{id}</h1>
    <h1>{name}</h1>
    <p>{text}</p>
    </div>
  )
}

export default Component4;
