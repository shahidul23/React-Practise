import React, { useEffect, useState } from 'react'

const Search = (props) => {

  const [searchText, setSearchText] = useState('');
  const handleOnChange = (e) =>{
    setSearchText(e.target.value);
  }
  useEffect(()=>{
    props.OnItemsSearch(searchText);
  },[searchText]);

  return (
    <div style={{textAlign:"center"}}>
      <input type='text' value={searchText} onChange={handleOnChange} placeholder='Search Country' />
    </div>
  )
}

export default Search;
