import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';
import { fetchBooks } from '../api';
import '../App.css';

const BookList = ({ query }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const books = await fetchBooks();
      setBooks(books);
    };
    getBooks();
  }, []);

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="book-list">
      {filteredBooks.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
