import React, {useState} from "react";

const ReplyForm = (props) => {
const [text, setText]= useState('')

function handlesubmit(event) {
    event.preventDefault()
    let newReply = {
      user: props.user.id,
      comment: props.commentId,
      text: text,
      user_id: props.user.id,
      comment_id: props.commentId,
    };
    props.setNewReply(newReply);
    props.addReply();
    setText('')
   
  }
return(
    <form onSubmit={handlesubmit} id="form">
        <div>
            <input 
            type="text"
            value={text}
            placeholder="Enter text"
            onChange={(event) => setText(event.target.value)}
            />
        </div>
        <button type='submit'>Add Reply</button>
    </form>
)


}

export default ReplyForm;