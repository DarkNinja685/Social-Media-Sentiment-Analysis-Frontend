import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ReportPage.css";

const ReportPage = () => {
  const { topic } = useParams();
  const [reason, setReason] = useState("");
  const navigate = useNavigate();

  console.log("Topic:", topic); // ✅ Check if it's captured

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!reason) return alert("Please enter a reason!");

    try {
      await axios.post("/report", { topic, reason });
      alert("Thanks! Your report has been submitted.");
      navigate("/user/sentiment-summary");
    } catch (err) {
      console.error("Failed to report topic:", err);
      alert("Error submitting report.");
    }
  };

  return (
    <div className="report-post-page">
      <h2>🚨 Report Topic: #{topic}</h2>
      <form onSubmit={handleSubmit} className="report-form">
        <label>Why are you reporting this topic?</label>
        <textarea
          rows="5"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Enter your reason here..."
        />
        <button type="submit">Submit Report</button>
      </form>
    </div>
  );
};

export default ReportPage;
