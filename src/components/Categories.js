import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Button } from 'react-bootstrap';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const status = useSelector((state) => state.category);
  const dispatch = useDispatch();

  const statusCheck = () => {
    dispatch(checkStatus());
  };
  return (
    <Container>
      <Button className="checkstatus" variant="primary" onClick={statusCheck}>Check Status</Button>
      <h2>{status}</h2>
    </Container>
  );
};

export default Categories;
