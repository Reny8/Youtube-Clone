import React, { useState } from "react";
import { Link } from "react-router-dom";
const DisplayVideos = (props) => {
  const handleClick = (event, id, title, description) => {
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
                      video.snippet.title,
                      video.snippet.description
                    )
                  }
                  src={video.snippet.thumbnails.medium.url}
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

// {/* <Link
// to="/player"
// state={video.id.videoId}>
// <ul key={index}>
//   {" "}
//   <li>
//     <img
//       scr={video.snippet.thumbnails.default.url}
//       alt="Not Found"
//     />
//   </li>
//   <li>
//     <h2>{video.snippet.title}</h2>
//   </li>
//   <li>
//     <p>{video.snippet.description}</p>
//   </li>
// </ul>{" "}
// </Link>
// </div>
// );
// })} */}
