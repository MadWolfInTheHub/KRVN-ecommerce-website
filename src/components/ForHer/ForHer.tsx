import React, { FC } from 'react';
import { items } from '../../data/items';
import Card from '../../elements/Card/Card';
import Footer from '../Footer/Footer';
import './forHer.scss'

const ForHer: FC = () => {

  return (
    <main className='forHer'>
      <header className="forHer__cover"></header>
      <section className='forHer__items'>
        {
          items.filter(item => item.category.name === 'forHer')
          .map(item => (
            <Card key={Math.random()} item={item}/>
          ))
        }
      </section>
      <Footer/>
    </main>
  );
};

export default ForHer;