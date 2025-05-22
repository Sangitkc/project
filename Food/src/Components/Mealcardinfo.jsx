import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Mealcardinfo = () => {
  const {id}= useParams()
  const[info,setinfo] =useState(null)

  const getinfo=async()=>{
    try {
      const get = await fetch (`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      const gets=await get.json()
      console.log(gets.meals[0])
      setinfo(gets.meals[0])
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(()=>{
    if(id){
      getinfo()
    }
  },[id])
  return (
   <div className='foods'>
     {
      !info? "":
      
      <div className='food'>
        
        
      <img src={info.strMealThumb} alt="" />
      <div>
      <button>{info.strMeal}</button>
          <h3>Instruction's</h3>
          <p className='detail'>{info.strInstructions}</p>
        
      </div>
    </div>
    }
   </div>
  
  )
}

export default Mealcardinfo
