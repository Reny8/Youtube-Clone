import React from "react";
import { Link } from "react-router-dom";
const DisplayVideos = (props) => {
  const handleClick = (event, id, title) => {
    event.preventDefault();
    props.setId(id);
  };

  return (
    <div>
      <Link to="/player">
        <div>
          {props.videos.map((video) => (
            <span>
              <div>
                <input
                  type="image"
                  onClick={(event) =>
                    handleClick(
                      event,
                      video.id.videoId,
                      video.snippet.title
                    )
                  }
                  src={video.snippet.thumbnails.medium.url} alt='Not Found'
                />
                <div>
                  <h2>{video.snippet.title}</h2>
                </div>
                <div>
                  <p>{video.snippet.description}</p>
                </div>
              </div>
            </span>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default DisplayVideos;

