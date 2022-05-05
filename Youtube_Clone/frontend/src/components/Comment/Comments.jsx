import React, {useState, useEffect} from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const Comments = (props) => {

  const [replies, setReplies] = useState([]);
  const [user, token] = useAuth();

  useEffect(() => {
    getReplies()
  },[token]);
 

  async function getReplies() {
    try {
      let response = await axios.get("http://127.0.0.1:8000/api/reply/2",{
        headers: {
          Authorization: "Bearer " + token,
        }
      });
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

// const createReply= async () =>{
//   try {
//     let response = await axios.get("http://127.0.0.1:8000/api/reply/");
//     getReplies();
//   } catch (error) {
//     console.log(error.message);
//   }
// }

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
