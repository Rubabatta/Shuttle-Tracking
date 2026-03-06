import React from "react";
import { FaBell, FaUserCircle, FaSun } from "react-icons/fa";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <div className="logo-circle">🚌</div>

        <div className="title">
          <h2>UNIVERSITY</h2>
          <p>Bus Tracking System</p>
        </div>
      </div>

      <div className="header-right">
        <div className="icon-box">
          <FaUserCircle />
        </div>

        <span className="welcome-text">
          Welcome, <b>Student</b>
        </span>

        <div className="icon-box">
          <FaBell />
        </div>

        <div className="icon-box">
          <FaSun />
        </div>
      </div>
    </div>
  );
}

export default Header;