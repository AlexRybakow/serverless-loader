import React from 'react';
import './app.scss'
import { Loader } from './components/Loader/Loader';
import { Helmet } from 'react-helmet';

const App = () => {
  return (
    <>
      <Helmet>
        <title>Serverless_Team - Serverless Consulting Services & Development Experts </title>
        <meta name="description" content="Transform your business with our high-class serverless consulting services. Maximize efficiency and minimize costs. Contact our experts now." />
      </Helmet>
      <div className="app">
        <Loader />
      </div>
    </>
  );
}

export default App;
