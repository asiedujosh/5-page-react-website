import React from 'react'
import { link, NavLink } from 'react-router-dom'


const Navbar = () =>{
  return(
    <nav className = "nav-wrapper black">
    <div className = "container">
    <a className = "brand-logo">5-Star-Page</a>
    <ul className = "right">
    <li><NavLink to = "/">Home</NavLink></li>
    <li><NavLink to = "/about">About</NavLink></li>
    <li><NavLink to = "/contact">Contact</NavLink></li>
    <li><NavLink to = "/blog">Blog</NavLink></li>
    <li><NavLink to = "/store">Store</NavLink></li>
    </ul>
    </div>
    </nav>
  )
}

export default Navbar
