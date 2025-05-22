import React, { useEffect, useState } from 'react'
import './Playvideo.css'
import Video from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY, valueConverter } from '../../data'
import moment from 'moment'
import { useParams } from 'react-router-dom'

const Playvideo = () => {

   const{videoId}=useParams()
   const[apiData,setApiData]=useState(null)
   const[channelData,setchannelData]=useState(null)
   const[commentDatas,setCommentDatas]=useState([])

   const fetchVideoData=async ()=>{
      // Fetching Video Data
      const VideoDetailsUrl=` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
      const response=await fetch(VideoDetailsUrl)
      const apiData= await response.json()
      setApiData(apiData.items[0])
   }

const fetchOtherData=async()=>{
   //Fetching Channel DAta

   const channelDataUrl=`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY} `
   const response=await fetch(channelDataUrl)
   const channel=await response.json()
   setchannelData(channel.items[0])

   //Fetching Comment Data

   const CommentData=`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY} `
   const data=await fetch(CommentData)
   const res=await data.json()
   setCommentDatas(res.items)

}

   useEffect(()=>{
      fetchVideoData()
   },[videoId])

   useEffect(()=>{
      fetchOtherData()
   },[apiData])
  return (
    <>
    <div className="play-video">
      {/* <video src={Video} controls autoPlay muted></video> */}
      <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3>{apiData?apiData.snippet.title:"Title Here"}</h3>
      <div className="play-video-info">
      <p>
  {apiData ? 
    `${valueConverter(apiData.statistics.viewCount)} Views • ${moment(apiData.snippet.publishedAt).fromNow()}` : 
    "16k Views • Loading..."}
</p>
         <div>
            <span><img src={like} alt="" />{apiData?valueConverter(apiData.statistics.likeCount):122}</span>
            <span><img src={dislike} alt="" /></span>
            <span><img src={share} alt="" />Share</span>
            <span><img src={save} alt="" />Save</span>
          
         </div>
      </div>
      <hr />
      <div className="publisher">
         <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="" />
         <div>
            <p>{apiData?apiData.snippet.channelTitle:""}</p>
            <span>{channelData?valueConverter(channelData.statistics.subscriberCount):''}</span>
         </div>
         <button>Subscribe </button>
      </div>
      <div className="vid-description">
         <p>{apiData?apiData.snippet.description.slice(0,250):'Description here'}</p>
         <hr />
         <h4>{apiData?valueConverter(apiData.statistics.commentCount):102} Comments</h4>
         {commentDatas.map((item,index)=>{
            return(
               <div key={index} className="comments">
               <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
               <div>
                  <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>1 days ago</span></h3>
                  <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                  <div className="comment-action">
                     <img src={like} alt="" />
                     <span>{valueConverter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                     <img src={dislike} alt="" />
                  </div>
               </div>
            </div>
            )
         })}
       
        
      </div>
    </div>
    </>
  )
}

export default Playvideo