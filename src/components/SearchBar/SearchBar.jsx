import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // live update
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit} role="search" aria-label="Search posts">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search posts..."
        aria-label="Search posts"
      />
      <button type="submit" aria-label="Submit search">🔍</button>
    </form>
  );
};

export default SearchBar;
