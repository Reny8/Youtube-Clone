// import React, { useEffect } from "react";
// import axios from "axios";

// const Comment = (props) => {
//   useEffect(() => {
//     getComments();
//   }, []);

//   async function getComments() {
//     try {
//       let response = await axios.get("http://127.0.0.1:8000/api/comments/");
//       props.setComment(response.data);
//       console.log(props.comment);
//     } catch (error) {
//       console.log(error.message);
//     }
//   }

//   return (
//     <div>
//       <div>
//           {props.comment.map((el) => {
//             if (el.video_id === props.id) {
//               return (
//                 <div key={el.id}>
//                   <p>{el.text}</p>
//                   <div>likes {el.likes}</div>
//                   <div>dislikes {el.dislikes}</div>
//                 </div>
//               );
//             }
//           })}
//       </div>
//     </div>
//   );
// };

// export default Comment;
