// import React, {useState} from "react";
// import useAuth from "../../hooks/useAuth";

// const ReplyForm = (props) => {

// const [user, token] = useAuth();
// const [comment, setComment]= useState('')
// const [text, setText]= useState('')

// function handlesubmit(event){
//     event.preventDefault();
//     let newReply ={
//         comment: comment, 
//         text: text
//     };
//     console.log(newReply);
//     props.createReply(newReply)
// }

// return(
//     <form onSubmit={handlesubmit} id="form">
//         <p>Reply:</p>
//         <div>
//             <label>Comment:</label>
//             <input 
//             type="text"
//             value={comment}
//             placeholder="Enter comment"
//             onChange={(event) => setComment(event.target.value)}
//             />
//         </div>
//         <div>
//             <label>Text:</label>
//             <input 
//             type="text"
//             value={text}
//             placeholder="Enter text"
//             onChange={(event) => setText(event.target.value)}
//             />
//         </div>
//         <button>Submit</button>
//     </form>
// )


// }

// export default ReplyForm;