import React, { FC } from 'react';
import './home.scss'
import { Link } from 'react-router-dom';
// import { fetchItems } from '../../service/flightsGateway'

const Home: FC = () => {
  return (
    <>
      <section className="mainPage__cover">
        <h1 className="studio">KRVN Studio</h1>
      </section>
      <main className="mainPage">
        <section className="mainPage__container">
          <Link to='/forHim' className='mainPage__for-him-her card' style={{backgroundImage: 'url(./jon-lead.jpeg)'}}>
            <div className='mainPage__for-him-her_description'>For Him</div>
          </Link>
          <Link to='/forHer' className='mainPage__for-him-her card' style={{backgroundImage: 'url(./model-girl.jpeg)'}}>
            <div className='mainPage__for-him-her_description'>For Her</div>
          </Link>
        </section>
      </main>
    </>
  );
};

export default Home;