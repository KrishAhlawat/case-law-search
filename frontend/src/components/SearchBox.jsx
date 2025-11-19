import React, { useState } from 'react';

function SearchBox({ onSearch, loading }) {
  // Local state for input value
  const [keyword, setKeyword] = useState('');

  // Handle search button click
  const handleSearchClick = () => {
    onSearch(keyword);
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !loading) {
      onSearch(keyword);
    }
  };

  return (
    <div className="search-box">
      {/* Search Input Field */}
      <input
        type="text"
        className="search-input"
        placeholder="Enter keyword (e.g., bail, FIR, arrest)..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyPress={handleKeyPress}
        disabled={loading}
      />

      {/* Search Button */}
      <button
        className="search-button"
        onClick={handleSearchClick}
        disabled={loading || !keyword.trim()}
      >
        {loading ? 'Searching...' : 'Search'}
      </button>
    </div>
  );
}

export default SearchBox;
