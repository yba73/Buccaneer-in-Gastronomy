import React from "react";
import "./Navigationsbar.css";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../slices/userSlice";
const Navigationsbar = () => {
  const { isAuth } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const logouthandler = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <section id="header">
      <div className="nav">
        <div className="nav-bar">
          <div className="brand">
            <a href="#hero">
              <h1>
                <span>Buccaneer</span> in <span>Gastr</span>ronomy
              </h1>
            </a>
          </div>
          <div className="nav-list">
            <div className="hamburger">
              <div className="bar"></div>
            </div>
            <ul>
              <li>
                <Link className="link_a" to="/">
                  Home
                </Link>
              </li>

              {isAuth ? (
                <>
                  <li>
                    <Link className="link_a" to="/profile">
                      Profile
                    </Link>
                  </li>
                  {/* <button onClick={logouthandler}> Logout </button> */}
                  <button className="buttonLogout" onClick={logouthandler}>
                    Logout
                  </button>
                </>
              ) : (
                <>
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
                </>
              )}
              <li>
                <Link className="link_a" to="/contact">
                  Contact
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

<Link classNameName="link_a" to="/register"></Link>;
