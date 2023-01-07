import React, { useState } from "react";
import "./SearchBar.css";
import axios from "axios"
import { KEY } from "../../localKey";
const SearchBar = (props) => {
  const [userInput, setUserInput] = useState("");

 async function handleClick() {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?q=${userInput}&type=video&key=${KEY}&part=snippet&maxResults=6`
      );
      props.setVideos(response.data.items);
    } catch (error) {
      console.log(error.message);
    }
    setUserInput("");
    if (userInput === "") {
      props.fetchVideos();
    }
  }

  return (
    <div >
      <div className="searchBar">
        <input
          type="search"
          className="input-search"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Search here..."
        />
        <button className="search-button" onClick={handleClick}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
