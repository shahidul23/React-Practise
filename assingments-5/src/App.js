import React,{useState, useEffect} from 'react';


import useFetch from './hooks/useFetch';
import Users from './components/Users';
import Search from './components/Search';


const url = "https://jsonplaceholder.typicode.com/users";

function App() {
  const[filetrData, setFilterData] = useState([]);
  const{Data, isLoading, error} = useFetch(url);
  useEffect(() =>{
    setFilterData(Data)

  },[Data]);


  // const handleSearchItem = (name) =>{
  //   const value = name.toLowerCase();
  //   const AllSearchValue = Data.filter((item) =>{
  //     const userName = item.toLowerCase().include(value);
  //     return userName; 
  //   });
  //   setFilterData(AllSearchValue);
  // } 

  const handleSearchItem = (searchName) => {
    const value = searchName.toLowerCase();
    const allSearchValue = Data.filter((item) => {
      const itemName = item.name.toLowerCase();
      return itemName.includes(value);
    });
    setFilterData(allSearchValue);
  };

  const handleRemoveItem = (id) =>{
    const AllUsers = filetrData.filter((item) =>{
      return item.id !== id
    })
    setFilterData(AllUsers);
  }
  
  
  return (
    <div className="container">
      <h1 className="title">Users Management App</h1>
      {isLoading && <p>Loading users...</p>}
      {error && <p>{error}</p>}

      {/* Needs to pass functions from here for state lifting  */}
      <Search onHandleSearch={handleSearchItem} />
      {Data.length > 1 && <Users users={filetrData} onHandleDeleteUser={handleRemoveItem} />}
  </div>
  );
}

export default App;
