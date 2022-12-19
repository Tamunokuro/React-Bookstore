import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Container } from 'react-bootstrap';
import InputBook from './InputBook';
import BookList from './BookList';

const Book = () => {
  const [books, setBooks] = useState(JSON.parse(localStorage.getItem('books')) || []);

  const addBookItem = (title, author) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    const updateBooks = [...books, newBook];
    setBooks(updateBooks);
    localStorage.setItem('books', JSON.stringify(updateBooks));
  };

  const deleteBook = (id) => {
    const newBooks = books.filter((book) => book.id !== id);
    localStorage.setItem('books', JSON.stringify(newBooks));
    setBooks(newBooks);
  };

  return (
    <Container>
      <BookList
        books={books}
        deleteBookProp={deleteBook}
      />
      <InputBook addBook={addBookItem} />
    </Container>
  );
};
export default Book;
