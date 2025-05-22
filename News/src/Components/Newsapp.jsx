import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'

const Newsapp = () => {
  const [searchdata,setsearchdata]=useState('world')
  const[newsdata,setnewsdata]=useState(null)

  const search=(e)=>{
    setsearchdata(e.target.value)
  }
  const apiKey="354b49cde2a84e2598d6e9d561977ff7";

  const getdata=async ()=>{
    const response = await fetch(`https://newsapi.org/v2/everything?q=${searchdata}&apiKey=${apiKey}`)
    const data=await response.json()
    setnewsdata(data.articles)
  }

  useEffect(()=>{
    getdata()
  },[searchdata])

  const userInput=(e)=>{
  setsearchdata(e.target.value)
  
  }
  return (
    <div className='news'>
    <div className="navbar">
      <div className="trend">
        <h1>Trendy News</h1>
      </div>
      <div className="alltrend">
       <a href="">All News</a>
       <a href="">Trending</a>
      </div>
      <div className="searchbar">
        <input type="text"  valueplaceholder='Search the latest News' value={searchdata} onChange={search}/>
        <button onClick={getdata}> Search</button>
      </div>
    </div>
    <div className="head">
      <p>Stay Update with TrendyNews</p>
    </div>
    <div className="categoryBtn">
      <button onClick={userInput} value="sports">Sports</button>
      <button onClick={userInput} value="politics">Politics</button>
      <button onClick={userInput} value="entertainment">Entertainment</button>
      <button onClick={userInput} value="health">Health</button>
      <button onClick={userInput} value="fitness">Fitness</button>
    </div>
    <div>
    {newsdata? <Card data={newsdata}/> : null }
    </div>
    </div>
  )
}

export default Newsapp
