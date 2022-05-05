import React from "react";

const Comments = (props) => {


  return (
    <div>
      <div>
          {props.comments.map((el) => {
            if (el.video_id === props.videoId) {
              return (
                <div key={el.id}>
                  <h1>Comments</h1>
                  <h4>{el.text}</h4>
                  <div><button>Likes {el.likes}</button></div>
                  <div><button>Dislikes {el.dislikes}</button></div>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};

export default Comments;
