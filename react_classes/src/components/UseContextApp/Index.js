import React from 'react'
import Users from './Users';
import NewUser from './NewUser';
import { UserProvider } from '../../context/UserContext';

const Index = () => {
  return (
    <UserProvider>
        <div>
            <NewUser />  
            <Users />
        </div>
    </UserProvider>
  )
}

export default Index;
