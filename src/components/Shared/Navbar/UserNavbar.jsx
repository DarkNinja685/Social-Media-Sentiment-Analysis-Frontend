import React, { useState, useEffect } from "react";
import "./UserNavbar.css";
import { Link, useNavigate } from "react-router-dom";
import { UserSidebar } from "../Footer/UserSidebar";

const UserNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  const handleSearchInputChange = (e) => {
    const input = e.target.value;
    setSearchTerm(input);

    const storedTopics = JSON.parse(localStorage.getItem("topics") || "[]");

    if (input.trim() === "") {
      setSuggestions([]);
    } else {
      const filteredSuggestions = storedTopics.filter(
        (topic) =>
          typeof topic === "string" &&
          topic.toLowerCase().includes(input.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    }
  };

  const handleSearch = (term = searchTerm) => {
    const storedTopics = JSON.parse(localStorage.getItem("topics") || "[]");

    const matched = storedTopics.filter(
      (topic) =>
        typeof topic === "string" &&
        topic.toLowerCase().includes(term.toLowerCase())
    );

    if (matched.length > 0) {
      localStorage.setItem("searchResults", JSON.stringify(matched));
      navigate("/search");
    } else {
      alert("Topic not found!");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    handleSearch(suggestion);
    setSuggestions([]);
  };

  return (
    <>
      <nav className="navbar">
        <button className="menu-button" onClick={toggleSidebar}>
          ☰
        </button>
        <div className="navbar-logo">SentimentSense</div>
        <ul className="navbar-links">
          <li>
            <Link to="/user/dashboard">Dashboard</Link>
          </li>

          <li className="dropdown">
            <span>Trending Topics</span>
            <ul className="dropdown-menu">
              <li>
                <Link to="/user/page">Trending Topics</Link>
              </li>
              <li>
                <Link to="/user/sportpage">Sports Topics</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/user/sentiment-summary">Sentiment Summary</Link>
          </li>
          <li>
            <Link to="/user/profile">Profile</Link>
          </li>

          {/* Search Section */}
          <li className="search-container">
            <div className="search-wrapper">
              <input
                type="text"
                placeholder="Search topics..."
                value={searchTerm}
                onChange={handleSearchInputChange}
                onKeyDown={handleKeyDown}
                className="search-input"
              />
              <button onClick={() => handleSearch()} className="search-button">
                🔍
              </button>

              {suggestions.length > 0 && (
                <ul className="suggestions-dropdown">
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        </ul>
      </nav>

      <UserSidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
    </>
  );
};

export default UserNavbar;
