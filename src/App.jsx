import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

// Auth & Public Pages
import { Login } from "./components/Auth/login/Login.jsx";
import { Signup } from "./components/Auth/signup/Signup.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import { AdminLogin } from "./components/Auth/login/AdminLogin.jsx";
import SentimentSageApp from "./pages/CombinedHomePage.jsx";

// Layouts
import UserLayout from "./pages/UserLayout.jsx";
import AdminLayout from "./pages/AdminLayout.jsx";

// User Pages
import Dashboard from "./pages/Dashboard.jsx";
import { Analysis } from "./pages/Analysis.jsx";
import SentimentSummary from "./pages/SentimentSummary.jsx";
import SportsTrendingTopicsPage from "./pages/SportTopicsPage.jsx";
import TrendingTopicsPage from "./pages/TrendingTopicsPage.jsx";
import ReportPage from "./pages/ReportPage.jsx";
import { AddPost } from "./components/user/AddPost.jsx";
import { Settings } from "./pages/Settings.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";

// Admin Pages
import AdminDashboard from "./pages/AdminDashboard.jsx";
import AdminDash from "./pages/AdminDash.jsx";
import AdminReportPage from "./pages/AdminReportPage.jsx";

function App() {
  axios.defaults.baseURL = "http://localhost:4000";

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/home" element={<SentimentSageApp />} />

      {/* User Routes with Layout */}
      <Route path="/user" element={<UserLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="analysis" element={<Analysis />} />
        <Route path="sentiment-summary" element={<SentimentSummary />} />
        <Route path="sportpage" element={<SportsTrendingTopicsPage />} />
        <Route path="report/:topic" element={<ReportPage />} />
        <Route path="page" element={<TrendingTopicsPage />} />
        <Route path="add-post" element={<AddPost />} />
        <Route path="settings" element={<Settings />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="trends" element={<Analysis />} />
      </Route>

      {/* Admin Routes with Layout */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="user" element={<AdminDash />}></Route>
        <Route path="reports" element={<AdminReportPage />}></Route>
        {/* Add more admin-specific routes here */}
      </Route>
    </Routes>
  );
}

export default App;
