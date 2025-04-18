import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import "./AdminLayout.css";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <AdminNavbar />
      <div className="admin-body no-sidebar">
        <div className="admin-main expanded">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
