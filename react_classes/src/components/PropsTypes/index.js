import React, { useState } from 'react'
import User from './User';

const Index = () => {

  //const[user, setUser] = useState('Shahidul islam');
  //const[userId, setUserId] = useState(1212);

  const[user, setUser] = useState({
    id: 3342334,
    name:"shahidul islam",
  });

  return (
    <>
        {/* <User userName={user} userId = {userId}/> */}
        <User user={user}/>
    </>
  )
}

export default Index;
