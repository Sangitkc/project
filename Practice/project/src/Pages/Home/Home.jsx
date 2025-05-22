import React, { useState } from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'

const Home = ({sidebar,category,setCategory}) => {

  return (
   <>
 <div className="flex">
 <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}/>
  
  <Feed category={category} setCategory={setCategory}/>
 </div>

   </>
  )
}

export default Home