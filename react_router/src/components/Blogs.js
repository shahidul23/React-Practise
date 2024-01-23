import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {blogsData} from '../components/Data/Data';


const truncateString = (str, num) =>{
    if (str.length > num) {
        return str.slice(0, num ) + "...";
    }else{
        return str;
    }
}

const Blogs = () => {
  const navigate = useNavigate();
  const[ blogs ] =useState(blogsData)
   
  return (
    <div>
      <h2>Blogs page</h2>
      <section>
        {blogs.map((blog) =>{
            const {id, title,body} = blog;
            return <article key={id}>
                <h3>{title}</h3>
                <p>{truncateString(body, 100)}</p>
                <Link to={title} state={body}>Learn More</Link>
            </article>
        })}
      </section>
      <button onClick={() =>{
         navigate("/")
      }}>Go to Home page</button> 
    </div>
  )
}

export default Blogs
