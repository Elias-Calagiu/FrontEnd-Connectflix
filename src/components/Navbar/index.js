import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        ConNectFlix
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/login"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/friends"
              className={window.location.pathname === "/friends" ? "nav-link active" : "nav-link"}
            >
              Friends
            </Link>
          </li> 
          <li className="nav-item">
            <Link
              to="/swipe"
              className={window.location.pathname === "/swipe" ? "nav-link active" : "nav-link"}
            >
              Swipe
            </Link>
          </li>
        </ul> 
      </div>
    </nav>
  );
}

export default Navbar;
