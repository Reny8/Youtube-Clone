import React, { useState } from "react";
import { Link } from "react-router-dom";
const DisplayVideos = (props) => {
  function handleClick(data) {
    props.setId(data);
  }

  return (
    <div>
      {props.videos.map((video, index) => {
        return (
          <Link
            to="player"
            onClick={() => {
              handleClick(video.id.videoId);
            }}
          >
            <ul key={index}>
              {" "}
              <li>
                <img
                  scr={video.snippet.thumbnails.default.url}
                  alt="Not Found"
                />
              </li>
              <li>
                <h2>{video.snippet.title}</h2>
              </li>
              <li>
                <p>{video.snippet.description}</p>
              </li>
            </ul>{" "}
          </Link>
        );
      })}
    </div>
  );
};

export default DisplayVideos;
