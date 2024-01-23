import React, {useState} from 'react'
import Component1 from './Component1';
import { UserContext } from './userContext';

const Index = () => {
  const[user, setUser] = useState({id:23, name:"Shahidul islam"});
  const[text, setText] = useState("hello i am text");

  return (
    <UserContext.Provider value = {{user, text}}>
      <Component1 />
    </UserContext.Provider>
  )
}

export default Index;
