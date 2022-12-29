/* eslint-disable react/prop-types */
import { RiDonutChartFill } from 'react-icons/ri';

import React from 'react';
import { Button } from 'react-bootstrap';

const BookItem = ({ book, deleteBookProp }) => {
  const {
    title, author, category, id, percentage,
  } = book;
  return (
    <>
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
        <div style={{ display: 'flex' }}>
          <RiDonutChartFill
            style={{
              color: '#87ceeb',
              marginRight: '0 5rem',
            }}
            size={120}
          />
          <div>
            <small style={{
              display: 'flex',
              fontSize: '25px',
              alignItems: 'center',
            }}
            >
              {percentage}
              %
            </small>
            <span style={{ color: '#857979' }}>Completed</span>
          </div>
        </div>
        <div style={{ borderLeft: '1px solid #dcdcdc', paddingLeft: '5rem' }} className="book">
          <small>Current Chapter</small>
          <small>Chapter 17</small>
          <Button
            style={{
              backgroundColor: '#87ceeb',
            }}
            onClick={() => deleteBookProp(id)}
          >
            Delete Book
          </Button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default BookItem;
