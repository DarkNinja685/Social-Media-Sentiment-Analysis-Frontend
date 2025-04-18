import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const AdminLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const submitHandler = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/user/login",
        data
      );
      if (response.status === 200) {
        const role = response.data.data.roleID?.name;
        if (role === "ADMIN") {
          alert("Admin login successful");
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("role", "ADMIN");

          // After successful login

          localStorage.setItem("userId", response.data.data._id);
          localStorage.setItem("role", role);
          navigate("/admin/dashboard"); // Admin Dashboard
        } else {
          alert("Access denied: Not an admin");
        }
      }
    } catch (err) {
      console.error("Login Error:", err);
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit(submitHandler)}>
        <h1>Admin Login</h1>
        <div>
          <label>Email</label>
          <input
            type="text"
            {...register("contact", { required: "Email is required" })}
          />
          <span style={{ color: "red" }}>{errors.contact?.message}</span>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
          />
          <span style={{ color: "red" }}>{errors.password?.message}</span>
        </div>
        <div className="login-button">
          <button type="submit">Login as Admin</button>
        </div>
      </form>
    </div>
  );
};
