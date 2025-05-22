import React from "react";
import "./Home.css";
import Navbar from "../../components/Navabar/Navbar";
import hero_title from "../../assets/hero_title.jpg";
import header from "../../assets/header.png";
import info from "../../assets/info-button.png";
import play from "../../assets/play-button.png";
import Titlecard from "../../components/Titlecard/Titlecard";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <div className="home">
        <Navbar />
      </div>
      <div className="hero">
        <img src={header} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <div className="hero-btn">
            <button className="btn">
              <img src={play} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info} alt="" />
              More info
            </button>
          </div>
          
       <div className="more-cards">
       <Titlecard />
       <Titlecard title={"Blockbuster Movies"} category={"top_rated"}/>
       <Titlecard title={"Only on Netflix"} category={"popular"}/>
       <Titlecard title={"Upcoming"} category={"upcoming"}/>
       <Titlecard title={"Top Pics for you"} category={"now_playing"}/>
       </div>
       <Footer/>
        </div>
      </div>
      </div>
   
  );
};

export default Home;
