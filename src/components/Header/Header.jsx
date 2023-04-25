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
              <a href="https://www.upwork.com/ag/serverless/" rel="nofollow" target="_blank" className="header__item">upwork</a>
              <a href="https://github.com/ServerlessTeam" rel="nofollow" target="_blank" className="header__item">github</a>
              <a href="https://linkedin.com/company/serverless-team" rel="nofollow" target="_blank" className="header__item">linkedin</a>
              <a href="https://www.instagram.com/serverless.team/" rel="nofollow" target="_blank" className="header__item">instagram</a>
          </div>
        </nav>
      </div>
    </header>
  );
};