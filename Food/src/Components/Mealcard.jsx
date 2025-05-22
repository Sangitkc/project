import React from 'react'
import { Link } from 'react-router-dom'
import Mealcardinfo from './Mealcardinfo'

const Mealcard = ({data}) => {
   console.log(data)


  return (
    <div className='meals'>
      {!Array.isArray(data) ? "" : data.map((curr)=>{
         return(
           <div className="recipe">
             <div key={curr.idMeal}>
               <img src={curr.strMealThumb} alt="" />
               <p className='pa'>{curr.strMeal}</p>
               <p><span>{curr.strArea} </span>Dish</p>
               <p>Belongs to <span>{curr.strCategory}</span> Category</p>
               <Link to={`${curr.idMeal}`}>  <button > View Recipe</button></Link>
             
               </div>
           </div>
           
         )
      })}
      <Mealcardinfo data={data}/>
    </div>
  )
}

export default Mealcard
