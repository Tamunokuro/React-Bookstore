/* eslint-disable react/prop-types */
import React from 'react';
// import { Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import BookItem from './BookItem';
import { deletebookThunk } from '../redux/books/books';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const deleteBook = (id) => {
    dispatch(deletebookThunk(id));
  };

  const getPercent = () => Math.floor(Math.random() * 100);
  const percentage = getPercent();

  return (
    <div style={{ marginTop: '2rem', maxWidth: '100%' }}>
      <ul>
        {books.map((book) => (
          <li key={book.item_id}>
            <BookItem
              id={book.item_id}
              book={book}
              percentage={percentage}
              deleteBookProp={() => deleteBook(book.item_id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
