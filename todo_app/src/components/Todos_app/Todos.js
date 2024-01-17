import React from 'react'
import Todo from './Todo';
import style from './assets/todos.module.css'

const Todos = (props) => {
    const {todos} = props;
    
  return (
    <section className={style.todos}>
        {
            todos.map((todo)=> (<Todo key={todo.id} todo={todo.todo} id={todo.id} onRemoveItem={props.onRemoveTodo}/>))
        }
    </section>
  )
}

export default Todos;
