// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, {useState, useEffect} from "react";
import axios from "axios";
// Pages Imports
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
// import VideosPage from "./pages/VideosPage/VideoPage";
import Navbar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import VideoPage from "./pages/VideosPage/VideoPage";
// Component Imports
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import {KEY} from './localKey'

function App() {
const [videos, setVideos] = useState([]);

useEffect(()=> {
fetchVideos()
},[])

  const fetchVideos = async () => {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?q=cats&key=${KEY}&part=snippet&maxLength=5`
      );
      setVideos(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="page">
      <Navbar />
      <Routes>
        <Route path="/" element={<VideoPage videos={videos} />} />
        <Route path="/cars"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
