import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import '../App.css';

const SearchBar = ({ query, setQuery }) => (
  <div className="search-container">
    <SearchIcon />
    <input
      type="text"
      className="search-bar"
      placeholder="Search for a book"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  </div>
);

export default SearchBar;
