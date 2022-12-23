import '../App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Categories from './Categories';
import Book from './Book';
// import BookList from './BookList';

const Navbar = () => (
  <div className="header">
    <div className="nav">
      <Link to="/" className="nav-logo">Bookstore CMS</Link>
      <ul className="navbar">
        <li className="nav-items"><Link to="/">BOOKS</Link></li>
        <li className="nav-items"><Link to="/categories">CATEGORIES</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  </div>
);

export default Navbar;
