/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './MobileMenu.scss';
import logo from '../Header/assets/logo.png';


export const MobileMenu = ({ isMenuOpened, closeMenu }) => {
  return (
    <nav className={`hamburger-menu ${isMenuOpened ? 'hamburger-menu--open' : ''}`} id="menu">
      <div className="hamburger-menu__header__container">
      <img src={logo} alt="logo"/>
        <button type="button" onClick={closeMenu} className="hamburger-menu__icon-link" aria-label="Close menu"> </button>
      </div>
      <ul className="list">
        <li>
          <a className="list__item" href="/upwork">Upwork</a>
        </li>
        <li>
          <a className="list__item" href="/github">Github</a>
        </li>
        <li>
          <a className="list__item" href="/linkedin">Linkedin</a>
        </li>
      </ul>
    </nav>
  );
};