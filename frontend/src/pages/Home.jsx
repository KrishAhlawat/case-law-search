import React, { useState } from 'react';
import SearchBox from '../components/SearchBox';
import CaseCard from '../components/CaseCard';

function Home() {
  // State management
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searched, setSearched] = useState(false);

  // Handle search functionality
  const handleSearch = async (keyword) => {
    // Reset states
    setError('');
    setResults([]);
    setSearched(false);

    // Validate keyword
    if (!keyword.trim()) {
      setError('Please enter a keyword.');
      return;
    }

    // Start loading
    setLoading(true);

    try {
      // Make API call to backend
      const response = await fetch('http://localhost:5000/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ keyword: keyword.trim() }),
      });

      // Parse response
      const data = await response.json();

      // Handle error responses
      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch results');
      }

      // Update results
      setResults(data);
      setSearched(true);

    } catch (err) {
      // Handle network or server errors
      setError(err.message || 'Failed to connect to the server. Please try again.');
      console.error('Search error:', err);
    } finally {
      // Stop loading
      setLoading(false);
    }
  };

  return (
    <div className="home-container">
      {/* Header Section */}
      <div className="header">
        <h1 className="title">⚖️ Case Law Search</h1>
        <p className="subtitle">Search for relevant case laws by keyword</p>
      </div>

      {/* Search Box Component */}
      <SearchBox onSearch={handleSearch} loading={loading} />

      {/* Error Message Display */}
      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      {/* Loading State */}
      {loading && (
        <div className="loading-container">
          <div className="spinner"></div>
          <p className="loading-text">Searching...</p>
        </div>
      )}

      {/* Results Section */}
      {!loading && searched && (
        <div className="results-container">
          {results.length > 0 ? (
            <>
              <h2 className="results-title">Found {results.length} result{results.length !== 1 ? 's' : ''}</h2>
              <div className="results-grid">
                {results.map((caseLaw, index) => (
                  <CaseCard 
                    key={index} 
                    caseLaw={caseLaw} 
                    index={index}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="no-results">
              <p>No case laws found for your keyword.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
