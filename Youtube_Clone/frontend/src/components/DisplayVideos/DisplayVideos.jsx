import React from "react";
import { Link } from "react-router-dom";

const DisplayVideos = (props) => {
  return (
    <div>
      {props.videos.map((video,index) => {
        return (
          <div key={index}>
            <div>
              <img
                scr={video.snippet.thumbnails.default}
                alt="No Image Found"
              />
            </div>
            <div>
              <h2>{video.snippet.title}</h2>
            </div>
            <div>
              <p>{video.snippet.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayVideos;
