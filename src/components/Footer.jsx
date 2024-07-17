import React from 'react';
import harryGold from '../images/harryGold.png';
import { Link } from 'react-router-dom';
import '../scss/layout/Footer.scss';

function Footer() {
  return (
    <div className="footer">
      <Link to="/">
        <img src={harryGold} className="footer__logo" />
      </Link>
      <p className="footer__text">
        Buscador de personajes de Harry Potter{' '}
        <i className="fa-solid fa-wand-magic"></i>
      </p>
      <nav className="footer__nav">
        Contacto
        <ul className="footer__nav--list">
          <li>
            <a
              className="footer__link"
              href="https://www.linkedin.com/in/nadinestrellavacas/"
              target="__black"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              className="footer__link"
              href="https://github.com/nadinestrella"
              target="__black"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Footer;
