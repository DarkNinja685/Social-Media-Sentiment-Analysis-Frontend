// SearchResults.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SearchResults = () => {
  const { query } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const storedTopics = JSON.parse(localStorage.getItem("topics")) || [];
    const filtered = storedTopics.filter((topic) =>
      topic.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  }, [query]);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Search Results for "{query}"</h2>
      {results.length > 0 ? (
        <ul>
          {results.map((topic, idx) => (
            <li key={idx}>{topic}</li>
          ))}
        </ul>
      ) : (
        <p>No topics found matching your search.</p>
      )}
    </div>
  );
};

export default SearchResults;
