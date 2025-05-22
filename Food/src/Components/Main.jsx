import React from 'react'
import { useState } from 'react'
import Mealcard from './Mealcard'

const Main = () => {
   const [data,setdata] = useState()
   const [search,setsearch]=useState()

   const searchval=(e)=>{
      setsearch(e.target.value)
   }

   const myapp=async()=>{
      try {
         const dt=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
         const res=await dt.json()
         setdata(res.meals)
      } catch (error) {
         console.error(error)
      }
   }
  return (
    <div>
      <div className="head">
        <div className="left">
          <h2>RECIPE APP</h2>
        </div>
        <div className="right">
          <input
            type="text"
            name="nam"
            placeholder="Search for  recipes..."
           onChange={searchval}
          />
          <button onClick={myapp}>Search</button>
          
        </div>
      </div>
      <div className="body">
        <h1>Search your favorite recipes</h1>
      </div>
     <Mealcard data={data}/>
    </div>
  )
}

export default Main
