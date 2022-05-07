import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import ReplyForm from "../ReplyForm/ReplyForm";
import "./DisplayReplies.css";
const DisplayReplies = (props) => {
  const [user, token] = useAuth();
  const [replies, setReplies] = useState([]);
  const [newReply, setNewReply] = useState({});

  useEffect(() => {
    getReplies(props.commentId);
  }, []);

  const addReply = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/api/reply/", newReply, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      getReplies(props.commentId);
    } catch (error) {
      console.log(newReply)
      console.log(error.message);
    }
  };
  async function getReplies(id) {
    try {
      let response = await axios.get(`http://127.0.0.1:8000/api/reply/${id}/`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setReplies(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      <h4>Replies</h4>

      {replies.map((reply) => {
        if (replies !== []) {
          return (
            <div key={reply.id}>
              <p>{reply.text}</p>
            </div>
          );
        }  
      })}
    
      <ReplyForm
        commentId={props.commentId}
        user={user}
        addReply={addReply}
        setNewReply={setNewReply}
      />
    </div>
  );
};

export default DisplayReplies;
