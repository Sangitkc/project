import React, { useState } from 'react'
import pexels from '../src/assets/pexels.jpg'

const App = () => {
  const [singstate,setsignstate]=useState("Login In")

  return (
    <div className='login'>
      <div className="mid">
        <h2>{singstate}</h2>
        <div className="name">
          {singstate=== "Sign Up"?(
            <>
          <label htmlFor="">Enter your name</label>
          <input type="text" id='name' />
            </>
          ):null}
        
          </div>
       <div className="email">
        <label htmlFor="">Enter your Email</label>
         <input type="email"  /></div>
        <div className="password">
          <label htmlFor="">Enter your password</label>
          <input type="password"  /></div>
        <div className="button">
        <button type='submit' onClick={()=>{
          alert("The form is submitted")
        }}>{singstate}</button>
        </div>
        <div className="bottom">
          {singstate==="Login In"?
           <div className="to">
           <p>Don't have an account?</p><span onClick={()=>{
            setsignstate("Sign Up")
           }}>Sign Up </span>
           </div>
           :
           <div className="bot">
          <p>Already have account?</p><span onClick={()=>{
            setsignstate("Login In")
          }}>Login In </span>
          </div>
          }
         
          
        </div>
      </div>
    </div>
  )
}

export default App
