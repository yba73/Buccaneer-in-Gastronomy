import React, { useEffect } from "react";
import "./css/login.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../slices/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const nav = useNavigate();
  const { errors: userErrors, isAuth } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuth) nav("/profile");
  }, [isAuth]);
  const dispatch = useDispatch();

  // Function Submit data */

  const submitRegister = (LoginData) => {
    dispatch(loginUser(LoginData));
  };

  // Function React hook form */

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <div className="dinbodyLogin">
        <div className="containerlogin">
          <form
            action="#"
            className="login active formlogin"
            onSubmit={handleSubmit(submitRegister)}
          >
            <h2 className="title">Login</h2>

            {/* Email */}
            <div className="form-group">
              <label>Email</label>
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Entre your Email"
                  {...register("email", {
                    required: true,
                    pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  })}
                />

                {errors.email && <p>Invalid Email </p>}
                {userErrors?.includes("register") && (
                  <p className="LoginErrors">{userErrors}</p>
                )}
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
                  {...register("password")}
                />
                {userErrors?.includes("password") && (
                  <p className="LoginErrors">{userErrors}</p>
                )}
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
