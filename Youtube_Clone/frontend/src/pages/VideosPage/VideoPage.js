import axios from "axios";
import React, { useState, useEffect } from "react";
import DisplayVideos from "../../components/DisplayVideos/DisplayVideos";
import { KEY } from "../../localKey";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import { Route, Routes } from "react-router-dom";
// import { Link } from "react-router-dom";
const VideoPage = (props) => {
  const [videos, setVideos] = useState([]);
  const [id, setId] = useState("vrAMRxBB5KI");
  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?q=cats&type=video&key=${KEY}&part=snippet&maxLength=5`
      );
      setVideos(response.data.items);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
     <div>
      <DisplayVideos setId={setId}videos={videos} />
      <Routes>
      <Route path="/player" element={<VideoPlayer id = {id}/>} />
    </Routes>
    </div>
  );
};

export default VideoPage;
