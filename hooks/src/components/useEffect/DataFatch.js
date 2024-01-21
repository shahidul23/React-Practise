import React,{useState, useEffect} from 'react'

const loadingMessage = <p>Todo is loading</p>
const DataFetch = () => {
    const [ todos, setTodos] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() =>{
        setTimeout(()=>{
            fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) =>{
                if (!res.ok) {
                    throw Error("Fetching is not Successfully")
                }
                return res.json();
            })
            .then((data) =>{
                setTodos(data);
                setLoading(false);
                setError(null);
            })
            .catch((error) =>{
                setError(error.message);
                setLoading(false)
            })
        },2000)
    }, []);
  return (
    <div>
      <h1>Todos</h1>
      {error && <p>{error}</p>}
      {isLoading && loadingMessage},
      {
       todos && 
       todos.map((todo) =>{
            return <div>
                <p key={todo.id}>{todo.title}</p>
            </div>
        })
      }
    </div>
  )
}

export default DataFetch;
