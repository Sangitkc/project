import React from 'react'
import './Navbar.css'
import search from'../assets/search black.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      
        <div className="left">
        <li><Link to="/">Home</Link></li>
         <li><Link to="/about">About</Link></li>
         <li><Link to="/models">Models</Link></li>
        </div>
        <div className="centre">
          <input type="text" placeholder='Search the cars'  />
          <img src={search} alt="" />
        </div>
        <div className="right">
        <li><Link to="/contact">Contact Us</Link></li>
         <li><Link to="/dealirship">Dealriship</Link></li>
         <li><Link to="/services">Services</Link></li>
        </div>
      
    </div>
  )
}

export default Navbar
