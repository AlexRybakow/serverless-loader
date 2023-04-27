import React, { useState } from 'react';
import './app.scss'
import { Main } from './components/Main/PageBody/Page';
import { Footer } from './components/Footer/Footer';
import { MobileMenu } from './components/MobileMenu/MobileMenu';
import { Header } from './components/Header/Header';
import { Helmet } from 'react-helmet';

const App = () => {
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
    <>
      <Helmet>
        <title>Serverless_Team - Serverless Consulting Services & Development Experts </title>
        <meta name="description" content="Transform your business with our high-class serverless consulting services. Maximize efficiency and minimize costs. Contact our experts now." />
      </Helmet>
      <div className="app">
        <Header openMenu={handleOpenMenu} />
        <MobileMenu isMenuOpened={menuOpened} closeMenu={handleCloseMenu} />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
