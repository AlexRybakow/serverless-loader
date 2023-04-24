/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Header.scss';
import logo from './assets/logo.png';

export const Header = ({ openMenu }) => {
  return (
    <header>
      <div className="header__container">
        <img src={logo} alt="logo"/>
        <button type="button" onClick={openMenu} className="header__icon-link" aria-label="Menu"></button>
        <nav className="header__nav">
          <div className="header__nav__list">
              <a href="#" className="header__item">Upwork</a>
              <a href="#" className="header__item">Github</a>
              <a href="#" className="header__item">Linkedin</a>
          </div>
        </nav>
      </div>
    </header>
  );
};