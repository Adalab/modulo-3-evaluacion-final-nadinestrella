import React from 'react';
import harryTitle from '../images/harryGold.png';
import { Link } from 'react-router-dom';
import '../scss/layout/Header.scss';

function Header({ characters }) {
  return (
    <header>
      <Link to="/" className="header">
        <img className="header__title" src={harryTitle} alt="title" />
      </Link>
    </header>
  );
}

export default Header;
