import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import Video from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import Recommend from '../Recommend/Recommend'
import { useParams } from 'react-router-dom'
import { API_KEY, valueConverter } from '../../data'
import moment from 'moment'

const PlayVideo = () => {
  const[channel,setChannel]=useState(null)
  const {categoryId,videoId}=useParams()
  const[apiData,setApiData]=useState(null)
  const[commentData,setCommentDatas]=useState()

  const fetchVideodata=async()=>{
    const videoUrl=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
    const data=await fetch(videoUrl)
    const res=await data.json()
    setApiData(res.items[0])
  }

  // Fetching Channel data

  const channesl=async()=>{
    const url=`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
    const datas=await fetch(url)
    const ress=await datas.json()
    setChannel(ress.items[0])

    //Fetching Comment Data

   const CommentData=`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY} `
   const data=await fetch(CommentData)
   const res=await data.json()
   setCommentDatas(res.items)
  }

  

  useEffect(()=>{
    fetchVideodata()
  },[videoId])

  useEffect(()=>{
    channesl()
  },[apiData])
  return (
    <>
    <div className="playvideo">
      <div className="video">
       <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
         <h2>{apiData?apiData.snippet.title:"The title is not avaible"}</h2>
        <div className="main">
        <div className="video-info">
            <img src={channel? channel.snippet.thumbnails.default.url:''} className='jack' alt="" />
          
         <div>
         <h4>{apiData?apiData.snippet.channelTitle:'no name'}</h4>
         <p>{channel?valueConverter(channel.statistics.subscriberCount):''}    subscriber</p>
         </div>
          
            <button>Subscribe</button>
         </div>
       <div className='icon'>
        <img src={like} alt="" /> <p>{apiData?valueConverter(apiData.statistics.likeCount):'000'}</p>
       <img src={dislike} alt="" />
       <img src={share} alt="" />
       <img src={save} alt="" />
       </div>
        </div>
        <div className="desc">
        <div className="description">
        <p>{apiData?valueConverter(apiData.statistics.viewCount):'no views'} views<span>{apiData?moment(apiData.snippet.publishedAt).fromNow():''}</span></p>
        <div>{apiData?apiData.snippet.description.slice(0,400):''}</div>
        </div>
      </div>
      <div className="comments">
        <h3>{apiData?valueConverter(apiData.statistics.commentCount):'no comments'} Comments</h3>
      </div>
     <div className="con">
      <div className="c">
        <img src={jack} alt="" />
      </div>
      <div className="o">
        <p>Add a comment..</p>
        <hr />
      </div>
     </div>
  {commentData && commentData.map((item, index) => (
  <div className="comments-section" key={index}>
    <div className="comment">
      <img src={item?item.snippet.topLevelComment.snippet.authorProfileImageUrl:'no img'} alt="" />
      <p>{item.snippet.topLevelComment.snippet.authorDisplayName}<span> 2yrs ago</span></p>
    </div>
    <div className="comm">
      <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
    </div>
    <div className="lik">
      <img src={like} alt="" />
      <p>{valueConverter(item.snippet.topLevelComment.snippet.likeCount)}</p>
      <img src={dislike} alt="" />
    </div>
  </div>
))}

      </div>
     <div className="recommend">
      <Recommend categoryId={categoryId}/>
     </div>
    </div>
    </>
  )
}

export default PlayVideo