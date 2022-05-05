import React from "react";
import { useEffect } from "react";
import { useParams } from 'react-router-dom'
import DisplayVideos from "../DisplayVideos/DIsplayVideos";
// import Comment from "../Comment/Comment";



const VideoPlayer = (props) => {
const {videoId} = useParams()

useEffect(() => {
  console.log(videoId)
},[])
  // do axios call here for comments

// do axios call for related videos 
  return (
    <div>
      <iframe
        id="ytplayer"
        type="text/html"
        title="myVideo"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&origin=http://example.com`}
        frameBorder="0"
      ></iframe>
      {/* <Comment/> */}
      {/* <DisplayVideos /> */}
      </div>
  );


};

export default VideoPlayer;
