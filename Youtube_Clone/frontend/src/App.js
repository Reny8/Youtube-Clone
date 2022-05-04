// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
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
function App() {


  return (
    <div className="page">
      <Navbar />
      <Routes>
        <Route path="/" element={<VideoPage/>} />
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
