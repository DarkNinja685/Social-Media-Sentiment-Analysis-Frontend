import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./UserSidebar.css";

export const UserSidebar = ({ isOpen, closeSidebar }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    navigate("/login");
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        !event.target.closest(".sidebar") &&
        !event.target.closest(".menu-button")
      ) {
        closeSidebar();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, closeSidebar]);

  return (
    <div className={`sidebar ${isOpen ? "sidebar-open" : "sidebar-closed"}`}>
      {/* Sidebar Header */}
      <div className="sidebar-header">
        <h1>📊 Sentiment Analysis</h1>
      </div>

      {/* Sidebar Links */}
      <ul className="nav flex-column">
        {/* <li>
          <Link to="/add-post" className="nav-link">
            📝 Add Posts
          </Link>
        </li> */}
        {/* <li>
          <Link to="/comments-analysis" className="nav-link">
            💬 Add Comments
          </Link>
        </li> */}
        <li>
          <Link to="/user/trends" className="nav-link">
            🔥 Sentiment Trends
          </Link>
        </li>

        <li>
          <Link to="/user/settings" className="nav-link">
            ⚙️ Profile Settings
          </Link>
        </li>
      </ul>

      {/* Logout Button */}
      <div className="sidebar-footer">
        <button className="logout-btn" onClick={handleLogout}>
          🚪 Logout
        </button>
      </div>
    </div>
  );
};
