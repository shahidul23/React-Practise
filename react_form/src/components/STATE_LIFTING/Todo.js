import React from 'react'

const Todo = (props) => {

  props.onHandleTodo({title:"I am form todo"});

  return (
    <div>
      <h1>I am form todo</h1>
    </div>
  )
}

export default Todo;
