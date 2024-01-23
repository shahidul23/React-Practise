import {BrowserRouter, Route, Routes} from 'react-router-dom'
import React from "react";
import Home from './components/Home';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Error from './components/Errors/Error';
import Navbar from './components/Navbar/Navbar';
import Blog from './components/Blog';
import User from './components/User';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes > 
        
        <Route path='/' element={<Home />}/>
        <Route path='/blogs' element={<Blogs />}/>
        <Route path='/contact' element ={<Contact />}/>
        <Route path='/blogs/:title' element={<Blog/>}/>
        {/* <Route path='/user/:id' element={<User />}/>   */}
        <Route path='/user' element={<User />}/>
        <Route path='*' element={<Error />}/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
