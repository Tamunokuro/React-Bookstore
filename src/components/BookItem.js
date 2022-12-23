/* eslint-disable react/prop-types */

import React from 'react';
import { Button, Container } from 'react-bootstrap';

const BookItem = ({ book, deleteBookProp }) => {
  const {
    title, author, category, id,
  } = book;
  return (
    <Container>
      <div className="singleBook">
        <div className="widgets">
          <small>{ category }</small>
          <h2>{ title }</h2>
          <small>{ author }</small>
        </div>
        <div className="book">
          <small>Current Chapter</small>
          <small>Chapter 17</small>
          <Button variant="primary" onClick={() => deleteBookProp(id)}>Delete Book</Button>
        </div>
      </div>
      <hr />
    </Container>
  );
};

export default BookItem;
