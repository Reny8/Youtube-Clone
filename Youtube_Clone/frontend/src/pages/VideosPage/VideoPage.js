import React from "react";


const VideoPage = (props) => {


  return (
    <div>
      {props.videos.map((video) => {
          <div>
            <div>
              <img scr={video.snippet.thumbnails.default.url} />
            </div>
            <div>
              <h2>{video.snippet.title}</h2>
            </div>
            <div>
              <p>{video.snippt.description}</p>
            </div>
          </div>;
        })}
    </div>
  );
};

export default VideoPage;
