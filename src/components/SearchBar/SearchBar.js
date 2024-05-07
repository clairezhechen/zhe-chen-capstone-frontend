import React, { useState } from "react";
import "./SearchBar.scss";

const SearchBar = ({ onSearchChange }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setSearchTerm(newValue);
    onSearchChange(newValue); // 通知父组件搜索词已更改
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button
        type="button"
        className="search-button"
        aria-label="Search Recipe Delight"
        aria-expanded="false"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="m23.809 21.646-6.205-6.205a9.68 9.68 0 0 0 1.857-5.711C19.461 4.365 15.096 0 9.73 0 4.365 0 0 4.365 0 9.73c0 5.366 4.365 9.73 9.73 9.73a9.678 9.678 0 0 0 5.487-1.698L21.455 24l2.354-2.354zM2.854 9.73c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877A6.884 6.884 0 0 1 2.854 9.73z"></path>
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
