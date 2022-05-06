import React from "react";
import DisplayReplies from "../DisplayReplies/DisplayReplies";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const Comments = (props) => {
  const [user, token] = useAuth();

  async function handleLikes(comment_id) {
    try {
      await axios.patch(
        `http://127.0.0.1:8000/api/comments/${comment_id}/likes/`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      await props.getComments();
    } catch (error) {
      console.log(token);
      console.log(error.message);
    }
  }
  async function handleDislikes(comment_id) {
    try {
      await axios.patch(
        `http://127.0.0.1:8000/api/comments/${comment_id}/dislikes/`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      await props.getComments();
    } catch (error) {
      console.log(token);
      console.log(error.message);
    }
  }
  return (
    <div>
      <div>
        {props.comments.map((el) => {
          if (el.video_id === props.videoId) {
            return (
              <div key={el.id}>
                <h4>{el.text}</h4>
                <button
                  onClick={() => {
                    handleLikes(el.id);
                  }}
                >
                  Like {el.likes}
                </button>
                <button
                  onClick={() => {
                    handleDislikes(el.id);
                  }}
                >
                  Dislike {el.dislikes}
                </button>
                <div>
                  <h4>Replies</h4>
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
