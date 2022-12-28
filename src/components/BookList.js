/* eslint-disable react/prop-types */
import React from 'react';
// import { Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import BookItem from './BookItem';
import { deletebookThunk } from '../redux/books/books';
import BookLoading from './BookLoading';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const deleteBook = (id) => {
    dispatch(deletebookThunk(id));
  };

  return (

    <div style={{ marginTop: '2rem', maxWidth: '100%' }}>
      {

      books.length === 0
        ? (
          <>
            <BookLoading />
          </>
        )
        : (
          <ul>
            {books.map((book) => (
              <li key={book.item_id}>
                <BookItem
                  id={book.item_id}
                  book={book}
                  percentage={book.percentage}
                  deleteBookProp={() => deleteBook(book.item_id)}
                />
              </li>
            ))}
          </ul>
        )
    }
    </div>
  );
};

export default BookList;
