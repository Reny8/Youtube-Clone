import React, { useState, useEffect } from 'react';
import axios from 'axios'
import useAuth from "../../hooks/useAuth";

const DisplayReplies = (props) => {
    const [replies, setReplies] = useState([]);   
    const [user, token] = useAuth();


    useEffect(() => {
        getReplies(props.commentId)
      },[token]);
     
    
      async function getReplies(id) {
        try {
          let response = await axios.get(`http://127.0.0.1:8000/api/reply/${id}/`,{
            headers: {
              Authorization: "Bearer " + token,
            }
          });
          setReplies(response.data);
        } catch (error) {
          console.log(error.message);
        }
      }
    return ( 
        <div>
        {replies.map((reply)=>{
            return (
                <div key={reply.comment}>
                    <div>
                        <h6>{reply.text}</h6>
                    </div>
                </div>
            )
        })}

        </div>
     );
}
 
export default DisplayReplies;