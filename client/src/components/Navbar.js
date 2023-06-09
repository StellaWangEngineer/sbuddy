import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-regular-svg-icons';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <img src="/path/to/logo.png" alt="Logo" className="navbar__logo" />
      </div>
      <div className="navbar__center">
        <input type="text" className="navbar__search" placeholder="Search Group" />
      </div>
      <div className="navbar__right">
        <button className="navbar__button">Log In / Sign Up</button>
        <button className="navbar__button">Create Group</button>
        <button className="navbar__icon-button">
          <FontAwesomeIcon icon={faSun} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
