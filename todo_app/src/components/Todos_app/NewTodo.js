import React, { useState } from 'react';
import style from './assets/newtodo.module.css';

const NewTodo = (props) => {

    const[todo, setTodo] = useState({title:'',desc: ''});
    const{title, desc} = todo;
    const handleChange = (event) =>{
        const fieldName = event.target.name;
        setTodo((oldTodo) =>{
            return{...oldTodo,[fieldName]: event.target.value}
        })
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        props.onAddTodo(todo);
        setTodo({title:'',desc:''})
    }

  

  return <form className={style.form} onSubmit={handleSubmit}>
    <div className={style["form-field"]}>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' name='title' value={title} onChange={handleChange}/>
    </div>
    <div className={style["form-field"]}>
        <label htmlFor='desc'>Description</label>
        <textarea type='text' id='desc' name='desc' value={desc} onChange={handleChange}/>
    </div>
    <button type='submit'>Add Todo</button>
  </form>
}

export default NewTodo;
