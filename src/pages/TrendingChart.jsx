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
import "./TrendingChart.css";

const TrendingChart = ({ trendingTopics }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    console.log("🔥 Raw trendingTopics received:", trendingTopics);
    const processed = {};

    trendingTopics.forEach(({ topic, posts }) => {
      if (!topic || !posts || posts === "N/A") return;

      const cleanTopic = topic.trim();
      const count = convertPostCount(posts);

      if (!processed[cleanTopic] || processed[cleanTopic] < count) {
        processed[cleanTopic] = count;
      }
    });

    const result = Object.entries(processed)
      .filter(([_, posts]) => typeof posts === "number" && posts > 0)
      .map(([topic, posts]) => ({ topic, posts }));

    console.log("✅ Final chart data after processing:", result);
    setChartData(result);
  }, [trendingTopics]);

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
    <div className="trending-chart-container">
      <h2>Trending Topics (by Post Count)</h2>
      {chartData.length === 0 ? (
        <p>No trending data to display.</p>
      ) : (
        <ResponsiveContainer width="100%" height={350}>
          <BarChart
            data={chartData.slice(0, 10)}
            margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
          >
            <XAxis dataKey="topic" angle={-25} textAnchor="end" interval={0} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="posts" fill="#1da1f2" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default TrendingChart;
