import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container-xxl position-relative p-0 homenav">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="logo">
          <h1>
            <img src="../images/logo.png" className="img" alt="logo" />
            <span className="petuk">Petuk</span> <span className="ji">.Ji</span>
          </h1>
        </div>
        <button
          className="navbar-toggler collapsed"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="toggler-icon top-bar"></span>
          <span className="toggler-icon middle-bar"></span>
          <span className="toggler-icon bottom-bar"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto text-center">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/aboutUs" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#0" className="nav-link">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#0" className="nav-link">
                Careers
              </a>
            </li>
            <li className="nav-item">
              <a href="/aboutUs#getInTouch" className="nav-link active">
                Get In Touch
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
