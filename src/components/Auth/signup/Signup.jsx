import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

export const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const submitHandle = async (data) => {
    try {
      // Assign roleID based on selected role
      if (data.role.toLowerCase() === "admin") {
        data.roleID = "67c52759a6d8a5d828f10c4f"; // Admin Role ID
      } else if (data.role.toLowerCase() === "user") {
        data.roleID = "67be8b41a496f93e853fa253"; // User Role ID
      }

      console.log("Data:", data);

      const response = await axios.post(
        "http://localhost:4000/user/signup",
        data
      );
      console.log("Response:", response.data);

      alert("Signup Successful");

      if (response.status === 201) {
        navigate("/login");
      }
    } catch (err) {
      console.log("API Error:", err.response?.data?.message);
      alert(err.response?.data?.message || "Signup Failed");
    }
  };

  const validation = {
    usernameValidator: {
      required: {
        value: true,
        message: "Username is required",
      },
    },
    ageValidator: {
      required: {
        value: true,
        message: "Age is required",
      },
    },
    contactValidator: {
      required: {
        value: true,
        message: "Contact Information is required",
      },
      validate: (value) =>
        /^[7-9]{1}[0-9]{9}$/.test(value) ||
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value) ||
        "Invalid Email or Mobile Number",
    },
    passwordValidator: {
      required: {
        value: true,
        message: "Password is required",
      },
      minLength: {
        value: 6,
        message: "Minimum 6 characters",
      },
      maxLength: {
        value: 12,
        message: "Maximum 12 characters",
      },
    },
    roleValidator: {
      required: {
        value: true,
        message: "Role is required",
      },
      validate: (value) =>
        value === "admin" ||
        value === "user" ||
        "Only 'admin' or 'user' allowed",
    },
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit(submitHandle)}>
        <h1 style={{ color: "white" }}>Signup</h1>

        <div className="username">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            {...register("username", validation.usernameValidator)}
          />
          <span style={{ color: "red" }}>{errors.username?.message}</span>
        </div>

        <div className="role">
          <label htmlFor="role">Role</label>
          <select
            {...register("role", validation.roleValidator)}
            defaultValue="user"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <span style={{ color: "red" }}>{errors.role?.message}</span>
        </div>

        <div className="age">
          <label htmlFor="age">Age</label>
          <input
            type="text"
            placeholder="Enter your age"
            {...register("age", validation.ageValidator)}
          />
          <span style={{ color: "red" }}>{errors.age?.message}</span>
        </div>

        <div className="contact">
          <label htmlFor="contact">Contact Information</label>
          <input
            type="text"
            placeholder="Enter Mobile Number or Email"
            {...register("contact", validation.contactValidator)}
          />
          <span style={{ color: "red" }}>{errors.contact?.message}</span>
        </div>

        <div className="password">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            {...register("password", validation.passwordValidator)}
          />
          <span style={{ color: "red" }}>{errors.password?.message}</span>
        </div>

        <div className="login">
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>

        <div className="signup-button">
          <button type="submit">Signup</button>
        </div>
      </form>
    </div>
  );
};
