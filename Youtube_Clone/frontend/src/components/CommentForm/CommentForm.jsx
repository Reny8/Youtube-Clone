import React, { useState } from "react";

const CommentForm = (props) => {
  const [commentText, setCommentText] = useState('');

  function handlesubmit(event) {
    event.preventDefault();
    let newComment = {
      user: props.user.id,
      video_id: props.videoId,
      text: commentText,
      likes: 0,
      dislikes: 0,
    };
    props.setNewComment(newComment);
    props.addComment();
    setCommentText("")
  }
  return (
    <form onSubmit={handlesubmit}>
      <div>
        <input
          type="text"
          value={commentText}
          placeholder="Enter text"
          onChange={(event) => setCommentText(event.target.value)}
        />
      </div>
      <button type="submit">Add Comment</button>
    </form>
  );
};

export default CommentForm;
