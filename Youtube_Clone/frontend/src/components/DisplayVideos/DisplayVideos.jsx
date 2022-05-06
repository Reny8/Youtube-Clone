import React from "react";
import { Link } from "react-router-dom";


const DisplayVideos = (props) => {

  return (
    <div>
        <div>
          {props.videos.map((video, index) => {
            if (video.snippet) {
              return (
               <span key={index * 5}>
              <div>
              <Link to={`/player/${video.id.videoId}`}>
                <input
                  type="image"
                  src={video.snippet.thumbnails.medium.url} alt='Not Found'
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
              )}
          else return (
            <span key={index + 1 }>
              <div>
                <h6>Loading ...</h6>
              </div>
            </span>
            )
          }
           
          )}
        </div>
    </div>
  );
};

export default DisplayVideos;

