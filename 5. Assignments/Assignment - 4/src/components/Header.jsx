import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-main">B.S ABDUR RAHMAN</span>
            <span className="logo-sub">CRESCENT INSTITUTE</span>
          </div>
          <nav className={isMenuOpen ? 'active' : ''}>
            <ul>
              <li>
                <Link to="/" className={isActive('/')} onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className={isActive('/about')} onClick={closeMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/departments" className={isActive('/departments')} onClick={closeMenu}>
                  Departments
                </Link>
              </li>
              <li>
                <Link to="/contact" className={isActive('/contact')} onClick={closeMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
}
