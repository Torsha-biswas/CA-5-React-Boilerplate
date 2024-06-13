import React from 'react';
import '../App.css';

const BookCard = ({ book }) => (
  <div className="book-card">
    {book.imageLinks && <img src={book.imageLinks.thumbnail} alt={book.title} />}
    <h3>{book.title}</h3>
    <p>{book.authors ? book.authors.join(', ') : 'Unknown Author'}</p>
  </div>
);

export default BookCard;
