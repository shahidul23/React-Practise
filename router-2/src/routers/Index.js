import React,{useState} from 'react';
import { BrowserRouter,Route, Routes } from "react-router-dom";

//pages
import Home from '../components/Home';
import AddBlog from '../components/AddBlog';
import About from '../components/About';
import Error from '../components/Error/Error';
import Navbar from '../layout/Navbar';
import Protected from './Protected';

const Index = () => {
  const[isLoggeIn, setLoggin] = useState(false)  
  return (
    <BrowserRouter>
      <Navbar />
      {isLoggeIn ? <button onClick={()=>{setLoggin(!isLoggeIn)}}>Log Out</button> : <button onClick={()=>{setLoggin(!isLoggeIn)}}>Log In</button>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add-blog' element={<Protected isLoggeIn={isLoggeIn}>
            <AddBlog />
        </Protected>}/>
        <Route path='/about' element={<About/>}/>

        <Route path='/*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Index
