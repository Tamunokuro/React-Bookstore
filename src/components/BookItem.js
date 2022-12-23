/* eslint-disable react/prop-types */
import { RiDonutChartFill } from 'react-icons/ri';

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
          <small className="book-category">{ category }</small>
          <h2 className="book-title">{ title }</h2>
          <small className="book-author">{ author }</small>
          <div className="book-tools">
            <small className="tools">Comment</small>
            <small className="tools">Remove</small>
            <small className="tools">Edit</small>
          </div>
        </div>
        <div>
          <RiDonutChartFill
            style={{
              color: '#87ceeb',
              borderRight: '1px solid #dcdcdc',
              padding: '0 1rem',
            }}
            size={120}
          />
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
