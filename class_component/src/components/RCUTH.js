import React from 'react'

function Card(){
    return(
        <h1>Hello world</h1>
    )
}
function Card1(){
    return React.createElement("h1", {}, "This is Card 1");
}
function Todo(){
    return(
        <div>
            <p>Todo Title</p>
            <p>Todo desc</p>
        </div>
    )
}

function Todo1(){
    return React.createElement("div",{},
    React.createElement("p",{},"todo list 1"),
    React.createElement("p", {} ,"todo Desc 1")
    )
}

export default function Rcuth() {
  return (
    <div>
        <Card />
        <Card1 />
        <Todo />
        <Todo1 />
    </div>
  )
}
