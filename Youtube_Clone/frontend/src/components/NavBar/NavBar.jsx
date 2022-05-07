import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";
import CatTube from "./CatTube.png";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);

  const navigate = useNavigate();
  return (
    <div className="border-box">
      <ul>
        <li>
          <img src={CatTube}/>
        </li>
        <li>
          {" "}
          <div className="nav-buttons">
            <div>
              {" "}
              <Link to="/">
                <button className="buttons">Home</button>
              </Link>
            </div>
            <div>
              {" "}
              {user ? (
                <button onClick={logoutUser} className="buttons">Logout</button>
              ) : (
                <button onClick={() => navigate("/login")} >Login</button>
              )}{" "}
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
