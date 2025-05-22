import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import search from "../../assets/search.png";
import notification from "../../assets/notification.png";
import tom from "../../assets/tom.png";
import { Link } from "react-router-dom";
import { API_KEY } from "../../data";
import moment from "moment";

const Navbar = ({ togglefunction, setbutton }) => {
  const [search, Setsearch] = useState("");
  const [video, setVideos] = useState([]);

  const fun = async () => {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&maxResults=100&key=${API_KEY}`;
    const dataa = await fetch(url);
    const ress = await dataa.json();
    setVideos(ress.items);
  };

  const storeValue = (e) => {
    Setsearch(e.target.value);
  };

  return (
    <>
      <div className="navbar">
        <div className="left">
          <img src={menu} onClick={togglefunction} className="menu" alt="" />
          <Link to="/">
            <img src={logo} className="logo" alt="" />
          </Link>
        </div>
        <div className="mid">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search"
            onChange={storeValue}
          />
          <button onClick={fun}>Search</button>
        </div>
        <div className="right link">
          <img src={notification} alt="" />
          <img src={tom} className="tom" alt="" />
        </div>
      </div>
      <div className="search-results">
  {video &&
    video.map((videos) => {
      return (
        <div key={videos.id.videoId} className="jjj">
          <div className="mnn">
            <div className="mnn-im">
              {videos.id.kind === "youtube#channel" ? (
                <a
                  href={`https://www.youtube.com/channel/${videos.snippet.channelId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={videos.snippet.thumbnails.default.url}
                    alt=""
                    className="channel-logo"
                  />
                </a>
              ) : (
                <a
                  href={`https://www.youtube.com/watch?v=${videos.id.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={videos.snippet.thumbnails.medium.url}
                    alt=""
                    className="video-thumbnail"
                  />
                </a>
              )}
            </div>
            <div className="mnn-tit">
              <a
                href={`https://www.youtube.com/watch?v=${videos.id.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>{videos.snippet.title}</h3>
              </a>
              <p>{moment(videos.snippet.publishedAt).fromNow()}</p>
              <p>{videos.snippet.description}</p>
            </div>
          </div>
        </div>
      );
    })}
</div>
    </>
  );
};

export default Navbar;
