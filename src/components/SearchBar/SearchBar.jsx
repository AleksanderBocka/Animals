import React from "react";
import './SearchBar.css';

export default function SearchBar({ query, setQuery }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search animals..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
