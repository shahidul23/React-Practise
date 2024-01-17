import React, { useState } from 'react'

import {v4 as uuidv4} from 'uuid';
import Todos from './Todos';
import style from './assets/home.module.css'
import NewTodo from './NewTodo';

const Home = () => {

  const[todos, setTodos] = useState([]);
  const handelTodo = (todo) =>{
    setTodos((prevTodos) =>{
        return [...prevTodos,{id:uuidv4(), todo}]
    })
  }

  const handleRemoveTodo = (id) =>{
    setTodos((prevTodos)=>{
        const filterTodos = prevTodos.filter((todo)=> todo.id !== id);
        return filterTodos;
    })
  }

  return (
    <div className={style.container}>
      <h1 style={{color : "white"}}>Todo App</h1>  
      <NewTodo onAddTodo={handelTodo}/>
      <Todos todos={todos} onRemoveTodo={handleRemoveTodo}/>
    </div>
  )
}

export default Home;
