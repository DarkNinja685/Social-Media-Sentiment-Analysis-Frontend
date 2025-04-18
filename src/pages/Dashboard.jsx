import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import TrendingChart from "./TrendingChart";
import SportsTrendingChart from "./SportsTrendingChart";

const Dashboard = ({ userId: propUserId }) => {
  const [trendingData, setTrendingData] = useState([]);
  const [data, setData] = useState([]);
  const [sportsData, setSportsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(
    () => localStorage.getItem("userId") || propUserId
  );
  const [hasAnalyzed, setHasAnalyzed] = useState(false);

  // ✅ Restore previous analysis data if available
  useEffect(() => {
    const savedTrending = localStorage.getItem("trendingData");
    const savedSports = localStorage.getItem("sportsData");
    const analysisComplete = localStorage.getItem("analysisComplete");

    if (savedTrending && savedSports && analysisComplete === "true") {
      setData(JSON.parse(savedTrending));
      setSportsData(JSON.parse(savedSports));
      setHasAnalyzed(true);
    }
  }, []);

  useEffect(() => {
    if (!userId) {
      const storedUserId = localStorage.getItem("userId");
      if (storedUserId) {
        setUserId(storedUserId);
      } else {
        alert("No User ID found. Please log in.");
      }
    }
  }, [userId]);

  useEffect(() => {
    const fetchTrendingTopics = async () => {
      try {
        const res = await axios.get("/TrendingTopics");
        setTrendingData(res.data);
      } catch (err) {
        console.error("❌ Failed to fetch trending topics:", err);
      }
    };

    fetchTrendingTopics();
  }, []);

  const fetchData = async () => {
    if (!userId) return;

    try {
      setLoading(true);
      console.log("Fetching analysis for userId:", userId);
      const response = await axios.get(`/Twitter/analysis/${userId}`, {
        headers: { Accept: "application/json" },
      });
      console.log("🔍 Raw response data:", response.data);

      if (!Array.isArray(response.data)) {
        throw new Error("Invalid data format received");
      }

      const formattedData = response.data.flatMap((category) =>
        category.topics.map((topic) => ({
          topic: topic.topic,
          posts: topic.posts || "0",
          sentiment: topic.sentiment || "neutral",
          category: category.category,
        }))
      );

      const trending = formattedData.filter(
        (item) =>
          item.category && !item.category.toLowerCase().includes("sports")
      );
      const sports = formattedData.filter(
        (item) =>
          item.category && item.category.toLowerCase().includes("sports")
      );

      setData(trending);
      setSportsData(sports);
      setHasAnalyzed(true);

      // ✅ Store analysis in localStorage
      localStorage.setItem("trendingData", JSON.stringify(trending));
      localStorage.setItem("sportsData", JSON.stringify(sports));
      localStorage.setItem("analysisComplete", "true");

      // ✅ Store topics for search
      const allTopics = [...trending, ...sports].map((item) => item.topic);
      localStorage.setItem("topics", JSON.stringify(allTopics));
    } catch (error) {
      console.error("❌ Error fetching Twitter data:", error);
      alert("Failed to fetch data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleAnalyze = async () => {
    if (!userId) {
      alert("No User ID found. Please log in.");
      return;
    }

    setLoading(true);
    setHasAnalyzed(false);

    try {
      await axios.post(`/Twitter/scrape`, { userId });
      console.log("✅ Scraping started, waiting for completion...");
      await new Promise((resolve) => setTimeout(resolve, 30000));
      await fetchData();
    } catch (error) {
      console.error("❌ Error during scraping:", error);
      alert("Scraping failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard">
      <h1>Twitter Analysis Dashboard</h1>

      {loading && <p>Loading...</p>}

      {!loading && (
        <button
          className="analyze-btn"
          onClick={handleAnalyze}
          disabled={loading}
        >
          {hasAnalyzed ? "Analyze Again" : "Analyze Data"}
        </button>
      )}

      {!loading && hasAnalyzed && (
        <div className="charts-row">
          <div className="chart-container">
            <h2>Trending Topics</h2>
            {data.length > 0 ? (
              <TrendingChart trendingTopics={data} />
            ) : (
              <p>No trending topics available</p>
            )}
          </div>

          <div className="chart-container">
            <h2>Sports Trending Topics</h2>
            {sportsData.length > 0 ? (
              <SportsTrendingChart sportsTopics={sportsData} />
            ) : (
              <p>No sports topics available</p>
            )}
          </div>
        </div>
      )}

      {!loading && !hasAnalyzed && (
        <p>
          Click the "Analyze Data" button to start analyzing the trending
          topics.
        </p>
      )}
    </div>
  );
};

export default Dashboard;
