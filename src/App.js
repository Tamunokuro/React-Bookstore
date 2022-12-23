import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import { loadbookThunk } from './redux/books/books';

// eslint-disable-next-line react/prefer-stateless-function
function App() {
  const dispatch = useDispatch();
  dispatch(loadbookThunk());
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
