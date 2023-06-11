import React from "react";
import { FiSearch } from "react-icons/fi";
import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="search-bar">
      <div className="search-input-container">
        <input type="text" className="search-input" placeholder="Search..." />
        <div className="search-icon-container">
          <FiSearch className="search-icon" />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
