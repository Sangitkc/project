import React from 'react'
import './Navbar.css'
import Menu from './Menu'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="image">
        <Menu/>
      </div>
      <div className="home">
         <p>Home</p>
      </div>
      <div className="input">
         <input type="text" placeholder='Search the buses' />
         <button>Search</button>
      </div>
   <div className="right">
   <div className="ticket">
         <p>Ticket</p>
      </div>
      <div className="bus">
         <p>Bus</p>
      </div>
      <div className="login">
         <p>Login</p>
      </div>
   </div>
    </div>
  )
}

export default Navbar
