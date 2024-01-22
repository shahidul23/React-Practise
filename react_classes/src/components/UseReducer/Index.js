import React, { useReducer, useState } from 'react'
import { reducer } from './reducer';

const bookData = [
    {id:1, name:"Pather Panchal"},
    {id:2, name:"Padma Nadir Majhi"},
    {id:3, name:"Srikanta"},
];
const Modal = ({modalText}) =>{
    return <p>{modalText}</p>
};
 
const initialState = {
    books: bookData,
    isModalOpen: false,
    modalText: ''
 }

const Index = () => {
  const [bookState, dispatch] = useReducer(reducer, initialState)  
//   const[books, setBooks] = useState(bookData);
//   const[isModalOpen, setModelOpen] = useState(false);
//   const[modalText, setModaltext] = useState('');
  const[bookName, setBookName] = useState('');
  const handleChange = (e) =>{
    setBookName(e.target.value);
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    const newBook = {id: new Date().getTime().toString(), name: bookName}
    dispatch({ type:"ADD", payload:newBook })
    setBookName('');
   
  }
  const RemoveBook = (id) =>{
    dispatch({type: "REMOVE", payload:id})
  }
  return (
    <div>
       <h3>Book List</h3>
       <form onSubmit={handleSubmit}>
         <input type='text' value={bookName} onChange={handleChange}/>
         <button type='submit'>Add Book</button>
       </form>
       { bookState.isModalOpen && <Modal modalText={bookState.modalText}/>}
       {bookState.books.map((book) =>{
        const{id, name} = book
        return <li key={id}>{name}<button onClick={() =>{RemoveBook(id)}}>Remove</button> </li>
       })}
       
    </div>
  )
}

export default Index
