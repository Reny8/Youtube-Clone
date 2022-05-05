import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DisplayVideos from "../DisplayVideos/DisplayVideos";
import Comments from "../Comment/Comments";
import axios from "axios";
import { KEY } from "../../localKey";

const VideoPlayer = (props) => {
  const { videoId } = useParams();
  const [comments, setComments] = useState([]);
  const [related, setRelated] = useState([]);
  

  useEffect(() => {
    getComments()
  },[]);


  // do axios call here for comments
  const getComments = async () =>{
    try {
      let response = await axios.get("http://127.0.0.1:8000/api/comments/");
      setComments(response.data);
      await GetRelatedVideos()
    } catch (error) {
      console.log(error.message);
    }
  }
  const GetRelatedVideos = async () =>{
    try {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&part=snippet&type=video&key=${KEY}`
      );
      setRelated(response.data.items);
    } catch (error) {
      console.log(error.message);
    }
  }

  

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
      <div>
        <Comments comments={comments} videoId={videoId} />
      </div>
      <div>
        {" "}
      <DisplayVideos videos= {related}/>
      </div>

      <div>
      </div>
    </div>
  );
};

export default VideoPlayer;

        