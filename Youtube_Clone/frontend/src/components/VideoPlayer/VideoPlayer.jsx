import React from "react";
// import Comment from "../Comment/Comment";



const VideoPlayer = (props) => {
  return (
    <div>
      <iframe
        id="ytplayer"
        type="text/html"
        title="myVideo"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${props.id}?autoplay=1&origin=http://example.com`}
        frameBorder="0"
      ></iframe>
      {/* <Comment/> */}
      </div>
  );


};

export default VideoPlayer;
