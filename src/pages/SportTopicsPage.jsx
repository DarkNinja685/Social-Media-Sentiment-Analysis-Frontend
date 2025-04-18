import React from "react";
import SportsTopicsTable from "./SportsTopicsTable"; // ✅ Correct import
import { Link } from "react-router-dom";

const SportsTrendingTopicsPage = () => {
  const sportsData = JSON.parse(localStorage.getItem("sportsData")) || [];

  return (
    <div className="trending-topics-page">
      <h1>Sports Trending Topics</h1>
      <SportsTopicsTable data={sportsData} /> {/* ✅ Use correct component */}
      <Link to="/" className="back-link">
        ← Back to Dashboard
      </Link>
    </div>
  );
};

export default SportsTrendingTopicsPage;
