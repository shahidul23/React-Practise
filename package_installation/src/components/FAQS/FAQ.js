import React, { useState } from 'react';
import style from './faq.module.css';

const FAQ = ({title, desc}) => {

  const[toggle, setToggle] = useState(false)

  return (
    <article className={style.faq}>
        <div>
            <h4>{title}</h4>
            <button onClick={()=> setToggle(!toggle)}>{toggle ? "-" : "+"}</button>
        </div>
        <div>
            {toggle && <p>{desc}</p>}
            
        </div>
      
    </article>
  )
}

export default FAQ;
