import React, {useState,useEffect} from 'react';
import axios from 'axios'

const VideoPage = (props) => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
      fetchVideos();
    }, []);
  
    async function fetchVideos() {
      let response = await axios.get(
        "https://www.googleapis.com/youtube/v3/search?q=cats&key=AIzaSyBoNpzKq9ePvOhN8XLIrvCsqcUZt1sSj5c&part=snippet&maxLength=5"
      );
      setVideos(response.data);
      console.log(videos);
    }




    return ( 
        <div>
            {videos && videos.map((video)=>{
                <ul>
                    <li>
                        <img scr={video.snippet.thumbnails.default}/>
                    </li>
                    <li><h2>{video.snippet.title}</h2></li>
                    <li><p>{video.snippt.description}</p></li>
                    <li></li>
                </ul>
            })}
        </div>
     );
}
 
export default VideoPage;