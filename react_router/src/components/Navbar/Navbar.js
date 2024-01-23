import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'

const Navbar = () => {
  return (
    <nav>
       <NavLink className='nav-link' to="/">Home</NavLink>
       <NavLink className='nav-link' to="/contact">Contact</NavLink>
       <NavLink className='nav-link' to="/blogs">Blogs</NavLink>
    </nav>
  )
}

export default Navbar;
