import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./AdminNavbar.css";

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/admin-login");
  };

  return (
    <nav className="admin-navbar">
      <div className="navbar-left">
        <div className="logo-container">
          <div className="logo">Admin Panel</div>
        </div>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/admin/user">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/dashboard">Manage Users</Link>
        </li>
        <li>
          <Link to="/admin/reports">Reports</Link>
        </li>
        <li>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
