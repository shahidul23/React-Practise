import React, { useState } from 'react'
import Todos from './Todos';
import NewTodo from './NewTodo';

const DummyTodo = [
    "todo1",
    "todo2"
  ];
const Home = () => {
  
  const [todos, setTodos] = useState(DummyTodo);
  const handleTodo = (newTodos) =>{
    setTodos([...todos, newTodos]);
  }
  return (
    <div>
      <NewTodo onTodo={handleTodo}/>  
      <Todos todos = {todos}/>
    </div>
  )
}

export default Home
