import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Don't forget to import this
import "./SentimentSummary.css";

const SentimentCard = ({ topic, posts, sentiment }) => {
  const sentimentClass = `sentiment-card ${sentiment}`;
  return (
    <div className={sentimentClass}>
      <h3 className="topic-name">{topic}</h3>
      <p className="post-count">Posts: {posts}</p>
      <span className="sentiment-label">Sentiment: {sentiment}</span>
    </div>
  );
};

const SentimentSection = ({ title, data, isNeutral = false }) => {
  const navigate = useNavigate(); // Initialize navigate here

  return (
    <div className="sentiment-section">
      <h2 className="section-title">{title}</h2>
      <div className="card-grid">
        {data.length > 0 ? (
          data.map((item, index) => (
            <div key={index} className="topic-card">
              <SentimentCard
                topic={item.topic}
                posts={item.posts}
                sentiment={item.sentiment}
              />
              {isNeutral && (
                <button
                  className="report-btn"
                  onClick={
                    () =>
                      navigate(`/user/report/${encodeURIComponent(item.topic)}`) // Fixed route for report
                  }
                >
                  🚩 Report
                </button>
              )}
            </div>
          ))
        ) : (
          <p className="no-topics">No topics found.</p>
        )}
      </div>
    </div>
  );
};

const SentimentSummary = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const trending = JSON.parse(localStorage.getItem("trendingData")) || [];
    const sports = JSON.parse(localStorage.getItem("sportsData")) || [];

    const combinedData = [...trending, ...sports]
      .filter((item) => parseInt(item.posts) > 0) // ✅ exclude 0 post entries
      .slice(0, 20); // ✅ limit to 20 topics

    setData(combinedData);
  }, []);

  const positive = data.filter((item) => item.sentiment === "positive");
  const neutral = data.filter((item) => item.sentiment === "neutral");
  const negative = data.filter((item) => item.sentiment === "negative");

  return (
    <div className="sentiment-summary-container">
      <h1 className="summary-title" style={{ color: "red" }}>
        Sentiment Summary
      </h1>
      <SentimentSection title="😊 Positive Topics" data={positive} />
      <SentimentSection
        title="😐 Neutral Topics"
        data={neutral}
        isNeutral={true}
      />
      <SentimentSection title="😠 Negative Topics" data={negative} />
    </div>
  );
};

export default SentimentSummary;
