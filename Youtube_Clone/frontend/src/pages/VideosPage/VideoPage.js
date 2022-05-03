import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const VideoPage = (props) => {
  const [user, token] = useAuth();
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        let response = await axios.get(
          "https://www.googleapis.com/youtube/v3/search?q=cats&key=AIzaSyBoNpzKq9ePvOhN8XLIrvCsqcUZt1sSj5c&part=snippet&maxLength=5",
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        setVideos(response.data);
        console.log(videos);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchVideos();
  }, [token]);

  return (
    <div>
      {videos &&
        videos.map((video) => {
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
