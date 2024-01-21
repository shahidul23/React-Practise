import React from 'react'
import User from './User';

const Users = (props) => {
  const { users } = props;
  return (
    <section className="users">
      {
        users.map((user) => {
            return <User key={user.id} {...user} onRemoveItems = {props.onHandleDeleteUser}/>
        })
      }
    </section>
  )
}

export default Users;
