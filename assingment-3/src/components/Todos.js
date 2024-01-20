import React from 'react'
import Todo from './Todo';

const Todos = (props) => {
  const { todos } = props; 
  return (
    <div>
      {todos.map((todo) => <Todo key={todo.id} todo ={todo.todo} id={todo.id} OnRemoveitem={props.OnRemoveItems}/>)}  
      
    </div>
  )
}

export default Todos;
