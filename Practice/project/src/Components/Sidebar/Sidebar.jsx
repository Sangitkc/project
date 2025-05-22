import React, { useState } from 'react'
import './Sidebar.css'
import home from '../../assets/home.png'
import game_icon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";
import news from '../../assets/news.png'
import shorts from '../../assets/shorts.png'
import subscriprion from '../../assets/subscriprion.png'
import trending from '../../assets/trending.png'
import { API_KEY } from '../../data';

const Sidebar = ({sidebar,category,setCategory}) => {
   const handleCategoryChange = (newCategory) => {
      if (newCategory === 4) {
        alert("Sorry, the Shorts feature is not available right now.");
        return;
      }else if(newCategory===3){
         alert("Sorry, the Subscription feature is not available right now.");
        return;
      }
      else if(newCategory===0){
         alert("The trending videos are already shown in the home page")
      }
      setCategory(newCategory);
    };
  
  
   
  return (
    <>
    <div className={`sidebar ${sidebar?'value':'small-sidebar'}`}>
      <div className="top">
       <div className={`home ${category===0?'active':''}`} onClick={()=>{setCategory(0)}}>
       <img src={home} alt="" />
       <p>Home</p>
       </div>
       <div className={`shorts ${category===4?'active':''}`} onClick={()=>{handleCategoryChange(4)}}>
       <img src={shorts} alt="" />
       <p>Shorts</p>
       </div>
       <div className={`subscription ${category===3?'active':''}`} onClick={()=>{handleCategoryChange(3)}}>
         <img src={subscriprion} alt="" />
         <p>Subscription</p>
       </div>
      </div>
      <hr />
      <div className="middle">
         <h3>Subscriptions</h3>
         <div className="jack pic">
            <img src={jack} alt="" />
            <p>Jack</p>
         </div>
         <div className="tom pic">
            <img src={tom} alt="" />
            <p>Tom</p>
         </div>
         <div className="cameron pic">
            <img src={cameron} alt="" />
            <p>Nisha</p>
         </div>
         <div className="megan pic">
            <img src={megan} alt="" />
            <p>Sita</p>
         </div>
      </div>
      <hr />
      <div className="last">
         <h3>Explore</h3>
         <div className={`trending ${category===0?'active':''}`} onClick={()=>{handleCategoryChange(0)}}>
            <img src={trending} alt="" />
            <p>Trending</p>
         </div>
         <div className={`music ${category===10?'active':''}`} onClick={()=>{setCategory(10)}}>
            <img src={music} alt="" />
            <p>Music</p>
         </div>
         <div className={`gaming ${category===20?'active':''}`} onClick={()=>{setCategory(20)}}>
            <img src={game_icon} alt="" />
            <p>Gaming</p>
         </div>
         <div className={`sports ${category===17?'active':''}`} onClick={()=>{setCategory(17)}}>
            <img src={sports} alt="" />
            <p>Sports</p>
         </div>
      </div>
    </div>
    </>
  )
}

export default Sidebar