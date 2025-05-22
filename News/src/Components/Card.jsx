import React from 'react'
import './Card.css'

const Card = ({data}) => {

  return (
    <div className='cardcontainer'>
    {data.map((item,index)=>{
      if(!item.urlToImage){
        return null
      }else{
        return(
          <div className="cardcontent">
        <img src={item.urlToImage} />
          <a className='title' onClick={()=>{window.open(item.url)}}>{item.title}.</a>
          <p>{item.description}</p>
          <button onClick={()=>{window.open(item.url)}}>Read More</button>
        </div>
        )
      }
    }
    )}
    </div>
  )
}

export default Card
