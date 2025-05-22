import React, { useEffect } from 'react'
import search from '../assets/search black.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Navbar = () => {



  useEffect(()=>{
    const handlescroll=()=>{
      const navbar=document.querySelector('.navbar')
      if(window.scrollY>0){
        navbar.classList.add('scrolled')
      }else{
        navbar.classList.remove('scrolled')
      }
    }
    window.addEventListener('scroll',handlescroll)

    return()=>{
      window.removeEventListener('scroll',handlescroll)
    }
  },[])
  return (
    <>
    <div className='navbar'>
      <div className="nav-left">
        <h2>Book Store</h2>
      </div>
      <div className="nav-right">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/courses">Course</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <input type="text" placeholder='Search' />
        <button className='search'>Search</button>
        <button className='mode'>mode</button>
       <Link to='/login'> <button className='login'>Login</button></Link>
      </div>
    </div>
   
    </>
   
  )
}

export default Navbar
