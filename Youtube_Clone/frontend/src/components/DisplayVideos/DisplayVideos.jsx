import React,{useState} from "react";
import { Link } from "react-router-dom";
import "./DisplayVideos.css";

const DisplayVideos = (props) => {

  return (
    <div>
      {" "}
     
      <div >
        {props.videos.map((video, index) => {
          if (video.snippet) {
            return (
              <span key={index * 5}>
                <div className="card mb-3">
                  <Link to={`/player/${video.id.videoId}`} style={{color: "darkred"}}>
                    <div className="row g-0">
                    <div className="col-md-4">
                      <input
                        type="image"
                        src={video.snippet.thumbnails.medium.url}
                        alt="Not Found"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h4 className="card-title">{video.snippet.title}</h4>
                        <p className="card-text">{video.snippet.description}</p>
                      </div>
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
