import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';

const HomePage = () => {
  const [query, setQuery] = useState('');

  return (
    <div className="home-page">
      <h1>BOOKS</h1>
      <SearchBar query={query} setQuery={setQuery} />
      <BookList query={query} />
    </div>
  );
};

export default HomePage;
