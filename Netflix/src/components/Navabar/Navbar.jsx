import React, { useEffect, useRef } from 'react'
import logo from '../../assets/logo.jpg'
import bell from '../../assets/bell.png'
import dropdown from '../../assets/dropdown.png'
import search from '../../assets/search.png'
import profile from '../../assets/profile.png'
import './Navbar.css'


const Navbar = () => {

  const navRef = useRef();

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY>=80){
        navRef.current.classList.add('nav-dark')
      }else{
        navRef.current.classList.remove('nav-dark')
      }
    })
  },[])

  return (
    <div ref={navRef} className='navbar'>
            <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search} alt="" className='icons' />
        <p>Children</p>
        <img src={bell} alt="" className='icons'/>
        <div className="navbar-profile">
          <img src={profile} alt="" className='profile'/>
          <img src={dropdown} alt="" className='profile'/>
          <div className="dropdown">
            <p>Sign Out of Netflix</p>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar
