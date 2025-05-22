import React, { useEffect, useState } from 'react'
import './Player.css'
import backarrow from '../../assets/backarrow.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {
  
  const {id}=useParams();
  const navigate = useNavigate();

const [apiData,setsApiData] = useState({
  name:'',
  key:'',
  published_at:'',
  typeof:''
})

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZWE5OTY1M2Q3MTY5YjRjMDU0OTk1Y2ZhOWVkODJjNyIsIm5iZiI6MTczNTcxNzA5NC4zODUsInN1YiI6IjY3NzRmMGU2M2ZjNzZlYTU4ODkyYmNmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CagG0PZLQVSFHNTONXSQyiW7OCqm3Ia6nnFAZ6O2dRw'
    }
  };
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setsApiData(res.results[0]))
    .catch(err => console.error(err));
  },[])

  return (
    <div className='player'>
      <img src={backarrow} alt="" onClick={()=>{navigate(-2)}}/>
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder={0} allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
