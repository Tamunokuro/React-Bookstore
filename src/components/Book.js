import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import { bookRemove } from '../redux/books/books';
import BookList from './BookList';
import InputBook from './InputBook';

const Book = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const deleteBook = (id) => {
    dispatch(bookRemove(id));
  };

  return (
    <Container>
      <BookList
        books={books}
        deleteBookProp={deleteBook}
      />
      <InputBook />
    </Container>
  );
};
export default Book;
