import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from '../../project/src/Pages/Home/Home'
import { Route,Routes, useParams } from 'react-router-dom'
import Video from './Pages/Video/Video'
import PlayVideo from './Components/PlayVideo/PlayVideo'

const App = () => {
  const[sidebar,setSidebar]=useState(false)
  const[button,setbutton]=useState(false)
  
  const[category,setCategory]=useState(0)

  const togglefunction=()=>{
    setSidebar(!sidebar)
  }
  return (
    <>
    <Navbar togglefunction={togglefunction} setbutton={setbutton}/>
    <Routes>
    <Route path='/' element={<Home sidebar={sidebar} category={category} setCategory={setCategory}/>}/>
      <Route path='/video/:categoryId/:videoId' element={<PlayVideo/>}/>
      
    </Routes>
    </>
  )
}

export default App