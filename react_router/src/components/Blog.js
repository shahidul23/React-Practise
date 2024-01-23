import React from 'react'
import { useParams, useLocation } from 'react-router-dom'


const Blog = () => {
  const { title } = useParams(); 
  const location = useLocation();

  //const [ bodyData  ] = useState("");

//   useEffect(()=>{
//     const blogData = blogsData.filter((blog) =>{
//         return blog.title === title;
//     });
//     setBodyData(blogData[0].body)
//   },[])
  return (
    <div>
      <h1>{title}</h1>
      <p>{location.state.slice(0, 100)}</p>
      <p>{location.state.slice(101, 500)}</p>
      <p>{location.state.slice(501, 1500)}</p>
    </div>
  )
}

export default Blog
