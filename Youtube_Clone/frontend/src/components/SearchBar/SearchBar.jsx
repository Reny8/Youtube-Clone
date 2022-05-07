import React, { useState } from "react";

const SearchBar = (props) => {
  const [userInput, setUserInput] = useState("");

  function handleClick() {
    let response = props.videos.filter((video) => {
      if (video.snippet.title.includes(userInput)) {
        return true;
      } else if (video.snippet.description.includes(userInput)) {
        return true;
      }
    });
    props.setVideos(response);
    setUserInput("");
    if (userInput === "") {
      props.fetchVideos()
    }
  }

  return (
    <div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Search here..."
      />
      <button onClick={handleClick}>Search</button>
    </div>
  );
};

export default SearchBar;
