import React, { useEffect, useState } from "react";
import Users from "./components/Users";

const url = "https://jsonplaceholder.typicode.com/users";
function App() {
  const[User, setUser] = useState([]);
  const[ isLoading, setLoading ] = useState(true);
  const[ error, setError ] = useState(null);
  const datafetch = async(url) =>{
    setLoading(true)
    try {
      const User = await fetch(url);
      const data = await User.json();
      setUser(data);
      setLoading(false)
      setError(null)
    } catch (error) {
      setLoading(false)
      setError(error)
    }
  }
  useEffect(() =>{
    datafetch(url);
  },[]);

  return (
    <div className="container">
      <h1 className="title">Users Management App</h1>
      {isLoading && <p>Loading users...</p>}
      {error && <p>{error.message}</p>}
      {User && <Users Data={User}/>}
    </div>
  );
}

export default App;
