import React, { useState, useEffect } from 'react';

const Search = ({onHandleSearch}) => {
  const [searchText, setSearchText] = useState('');   

  useEffect(() => {
    onHandleSearch(searchText);
  }, [searchText]);

  const handleChange = (e) =>{
    setSearchText(e.target.value);
  }


  return (
    <div>
      <input
        type="text"
        name="search"
        placeholder="search user"
        value={searchText}
        onChange={handleChange}
      />
    </div>
  )
}

export default Search;
