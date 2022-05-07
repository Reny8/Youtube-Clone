import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);

  const navigate = useNavigate();
  return (
    <div className="border-box">
      <ul>
        <li>
          <h1>CatTube</h1>
        </li>

        <li>
          {" "}
          <div className="nav-buttons">
            <div className="home-button">
              {" "}
              <Link to="/">
                <button>Home</button>
              </Link>
            </div>
            <div>
              {" "}
              {user ? (
                <button onClick={logoutUser}>Logout</button>
              ) : (
                <button onClick={() => navigate("/login")}>Login</button>
              )}{" "}
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
