import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
      <div className='border-box'>
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "darkred" }}>
              <h1>CatTube</h1>
            </Link>
          </li>
          <li className='navbar-button'>
            {user ? (
              <button onClick={logoutUser}>Logout</button>
            ) : (
              <button onClick={() => navigate("/login")}>Login</button>
            )}
          </li>
        </ul>
      </div>
  );
};

export default Navbar;
