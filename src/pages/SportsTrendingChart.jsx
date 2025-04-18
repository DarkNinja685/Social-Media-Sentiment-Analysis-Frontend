import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import "./SportTrendingChart.css";

const SportsTrendingChart = ({ sportsTopics }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const processed = {};

    sportsTopics.forEach(({ topic, posts }) => {
      if (!topic || !posts || posts === "N/A") return;

      const cleanTopic = topic.trim();
      const count = convertPostCount(posts);

      // Use the highest count if duplicates exist
      if (!processed[cleanTopic] || processed[cleanTopic] < count) {
        processed[cleanTopic] = count;
      }
    });

    const result = Object.entries(processed)
      .filter(([_, posts]) => typeof posts === "number" && posts > 0)
      .map(([topic, posts]) => ({ topic, posts }))
      .sort((a, b) => b.posts - a.posts); // Sort by highest posts

    setChartData(result);
  }, [sportsTopics]);

  const convertPostCount = (str) => {
    if (!str) return 0;
    const cleanStr = str.replace(/,/g, "").toUpperCase();
    const num = parseFloat(cleanStr.replace(/[^0-9.]/g, ""));
    if (isNaN(num)) return 0;
    if (cleanStr.includes("K")) return Math.round(num * 1000);
    if (cleanStr.includes("M")) return Math.round(num * 1000000);
    return Math.round(num);
  };

  return (
    <div className="sports-chart-container">
      <h2>Sports Trending Topics</h2>
      <div className="sports-chart-wrapper">
        {chartData.length === 0 ? (
          <p>No sports trending data to display.</p>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData.slice(0, 10)}
              margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
            >
              <XAxis
                dataKey="topic"
                angle={-25}
                textAnchor="end"
                interval={0}
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="posts" fill="#ff9800" />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default SportsTrendingChart;
