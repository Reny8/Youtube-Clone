import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import ReplyForm from "../ReplyForm/ReplyForm";

const DisplayReplies = (props) => {
  const [user, token] = useAuth();
  const [replies, setReplies] = useState([]);
  const [newReply, setNewReply] = useState({});

  useEffect(() => {
    getReplies(props.commentId);
  }, []);

  const addReply = async () => {
    try {
      let response = await axios.post(
        "http://127.0.0.1:8000/api/reply/",
        newReply,
        {
          headers: {
            Authorization: "Bearer " + token
          }
        }
      );
      await getReplies();
    } catch (error) {
      console.log(token);
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
      {replies.map((reply) => {
        return (
          <div key={reply.id}>
            <div>
              <h6>{reply.text}</h6>
            </div>
            <ReplyForm
              commentId={props.commentId}
              user={user}
              addReply={addReply}
              setNewReply={setNewReply}
            />
          </div>
        );
      })}
    </div>
  );
};

export default DisplayReplies;
