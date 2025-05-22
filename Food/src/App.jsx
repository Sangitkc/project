import React from 'react'
import Main from './Components/Main'
import {Route,Routes} from 'react-router-dom'
import Mealcrdinfo from './Components/Mealcardinfo'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/:id' element={<Mealcrdinfo/>}/>
      </Routes>
    </div>
  )
}

export default App
