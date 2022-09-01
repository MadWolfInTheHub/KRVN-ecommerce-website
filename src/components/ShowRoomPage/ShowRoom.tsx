/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { items } from '../../data/items';
import Card from './Card';
import Options from './Options';
import { IIteam } from '../../types/types';
import './ShowRoom.scss'


const ShowRoom: FC = () => {
  const [forHim, setForHim] = useState(true);
  const { pathname, search } = useLocation();

  const searchItems: string[][] = search.split('&').map(el => el.split('='));

  const setSearchInfo = (infoType: string): string | null => {
    const res: string[][] = searchItems.filter(el => el[0].includes(infoType));
    return res[0] === undefined ? null : res[0][1];
  }
  
  const clothes: string | null = setSearchInfo('clothes');
  const type: string | null = setSearchInfo('type');
  // let size: string | null = setSearchInfo('size');
  const priceFrom: number = Number(setSearchInfo('from'));
  const priceTo: number = Number(setSearchInfo('to'));
  
  const filterItemsAccordingToOptions = (): IIteam[] => {
     return items.filter(el => (
      el.category.id === type &&
      (el.price > priceFrom) &&
      (el.price < priceTo)
    )).filter(el => el.description.includes(clothes === null ? '' : clothes));
  }

  useEffect((): void => {
    setForHim(pathname.includes('forHim') ? true : false)
    window.scrollTo(0, 0);
  }, [pathname]);

  const himOrHer: string = forHim ? 'forHim' : 'forHer';

  return (
    <>      
      <main className='showRoom'>
        <header className={`showRoom__cover ${himOrHer}`}/>
        <Options/>
        <section className='showRoom__items'>
          {
            search === '' ?
            items.filter(item => item.category.name === himOrHer)
            .map(item => (
              <Card key={Math.random()} item={item}/>
            ))
            :
            filterItemsAccordingToOptions().filter(item => item.category.name === himOrHer)
            .map(item => (
              <Card key={Math.random()} item={item}/>
            ))
          }
        </section>
      </main>
    </>
  );
};

export default ShowRoom;