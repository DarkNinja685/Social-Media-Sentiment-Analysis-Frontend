import React, { useState } from "react";
import "./Analysis.css";

export const Analysis = () => {
  const [text, setText] = useState("");
  const [sentiment, setSentiment] = useState(null);

  const analyzeSentiment = async () => {
    if (!text.trim()) {
      alert("Please enter some text for analysis!");
      return;
    }

    // Simulate sentiment result
    const mockAnalysis = Math.random();
    let result = "Neutral";
    if (mockAnalysis > 0.6) result = "Positive";
    else if (mockAnalysis < 0.4) result = "Negative";

    setSentiment(result);
  };

  return (
    <div className="analysis-container">
      {/* Header */}
      <header className="analysis-header">
        <h1>🔍 Sentiment Analysis</h1>
        <p>Understand the tone behind any piece of text instantly.</p>
      </header>

      {/* Input Area */}
      <div className="analysis-input">
        <textarea
          placeholder="Type or paste text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button onClick={analyzeSentiment}>Analyze</button>
      </div>

      {/* Result */}
      {sentiment && (
        <div className={`analysis-result ${sentiment.toLowerCase()}`}>
          <h2>Sentiment: {sentiment}</h2>
        </div>
      )}

      {/* Trending Sentiments */}
      <div className="trending-analysis">
        <h2>🔥 Trending Sentiments</h2>
        <ul>
          <li>
            🚀 AI is revolutionizing tech! <strong>(Positive)</strong>
          </li>
          <li>
            📉 Market is unstable due to inflation. <strong>(Negative)</strong>
          </li>
          <li>
            🤔 People are uncertain about new policies.{" "}
            <strong>(Neutral)</strong>
          </li>
        </ul>
      </div>
    </div>
  );
};
