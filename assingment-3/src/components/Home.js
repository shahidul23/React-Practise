import React,{useState} from 'react'
import Todos from './Todos';
import { v4 as uuidv4 } from 'uuid';
import NewTodo from './NewTodo';

const Home = () => {

  const [todos, setTodos] = useState([])  
  const handleTodos = (todo) =>{
    setTodos((reveTodo)=>{
        return [...reveTodo,{id:uuidv4(),todo}]
    })
  }
  const handleRemoveItems = (id) =>{
    setTodos((preveTodos) =>{
        const filterTodo = preveTodos.filter((todo) => {
            return todo.id !== id;
        });
        return filterTodo;
    })
  }
  return (
    <div>
      <NewTodo onAddTodo={handleTodos}/>
      <Todos todos={todos}  OnRemoveItems = {handleRemoveItems}/>
    </div>
  )
}

export default Home;
