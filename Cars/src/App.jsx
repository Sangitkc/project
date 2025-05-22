import React from 'react'
import Home from './Home/Home'
import Navbar from './Navbar/Navbar'
import Model from '../src/pages/Model'
import About from '../src/pages/About'
import Contact  from './pages/Contact'
import Dealriship from './pages/Dealrship'
import Services from './pages/Services'
import { Route,Router, Routes } from 'react-router-dom'

const App = () => {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/models' element={<Model/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/dealirship' element={<Dealriship/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
       
      </Routes>
     
    </div>
  )
}

export default App
