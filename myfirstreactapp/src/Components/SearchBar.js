import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query); // Call the onSearch callback with the current query
  };

  return (
    <div className="search-bar-container">
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search..."
        />
        <button type="submit">Search</button>
        </form>
    </div>
  );
};

export default SearchBar;
