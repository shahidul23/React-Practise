import React from 'react'
import useFetch from './useFetch'  
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const DataFetch = () => {
  const notify = () => toast("Todo is loading");
   
  const {data,isLoading, error} = useFetch("https://jsonplaceholder.typicode.com/todos")  

  const loadingMessage = <p>Todo is loading</p>
  const errorMessage = <p>{error}</p>
  const hendleTost = () =>{
    notify()
  }  
  return (
    <div>
      <h1>Todos</h1>
      <button onClick={hendleTost}>Check</button>
      {error && errorMessage}
      {isLoading && loadingMessage},
      {
       data && 
       data.map((todo) =>{
            return <div key={todo.id}>
                <p>{todo.title}</p>
            </div>
        }) 
      }
      <ToastContainer/>
    </div>
  )
}

export default DataFetch;
