import React from 'react'
import Home from './components/Home'
import Courses from './components/Courses'
import{ Routes,Route} from 'react-router-dom'
import Login from './components/Login'

const App = () => {
  return (
    <>
     {/* <Home/>
     <Courses/> */}
     <Routes>
      <Route path = "/" element={<Home/>}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/login' element={<Login/>}/>
     </Routes>
    </>
  )
}

export default App
