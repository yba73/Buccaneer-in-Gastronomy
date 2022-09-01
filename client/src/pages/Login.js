import React from "react";
import "./css/login.css";
// import { useForm } from "react-hook-form";

const Login = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();s
  return (
    <div>
      <div className="dinbody">
        <div className="containerlogin">
          <form action="#" className="login active formlogin">
            <h2 className="title">Login</h2>

            {/* Username */}
            <div className="form-group">
              <label>Username</label>
              <div className="input-group">
                <input type="text" placeholder="Entre your Username" />
              </div>
            </div>

            {/* Password */}
            <div className="form-group">
              <label>Password</label>
              <div className="input-group">
                <input
                  type="password"
                  pattern=".{8,}"
                  id="password"
                  placeholder="Your password"
                />
              </div>
              <span className="help-text">At least 8 characters</span>
            </div>

            {/* button Login */}
            <button type="submit" className="btn-submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
