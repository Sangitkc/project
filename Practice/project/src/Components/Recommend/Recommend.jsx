import React, { useEffect, useState } from "react";
import "./Recommend.css";
import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";
import { API_KEY } from "../../data";
import { valueConverter } from "../../data";
import moment from "moment";
import { Link } from "react-router-dom";

const Recommend = ({ categoryId }) => {

  const[data,setData]=useState()
  const fetchData = async () => {
    const videoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
    const data = await fetch(videoUrl);
    const res = await data.json();
    setData(res.items);
  };

  useEffect(()=>{
    fetchData()
  },[categoryId])
  return (
    <>
      <div className="recommend" >
        {data && data.map((item,index)=>{
         return(
           <Link to={`/video/${item.snippet.categoryId}/${item.id}`} className="videos" key={index}>
          <img src={item.snippet.thumbnails.high.url} alt="" />
          <div className="tit">
            <h3>{item.snippet.title}</h3>
            <p>{item.snippet.channelTitle}</p>
           <p>{valueConverter(item.statistics.viewCount)} • <span>{moment(item.snippet.publishedAt).fromNow()}</span></p>
          </div>
        </Link>
         )
        })}
   
      </div>
    </>
  );
};

export default Recommend;
