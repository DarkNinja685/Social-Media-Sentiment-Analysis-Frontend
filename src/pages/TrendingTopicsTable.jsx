import React from "react";
import "./TrendingTopicsTable.css";

const TrendingTopicsTable = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No trending topics available</p>;
  }

  // Filter out invalid posts and get first 20
  const filteredData = data
    .filter((item) => item.posts && item.posts !== "0" && item.posts !== "N/A")
    .slice(0, 20);

  if (filteredData.length === 0) {
    return <p>No trending topics with posts found</p>;
  }

  return (
    <div className="topics-table">
      <h2 style={{ color: "black" }}>Trending Topics</h2>
      <table>
        <thead>
          <tr>
            <th>Topic</th>
            <th>Posts</th>
            <th>Sentiment</th> {/* New Sentiment Column */}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, idx) => (
            <tr key={idx}>
              <td>{item.topic}</td>
              <td>{item.posts}</td>
              <td>{item.sentiment || "No sentiment available"}</td>{" "}
              {/* Fallback for missing sentiment */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrendingTopicsTable;
