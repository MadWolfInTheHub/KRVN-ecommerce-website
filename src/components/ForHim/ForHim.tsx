import React, { FC } from 'react';
import { items } from '../../data/items';
import Card from '../../elements/Card/Card';
import Footer from '../Footer/Footer';
import './forHim.scss'


const ForHim: FC = () => {

  return (
    <main className='forHim'>
      <header className="forHim__cover"></header>
      <section className='forHim__items'>
        {
          items.filter(item => item.category.name === 'forHim')
          .map(item => (
            <Card key={Math.random()} item={item}/>
          ))
        }
      </section>
      <Footer/>
    </main>
  );
};

export default ForHim;