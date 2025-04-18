import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => navigate("/signup");
  const handleLogin = () => navigate("/login");
  const handleSignup = () => navigate("/signup");

  return (
    <div className="landing-container">
      {/* Hero Section */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="hero-title"
      >
        Social Media Sentiment Analysis
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="hero-description"
      >
        Understand how people feel about brands, products, or topics by
        analyzing social media posts in real time. Our AI-driven sentiment
        analysis helps you extract meaningful insights and make data-driven
        decisions.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="action-buttons"
      >
        {/* Top corner buttons */}
        <button onClick={handleLogin} className="top-left-btn">
          Login
        </button>
        <button onClick={handleSignup} className="top-right-btn">
          Sign Up
        </button>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="features-container"
      >
        <div className="feature-card">
          <h3>Real-Time Analysis</h3>
          <p>Analyze sentiments from live social media feeds.</p>
        </div>
        <div className="feature-card">
          <h3>AI-Powered Insights</h3>
          <p>Get accurate results using Natural Language Processing (NLP).</p>
        </div>
        <div className="feature-card">
          <h3>Easy to Use</h3>
          <p>Simple and intuitive dashboard for tracking sentiment trends.</p>
        </div>
      </motion.div>

      {/* Get Started Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <button onClick={handleGetStarted} className="get-started-btn">
          Get Started
        </button>
      </motion.div>
    </div>
  );
}
