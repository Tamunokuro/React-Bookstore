/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookItem from './BookItem';
import { deletebookThunk } from '../redux/books/books';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const deleteBook = (id) => {
    dispatch(deletebookThunk(id));
  };

  return (
    <ul>
      {books.map((book) => (
        <li key={book.item_id}>
          <BookItem
            id={book.item_id}
            book={book}
            deleteBookProp={() => deleteBook(book.item_id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default BookList;
