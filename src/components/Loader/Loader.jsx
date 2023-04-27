import React, { useState } from 'react';
import './Loader.scss'
import { Main } from '../Main/PageBody/Page';
import { Footer } from '../Footer/Footer';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { Header } from '../Header/Header';

export const Loader = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const handleOpenMenu = () => {
    setMenuOpened(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseMenu = () => {
    setMenuOpened(false);
    document.body.style.overflow = 'auto';
  };

  return (
      <section className="loader__text">
        <Header openMenu={handleOpenMenu} />
        {/* <p>
        // serverless.team is loading...
      </p> */}
        <MobileMenu isMenuOpened={menuOpened} closeMenu={handleCloseMenu} />
        <Main />
        <Footer />
      </section>
  );
}

