import React from "react";
import "./Navigationsbar.css";
// import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
const Navigationsbar = () => {
  return (
    <section id="header">
      <div class="nav">
        <div class="nav-bar">
          <div class="brand">
            <a href="#hero">
              <h1>
                <span>Buccaneer</span> in <span>Gastr</span>ronomy
              </h1>
            </a>
          </div>
          <div class="nav-list">
            <div class="hamburger">
              <div class="bar"></div>
            </div>
            <ul>
              <li>
                <Link className="link_a" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="link_a" to="/profile">
                  Profile
                </Link>
              </li>
              <li>
                <Link className="link_a" to="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="link_a" to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="link_a" to="/register">
                  register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navigationsbar;

<Link className="link_a" to="/register"></Link>;
