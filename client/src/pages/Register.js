import React from "react";
import "./css/register.css";
const Register = () => {
  return (
    <div className="dinbody">
      <div className="container">
        <form action="#" className="login active">
          <h2 className="title">Registration</h2>

          <div className="form-group">
            <label for="text">Name</label>
            <div className="input-group">
              <input type="text" placeholder="Entre your name" />
              <i className="bx bx-envelope"></i>
            </div>
          </div>

          <div className="form-group">
            <label for="text">Username</label>
            <div className="input-group">
              <input type="text" placeholder="Entre your Username" />
              <i className="bx bx-envelope"></i>
            </div>
          </div>

          <div className="form-group">
            <label for="email">Email</label>
            <div className="input-group">
              <input type="email" id="email" placeholder="Email address" />
              <i className="bx bx-envelope"></i>
            </div>
          </div>

          <div className="form-group">
            <label for="password">Password</label>
            <div className="input-group">
              <input
                type="password"
                pattern=".{8,}"
                id="password"
                placeholder="Your password"
              />
              <i className="bx bx-lock-alt"></i>
            </div>
            <span className="help-text">At least 8 characters</span>
          </div>
          <button type="submit" className="btn-submit">
            Register
          </button>
        </form>

        <form action="#" className="register">
          <h2 className="title">Register your account</h2>
          <div className="form-group">
            <label for="email">Email</label>
            <div className="input-group">
              <input type="email" id="email" placeholder="Email address" />
              <i className="bx bx-envelope"></i>
            </div>
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <div className="input-group">
              <input
                type="password"
                pattern=".{8,}"
                id="password"
                placeholder="Your password"
              />
              <i className="bx bx-lock-alt"></i>
            </div>
            <span className="help-text">At least 8 characters</span>
          </div>
          <div className="form-group">
            <label for="confirm-pass">Confirm password</label>
            <div className="input-group">
              <input
                type="password"
                id="confirm-pass"
                placeholder="Enter password again"
              />
              <i className="bx bx-lock-alt"></i>
            </div>
            <span className="help-text">
              Confirm password must be same with password
            </span>
          </div>
          <button type="submit" className="btn-submit">
            Register
          </button>
          <p>
            I already have an account.{" "}
            <a href="#h" onclick="switchForm('login', event)">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
