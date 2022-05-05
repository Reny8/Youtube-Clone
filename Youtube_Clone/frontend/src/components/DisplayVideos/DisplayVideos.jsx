import React from "react";
import { Link } from "react-router-dom";


const DisplayVideos = (props) => {

  return (
    <div>
        <div>
          {props.videos.map((video, index) => (
            <span key={index + 1}>
              <div>
              <Link to={`/player/${video.id.videoId}`}>
                <input
                  type="image"
                  src={video.snippet.thumbnails.default.url} alt='Not Found'
                />
                
                <div>
                  <h2>{video.snippet.title}</h2>
                </div>
                <div>
                  <p>{video.snippet.description}</p>
                </div>
                </Link>
              </div>
            </span>
          ))}
        </div>
    </div>
  );
};

export default DisplayVideos;

