import React from 'react'

const CHILD = (props) => {

  const data = "I am from Child components";
  props.onChildData(data);

  return (
    <div>
      <h1>hello, I am Child</h1>
      <p>{props.data}</p>
    </div>
  )
}

export default CHILD;
