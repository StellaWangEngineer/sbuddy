import React, { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import "./SearchBar.css";

function SearchBar({ onSearch }) {
  const [keyword, setKeyword] = useState("");

  const handleInputChange = (event) => {
    setKeyword(event.target.value);
  };

  useEffect(() => {
    onSearch(keyword);
  }, [keyword]);

  const handleSearch = () => {
    onSearch(keyword);
  };

  return (
    <div className="search-container">
      <div className="searchbar">
        <input
          type="text"
          placeholder="Search Groups..."
          value={keyword}
          onChange={handleInputChange}
        />
      </div>
      <div className="search-icon" onClick={handleSearch}>
        <BiSearch />
      </div>
    </div>
  );
}

export default SearchBar;