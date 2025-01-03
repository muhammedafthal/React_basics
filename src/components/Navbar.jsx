import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

//FUNCTION COMPONENT
function Navbar() {
  return (
    <div className="navbar-options">
      <h2>React Webpage</h2>
      <nav>
        <ul>
          <div className="home">
            <li>
              <Link to="/">Home</Link>
            </li>
          </div>
          <div className="about">
            <li>
              <Link to="/about">About</Link>
            </li>
          </div>
          <div className="contact">
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </div>
          <div className="settings">
            <li>
              <Link to="/settings">Settings</Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
