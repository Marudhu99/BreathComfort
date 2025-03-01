import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../assets/css/header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-md navbar-light bg-white shadow fixed-top">
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand fw-bold text-primary" to="/">
            BCAS
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
          >
            <i className="bi bi-list text-primary fs-3"></i>
          </button>

          {/* Desktop Menu */}
          <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item p-4">
                <Link className="nav-link text-dark" to="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item p-4">
                <Link className="nav-link text-dark" to="/about" onClick={toggleMenu}>
                  About Us
                </Link>
              </li>
              <li className="nav-item p-4">
                <Link className="nav-link text-dark" to="/services" onClick={toggleMenu}>
                  Services
                </Link>
              </li>
              <li className="nav-item p-4">
                <Link className="nav-link text-dark" to="/products" onClick={toggleMenu}>
                  Products
                </Link>
              </li>
              <li className="nav-item p-4">
                <Link className="nav-link text-dark" to="/contact" onClick={toggleMenu}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
