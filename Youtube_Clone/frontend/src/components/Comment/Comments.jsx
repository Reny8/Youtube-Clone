import React from "react";
import DisplayReplies from "../DisplayReplies/DisplayReplies";

const Comments = (props) => {

  return (
    <div>
      <div>
        {props.comments.map((el) => {
          if (el.video_id === props.videoId) {
            return (
              <div key={el.id}>
                <h1>Comments</h1>
                <h4>{el.text}</h4>{" "}
                <button>Like {el.likes}</button>
                <button>Dislike {el.dislikes}</button>
                <div>
                  <h1>Replies</h1>
                </div>
                {/* <div>
                  <CommentForm />
                </div> */}
                <div>
                  <DisplayReplies commentId={el.id} />
                </div>
              </div>
            );
          }
        })}
      </div>
      <div></div>
    </div>
  );
};

export default Comments;
