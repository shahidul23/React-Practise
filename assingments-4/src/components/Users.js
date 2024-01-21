import React from 'react';
import User from './User';

const Users = (props) => {
  const{ Data } = props;  

  return (
    <section className="users"> 
       {
        Data.map((user) =>{
            return <User key={user.id} {...user}/>
        })
       }
    </section>
  )
}

export default Users;
