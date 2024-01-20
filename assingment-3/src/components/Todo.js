import React from 'react'

const Todo = (props) => {
  const {id, todo} = props;  
  const handleClick = (id) =>{
    props.OnRemoveitem(id)
  }
  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.desc}</p>
      <div>
      <button onClick={() =>{
        handleClick(id)
      }}>
         <i className='fa fa-trash fa-2x'></i>
      </button>
      </div>
    </div>
  )
}

export default Todo;
