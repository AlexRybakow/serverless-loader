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
        <a href="https://www.upwork.com/ag/serverless/" rel="nofollow" target="_blank" className="header__item">upwork</a>
        </li>
        <li>
        <a href="https://github.com/ServerlessTeam" rel="nofollow" target="_blank" className="header__item">github</a>
        </li>
        <li>
        <a href="https://linkedin.com/company/serverless-team" rel="nofollow" target="_blank" className="header__item">linkedin</a>
        </li>
        <li>
        <a href="https://www.instagram.com/serverless.team/" rel="nofollow" target="_blank" className="header__item">instagram</a>
        </li>
      </ul>
    </nav>
  );
};