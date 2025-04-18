import React from "react";

const SportsTopicsTable = ({ data }) => {
  console.log("📊 SportsTopicsTable received:", data); // 🔍 Debug log

  if (!data || data.length === 0) {
    return <p>No sports topics available</p>;
  }

  return (
    <div className="topics-table">
      <h2>Sports Topics</h2>
      <table>
        <thead>
          <tr>
            <th>Topic</th>
            <th>Posts</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx}>
              <td>{item.topic}</td>
              <td>{item.posts}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SportsTopicsTable;
