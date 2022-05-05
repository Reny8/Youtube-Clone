// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
// Pages Imports
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Navbar from "./components/NavBar/NavBar";
import VideoPage from "./pages/VideosPage/VideoPage";
// Component Imports
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import React, { useState } from 'react';

// Util Imports
function App() {
const [comment, setComment] = useState([]);

  return (
    <div className="page">
      <Navbar />
      <Routes>
        <Route path="*" element={<VideoPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/player/:videoId/" element={<VideoPlayer comment = {comment}  setComment={setComment}/>}/>
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
