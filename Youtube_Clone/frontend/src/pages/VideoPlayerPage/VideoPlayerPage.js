import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import id from '../../components/DisplayVideos/DisplayVideos'
import React  from "react";
const VideoPlayerPage = () => {
  return (
    <Routes>
      <Route path="player" element={<VideoPlayer id = {id}/>} />
    </Routes>
  );
};

export default VideoPlayerPage;
