/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { items } from '../../data/items';
import Card from '../../elements/Card/Card';
import Footer from '../Footer/Footer';
import './ShowRoom.scss'


const ShowRoom: FC = () => {
  const [forHim, setForHim] = useState(true)
  const { pathname } = useLocation();
  
  useEffect((): void => {
    setForHim(pathname.includes('forHim') ? true : false)
  }, [pathname])

  const himOrHer: string = forHim ? 'forHim' : 'forHer'

  return (
    <>
    {
      
      <main className='showRoom'>
        <header className={`showRoom__cover ${himOrHer}`}/>
        <section className={`showRoom__items`}>
          {
            items.filter(item => item.category.name === himOrHer)
            .map(item => (
              <Card key={Math.random()} item={item}/>
            ))
          }
        </section>
        <Footer/>
      </main>
    }
    </>
  );
};

export default ShowRoom;