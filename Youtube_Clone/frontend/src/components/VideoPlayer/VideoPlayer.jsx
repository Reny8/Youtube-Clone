import React from "react";
const VideoPlayer = (props) => {
  return (
      <iframe
        id="ytplayer"
        type="text/html"
        title="myVideo"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${props.id}?autoplay=1&origin=http://example.com`}
        frameBorder="0"
      ></iframe>
  );
};

export default VideoPlayer;
