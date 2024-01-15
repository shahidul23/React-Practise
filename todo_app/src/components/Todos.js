import React from 'react'
import Todo from './Todo';

const Todos = (props) => {
  const {todos} = props;
  return (
    <div>
        {/* <h1>Todos Components</h1> */}
      {todos.map((todo,index) =>(
        <Todo key={index} todo={todo}/>
      ))}
    </div>
  )
}

export default Todos;
