import React, { useState } from 'react'

const App = () => {
  const [search,setSearch]=useState('')
  const[submitted,setSubmitted]=useState([])
  const handle=(e)=>{
    setSearch(e.target.value)
  }

  const show=()=>{
 setSubmitted([...submitted,search])
 setSearch('')
  }

  const itemRemove=(item)=>{
    setSubmitted(submitted.filter(elememt=>elememt!==item))
  }
  return (
   <>
   <div className="todo">
       <h1>To Do App</h1>
    <div className="mid">
      <input type="text" name="" value={search} id="" placeholder='Enter the task here' onChange={handle}/>
   <button onClick={show}>Submit</button>
    </div>
  {submitted.map((elemetn,index)=>{
   return(
    <div className='im' key={index}>
      <div className="text"> <p>{elemetn}</p></div>
   <div className="btn">
      <button onClick={()=>{itemRemove(elemetn)}}>Remove</button>
   </div>
    </div>
    
   )
  })}
   </div>
   </>
  )
}

export default App