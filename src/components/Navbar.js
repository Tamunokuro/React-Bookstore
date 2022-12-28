import '../App.css';
import { Route, Routes, Link } from 'react-router-dom';
import { VscAccount } from 'react-icons/vsc';
import Categories from './Categories';
import Book from './Book';

const Navbar = () => (
  <div className="header">
    <div className="nav">
      <div style={{ display: 'flex' }}>
        <div>
          <Link to="/" className="nav-logo">Bookstore CMS</Link>
        </div>
        <div>
          <ul className="navbar">
            <li className="nav-items"><Link to="/">BOOKS</Link></li>
            <li className="nav-items"><Link to="/categories">CATEGORIES</Link></li>
          </ul>
        </div>
      </div>
      <div>
        <VscAccount
          size={40}
          style={{
            color: '#87ceeb',
            // marginLeft: '45rem',
          }}
        />
      </div>

      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  </div>
);

export default Navbar;
