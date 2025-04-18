import React, { useState } from "react";
import UserNavbar from "../components/Shared/Navbar/UserNavbar";
import { UserSidebar } from "../components/Shared/Footer/UserSidebar";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <UserNavbar
        toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
        isSidebarOpen={isSidebarOpen}
      />
      <div className="d-flex">
        <UserSidebar
          isOpen={isSidebarOpen}
          closeSidebar={() => setSidebarOpen(false)}
        />
        <div
          className={`content p-3 ${
            isSidebarOpen ? "content-sidebar open" : ""
          }`}
          style={{ width: "100%" }}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default UserLayout;
