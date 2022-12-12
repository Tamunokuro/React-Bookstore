/* eslint-disable react/prop-types */

import React from 'react';
import BookItem from './BookItem';

const BookList = (props) => {
  const { books, deleteBookProp } = props;
  return (
    <ul>
      {books.map((book) => (
        <BookItem
          key={book.id}
          book={book}
          deleteBookProp={deleteBookProp}
        />
      ))}
    </ul>
  );
};

export default BookList;
