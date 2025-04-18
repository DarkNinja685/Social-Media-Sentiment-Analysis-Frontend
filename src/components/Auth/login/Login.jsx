import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const submitHandle = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/user/login",
        data
      );
      if (response.status === 200) {
        toast.success("Login successful");

        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.data.roleID.name);
        localStorage.setItem("userId", response.data.data._id);

        if (
          response.data.data.roleID?.name === "USER" ||
          response.data.data.roleID?.name === "ADMIN"
        ) {
          navigate("/user/dashboard");
        }
      }
    } catch (err) {
      console.error("API Error:", err.response?.data?.message);
      toast.error(err.response?.data?.message || "Login Failed");
    }
  };

  const validation = {
    contactValidator: {
      required: { value: true, message: "Email is required" },
      pattern: {
        value: /^[a-zA-Z0-9._+%]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
        message: "Invalid email",
      },
    },
    passwordValidator: {
      required: { value: true, message: "Password is required" },
      minLength: { value: 6, message: "Minimum 6 characters" },
      maxLength: { value: 12, message: "Maximum 12 characters" },
    },
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit(submitHandle)}>
        <h1>Login</h1>
        <div>
          <label htmlFor="email">Email OR Phone Number</label>
          <input
            type="text"
            id="email"
            placeholder="Example@gmail.com"
            {...register("contact", validation.contactValidator)}
          />
          <span style={{ color: "red" }}>{errors.contact?.message}</span>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password..."
            {...register("password", validation.passwordValidator)}
          />
          <span style={{ color: "red" }}>{errors.password?.message}</span>
        </div>

        <div className="login-links-row">
          <Link
            to="/forgot-password"
            className="text-blue-500 hover:underline text-sm"
          >
            Forgot Password?
          </Link>
          <span style={{ margin: "0 10px" }}>|</span>
          <Link
            to="/admin-login"
            className="text-blue-500 hover:underline text-sm"
          >
            Admin Login
          </Link>
        </div>

        <div className="signup">
          <p>
            Don't have an account? <Link to="/signup">Signup</Link>
          </p>
        </div>
        <div className="login-button">
          <button type="submit">Login</button>
        </div>
      </form>

      {/* Toast container to show notifications */}
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};
