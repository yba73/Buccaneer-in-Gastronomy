import React, { useEffect } from "react";
import "./css/register.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../slices/userSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const nav = useNavigate();
  const { errors: userErrors, isAuth } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuth) nav("/profile");
  }, [isAuth]);
  const dispatch = useDispatch();

  // Function Submit data */

  const submitRegister = (RegisterData) => {
    dispatch(registerUser(RegisterData));
  };

  // Function React hook form */

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="dinbodyRegister">
      <div className="containerregister">
        <form
          action="#"
          className="login active"
          onSubmit={handleSubmit(submitRegister)}
        >
          <h2 className="title">Registration</h2>

          {/* Username */}
          <div className="form-group">
            <label>Username</label>
            <div className="input-group">
              <input
                type="text"
                placeholder="Entre your Username"
                {...register("username")}
              />
            </div>
          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email</label>
            <div className="input-group">
              <input
                // style={{
                //   borderColor: cheked ? "green" : "red",
                //   color: cheked ? "green" : "red",
                //   boxShadow: cheked ? "green" : "0 0 0 4px #ffd2d2",
                // }}
                type="email"
                id="email"
                placeholder="Email address"
                {...register("email", {
                  required: true,
                  pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                })}
              />
              {errors.email && <p>Invalid Email </p>}
              {userErrors && <p className="ErrorsMsg">{userErrors}</p>}

              {/* {cheked ? null : (
                <h5 style={{ color: "red" }}> Email already registered </h5>
              )} */}
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
            </div>
            <span className="help-text">At least 8 characters</span>
          </div>

          {/* button Register */}
          <button type="submit" className="btn-submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
