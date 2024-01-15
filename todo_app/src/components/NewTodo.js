import React, { useState } from 'react'

const NewTodo = (props) => {
  const [todo, setTodo] = useState('')
  const handleChangeTodo = (e) =>{
    setTodo(e.target.value);
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    props.onTodo(todo);
  }


  return (
    <div>
      <form action='' onSubmit={handleSubmit}>
        <label htmlFor='todo'>New Todo : </label>
        <input type='text' name='todo' id='todo' value={todo} onChange={handleChangeTodo}/>
        <button>Add Todo</button>
      </form>
    </div>
  )
}

export default NewTodo;
