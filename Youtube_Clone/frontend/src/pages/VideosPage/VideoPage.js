import axios from "axios";
import React, { useState, useEffect } from "react";
import DisplayVideos from "../../components/DisplayVideos/DisplayVideos";
import { KEY } from "../../localKey";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import { Route, Routes } from "react-router-dom";
// import { Link } from "react-router-dom";
const VideoPage = (props) => {
  const [videos, setVideos] = useState([]);
  
  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?q=cats&type=video&key=${KEY}&part=snippet&maxResults=6`
      );
      setVideos(response.data.items);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
     <div>
      <DisplayVideos  videos={videos} />
      <Routes>
      <Route exact path="/player" component={<VideoPlayer />} />
    </Routes>
    </div>
  );
};

export default VideoPage;
