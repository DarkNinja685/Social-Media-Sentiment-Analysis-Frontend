import React from "react";
import TrendingTopicsTable from "./TrendingTopicsTable";
import { Link } from "react-router-dom";

const TrendingTopicsPage = () => {
  const trendingData = JSON.parse(localStorage.getItem("trendingData")) || [];
  console.log("Trending Data from localStorage:", trendingData);

  return (
    <div className="trending-topics-page">
      <h1>Trending Topics</h1>
      <TrendingTopicsTable data={trendingData} />
      <Link to="/" className="back-link">
        ← Back to Dashboard
      </Link>
    </div>
  );
};

export default TrendingTopicsPage;
