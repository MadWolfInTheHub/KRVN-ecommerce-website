import React from 'react';
import Footer from '../Footer/Footer';
import './home.scss'
import { Link } from 'react-router-dom';

const Home = () => {
  

  return (
    <>
        <section className="mainPage__cover"></section>
      <main className="mainPage">
        <section className="mainPage__container">
          <Link to='/forHim' className='mainPage__for-him'>
            <div className='mainPage__for-him_description'>For Him</div>
          </Link>
          <Link to='forHer' className='mainPage__for-her'>
            <div className='mainPage__for-her_description'>For Her</div>
            </Link>
          <p className='mainPage__description'>Choose your ideal look!</p>
        </section>
      </main>
      <Footer/>
    </>
  );
};

export default Home;