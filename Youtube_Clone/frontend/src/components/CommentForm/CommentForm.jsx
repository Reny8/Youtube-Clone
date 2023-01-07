import React, { useState } from "react";

const CommentForm = (props) => {
  const [commentText, setCommentText] = useState(" ");

  function handlesubmit(event) {
    event.preventDefault();
    if (props.user) {
      let new_comment = {
        user: props.user.id,
        video_id: props.videoId,
        text: commentText,
        likes: 0,
        dislikes: 0,
      };
      props.addComment(new_comment);
    }
    else{
      alert("Sign in or Login to add a comment")
    }
    setCommentText(" ");
  }
  return (
    <form className="comment-form" onSubmit={handlesubmit}>
      <input
        type="text"
        className="input-search"
        value={commentText}
        placeholder="Enter text"
        onChange={(event) => setCommentText(event.target.value)}
      />
      <button className="search-button">Add Comment</button>{" "}
    </form>
  );
};

export default CommentForm;
