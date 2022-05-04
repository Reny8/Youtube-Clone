import React from "react";
import { useLocation } from 'react-router-dom';
const VideoPlayer = (props) => {
  // const location = useLocation()
  // const {id} = location.state
  return (
    <iframe
      id="ytplayer"
      type="text/html"
      width="640"
      height="360"
      src={`https://www.youtube.com/embed/${props.id}?autoplay=1&origin=http://example.com`}
      frameborder="0"
    ></iframe>
  );
};

export default VideoPlayer;
