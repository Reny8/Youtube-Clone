import React from "react";
const VideoPlayer = ({id}) => {
  return (
    <iframe
      id="ytplayer"
      type="text/html"
      width="640"
      height="360"
      src={`https://www.youtube.com/embed/${id}?autoplay=1&origin=http://example.com`}
      frameborder="0"
    ></iframe>
  );
};

export default VideoPlayer;
