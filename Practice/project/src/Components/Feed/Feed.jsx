import React, { useEffect, useState } from 'react'
import './Feed.css'
import Video from '../../Pages/Video/Video'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import { Link } from 'react-router-dom'
import { API_KEY, valueConverter } from '../../data'
import moment from 'moment'
import jack from "../../assets/jack.png";

const Feed = ({category}) => {

   const[data,setData]=useState([])
    const[channel,setChannel]=useState(null)

   const fetchData=async ()=>{
      const videoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
      const data=await fetch(videoUrl)
      const res=await data.json()
      setData(res.items)
      
   }

   useEffect(()=>{
      fetchData()
   },[category])

   //For img of subacriber
   
     const [channelMap, setChannelMap] = useState({});

const fetchChannels = async () => {

    const ids = [...new Set(data.map(item => item.snippet.channelId))]; // Get unique channel IDs

    const responses = await Promise.all(ids.map(async (id) => {
        const res = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${id}&key=${API_KEY}`);
        return res.json();
    }));

    const newMap = responses.reduce((acc, res) => {
        const channel = res.items[0]; // Get the first channel
        if (channel) acc[channel.id] = channel.snippet.thumbnails.default.url;  // Stores the images
        return acc;
    }, {});

    setChannelMap(newMap); // Save all channel images
};

useEffect(() => {
    fetchChannels(); // Run when data changes
}, [data]);


  return (
   <>
  <div className="feed-container">
  {data.map((item,index)=>{
   return(
      <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="card">
      <img src={item.snippet.thumbnails.medium.url} alt="" />
      <div className="mn">
         <div className="im">
     
       <img src={channelMap[item.snippet.channelId] } className='jack' alt="Channel Logo" />

      </div>
     <div className="in">
       <h2>{item.snippet.title}</h2>
      <h3>{item.snippet.channelTitle}</h3>
      <p>{valueConverter(item.statistics.viewCount)} • <span>{moment(item.snippet.publishedAt).fromNow()}</span></p>
     </div>
      </div>
   </Link>
   )
  })}

  </div>
   </>
  )
}

export default Feed