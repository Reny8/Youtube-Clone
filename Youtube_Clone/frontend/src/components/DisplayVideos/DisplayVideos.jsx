import React,{useState} from "react";
import { Link } from "react-router-dom";
import "./DisplayVideos.css";

const DisplayVideos = (props) => {

  return (
    <div>
      {" "}
     
      <div className="flex-container">
        {props.videos.map((video, index) => {
          if (video.snippet) {
            return (
              <span key={index * 5}>
                <div>
                  <Link to={`/player/${video.id.videoId}`}>
                    <div className="box">
                      <input
                        type="image"
                        src={video.snippet.thumbnails.medium.url}
                        alt="Not Found"
                      />
                      <div className="words">
                        <h4>{video.snippet.title}</h4>
                        <p>{video.snippet.description}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </span>
            );
          } else
            return (
              <span key={index + 1}>
                <div>
                  <h6>Loading ...</h6>
                </div>
              </span>
            );
        })}
      </div>
    </div>
  );
};

export default DisplayVideos;
