import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';

const Header = ({ title }) => (
  <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
    <div className="container">
      <Link to="/" className="navbar-brand">
        {title}
      </Link>
      <div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link">
              <i className="fas fa-home" /> Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/contact/add" className="nav-link">
              <i className="fas fa-plus" /> Add
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/about" className="nav-link">
              <i className="fas fa-question" /> About
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

Header.defaultProps = {
  title: 'My App'
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
