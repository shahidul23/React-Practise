import React from 'react'

const User = ({id, name, phone, email, onRemoveItems}) => {

  const handleDelete = (id) =>{
    onRemoveItems(id);
  }  
  return (
    <article className="user">
      <h3>{id}</h3>
      <h3 className="user__name">{name}</h3>
      <p className="user__email">{email}</p>
      <a className="user__phone" href={'tel:+' + phone}>
        {phone}
      </a>
      <button
        onClick={() => {
          handleDelete(id);
        }}>
        Delete
      </button>
    </article>
  )
}

export default User;
